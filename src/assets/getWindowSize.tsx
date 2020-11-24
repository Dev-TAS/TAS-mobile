import { Dimensions } from "react-native";

export default function() {
  const width = Dimensions.get('window').width;

  return width;
}