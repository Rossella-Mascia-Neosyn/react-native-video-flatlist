import React from 'react';
import {ReactVideoProps} from 'react-native-video';

export type VideoData = {
  id: number;
  source: ReactVideoProps['source'];
};

export type PostProps = {
  id: number;
  video: ReactVideoProps;
  headerComponent?: React.JSX.Element;
  actionsContent?: React.JSX.Element;
  bodyContent?: React.JSX.Element | string;
  overlayComponent?: React.JSX.Element;
  onPressPost?: (videoData: VideoData) => void;
};
