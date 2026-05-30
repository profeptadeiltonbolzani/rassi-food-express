import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-500 mt-16 mb-16">
      <View className="flex-1 items-center justify-between pt-10 pb-10 bg-blue-500" >
        <Image source={icons.logo02} />
        <Pressable onPress={() => router.navigate('/login')}>
        <Text className="text-4xl font-bold text-white">
          Iniciar
        </Text>
        </Pressable>
        <Text className="text-xl font-normal text-white">
          By React Native
        </Text>
      </View>
    </SafeAreaView>
  );
} 
