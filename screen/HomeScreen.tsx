import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../providers/rootStackParamList.type';
import FeedReelScroll from '../components/FeedReelScroll/FeedReelScroll';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { PostProps } from '../components/FeedReelScroll/post.type';

import mockData from '../mock/posts.mock';

export type HomeProps = {

}
const HomeScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = () => {
  const limit = 4;
  const [data, setData] = useState<PostProps[]>([]);

  useFocusEffect(useCallback(() => {
    setData(mockData.slice(0, limit));
  }, []));


  const fetchData = async (offset: number, fetchMoreLimit: number): Promise<PostProps[]> => {
    return mockData.slice(offset, offset + fetchMoreLimit);
  };

  return <FeedReelScroll initialData={data} fetchData={fetchData} limit={limit} />;
};

export default HomeScreen;
