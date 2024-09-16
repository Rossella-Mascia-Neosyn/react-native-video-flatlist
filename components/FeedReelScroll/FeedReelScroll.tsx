/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo, StyleSheet, Text, View, ViewabilityConfig, ViewToken } from 'react-native';

import { PostProps } from './post.type';
import VideoItem from './VideoItem';

export const SCREEN_HEIGHT = Dimensions.get('window').height - 105;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export type FeedReelScrollProps = {
  fetchData: (offset: number, limit: number) => Promise<PostProps[]>;
  initialData: PostProps[];
  limit: number;
  isOnTab?: boolean;
};

const FeedReelScroll: React.FC<FeedReelScrollProps> = ({ fetchData, initialData, limit, isOnTab = true }) => {
  const [data, setData] = useState<PostProps[]>();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [isRefreshing, setsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setData(initialData);
    setHasMore(true);
    setOffset(0);
  }, [initialData]);

  const viewabilityConfig = useRef<ViewabilityConfig>({
    itemVisiblePercentThreshold: 80,
  }).current;

  const onViewableItemsChanged = useRef(
    debounce(({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentVisibleIndex(viewableItems[0].index || 0);
      }
    }),
  ).current;

  const getItemLayout = useCallback(
    (data: ArrayLike<PostProps> | null | undefined, index: number) => ({
      length: SCREEN_HEIGHT,
      offset: SCREEN_HEIGHT * index,
      index,
    }),
    [],
  );

  const removeDuplicates = (originalData: PostProps[]): PostProps[] => {
    const uniqueDataMap = new Map();
    originalData?.forEach(item => {
      if (!uniqueDataMap.has(item.id)) {
        uniqueDataMap.set(item.id, item);
      }
    });
    return Array.from(uniqueDataMap.values());
  };

  const fetchFeed = useCallback(
    debounce(async (fetchOffset: number) => {
      if (isLoading || !hasMore) {
        return;
      }
      setIsLoading(true);
      try {
        const newData = await fetchData(fetchOffset, limit);
        setOffset(fetchOffset + limit);
        if (newData?.length < limit) {
          setHasMore(false);
        }
        setData(prev => removeDuplicates([...(prev || []), ...newData]));
      } catch (error) {
        console.error('fetchFeed: ', error);
      } finally {
        setIsLoading(false);
      }
    }, 200),
    [isLoading, hasMore, data],
  );

  const keyExtractor = useCallback((item: PostProps) => item.id.toString(), []);

  const renderVideoList = useCallback(
    ({ index, item }: ListRenderItemInfo<PostProps>) => {
      return (
        <View style={styles.post} key={index}>
          <VideoItem
            isVisible={currentVisibleIndex === index && isOnTab}
            item={item}
            preload={Math.abs(currentVisibleIndex + 5) >= index}
          />
          <View style={styles.overlayComponent}>{item.overlayComponent}</View>
          <View style={styles.bodyContent}><Text style={{ color: '#ffff' }}>{item.bodyContent}</Text></View>
        </View>
      );
    },
    [currentVisibleIndex, isOnTab],
  );

  const memoizedValue = useMemo(() => renderVideoList, [currentVisibleIndex, data, isOnTab]);

  const onRefresh = async () => {
    setData(initialData);
    setHasMore(true);
    setOffset(0);
    setsRefreshing(true);
    try {
      await fetchFeed(offset);
    } catch (error) {
      console.error('On refresh:', error);
    } finally {
      setsRefreshing(false);
    }
  };

  return (
    <FlatList
      data={data || []}
      keyExtractor={keyExtractor}
      renderItem={memoizedValue}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      pagingEnabled
      windowSize={2}
      disableIntervalMomentum
      removeClippedSubviews
      initialNumToRender={1}
      maxToRenderPerBatch={2}
      onEndReachedThreshold={0.1}
      decelerationRate="normal"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      getItemLayout={getItemLayout}
      onEndReached={async () => {
        await fetchFeed(offset);
      }}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      style={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  post: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'relative',
  },
  overlayComponent: {
    position: 'absolute',
  },
  bodyContent: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
});
export default FeedReelScroll;
