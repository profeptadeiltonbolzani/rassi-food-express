import icons from "@/src/constants/icons";
import { Stack } from "expo-router";
import { Image } from "react-native";
import "../../style/global.css";

export default function LoginLayout() {
  return (<Stack screenOptions={{
    headerStyle: { backgroundColor: "#ffffff" },
    contentStyle: { backgroundColor: "#ffffff" },
  }} >
    <Stack.Screen
      name="index"
      options={{
        headerTitle: () => (
          <Image source={icons.logo01} />
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    />
  </Stack >
  );
}
