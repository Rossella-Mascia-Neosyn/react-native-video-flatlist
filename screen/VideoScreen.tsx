
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../providers/rootStackParamList.type";
import { Text, View } from "react-native";

export type HomeProps = {

}
const VideoScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Video'>> = () => {

  return (
    <View>
      <Text>video</Text>
    </View>
  );
};
export default VideoScreen;