/* eslint-disable react-hooks/exhaustive-deps */
import { useIsFocused } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { ImageURISource, Pressable, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Video, { ReactVideoPoster } from 'react-native-video';
import { PostProps } from './post.type';

export type VideoItemProps = {
  item: PostProps;
  isVisible: boolean;
  preload: boolean;
};

const VideoItem: React.FC<VideoItemProps> = ({ isVisible, item, preload }) => {
  const [paused, setPaused] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setIsPaused(!isVisible);
    if (!isVisible) {
      setPaused(null);
      setVideoLoaded(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isFocused) {
      setIsPaused(true);
    }
    if (isFocused && isVisible) {
      setIsPaused(false);
    }
  }, [isFocused]);

  const handlerVideoLoad = () => {
    setVideoLoaded(true);
  };

  const _onPressPost = () => {
    const file = {
      id: item.id,
      source: item.video.source,
    };
    item.onPressPost && item.onPressPost(file);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoContainer} onPress={_onPressPost}>
        {!videoLoaded && (
          <FastImage
            source={{
              uri: ((item.video.poster as ReactVideoPoster).source as ImageURISource).uri,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}

        {isVisible || preload ? (
          <Video
            poster={item.video.poster}
            source={isVisible || preload ? { uri: item.video.source?.uri } : undefined}
            bufferConfig={{
              minBufferMs: 2500,
              maxBufferMs: 3000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 2500,
              cacheSizeMB: 200,
            }}
            ignoreSilentSwitch="ignore"
            playWhenInactive={false}
            playInBackground={false}
            controls={false}
            disableFocus={true}
            style={styles.video}
            paused={isPaused}
            repeat
            hideShutterView
            minLoadRetryCount={5}
            resizeMode="cover"
            shutterColor="transparent"
            onReadyForDisplay={handlerVideoLoad}
          />
        ) : null}
      </Pressable>
    </View>
  );
};

const areEqual = (prevProps: VideoItemProps, nextProps: VideoItemProps) => {
  return prevProps.item.id === nextProps.item.id && prevProps.isVisible === nextProps.isVisible;
};

export default memo(VideoItem, areEqual);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoContainer: {
    flex: 1,
  },
});
