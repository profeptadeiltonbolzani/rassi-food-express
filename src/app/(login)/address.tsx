import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Address() {

    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-white mx-8 pt-10">
            <Text className="text-2xl font-normal">
                Criar sua conta
            </Text>
            <View className=" w-full pt-5">
                <BoxInput label="Endereço" placeholder="Digite seu endereço" />
                <View className="flex-row gap-3">
                    <View className="w-[70%]">
                        <BoxInput label="Complemeto" placeholder="Ex.: Qd. 01 Lt. 04" />
                    </View>
                    <View className="w-[27%]">
                        <BoxInput label="Numero" placeholder="Nº" />
                    </View>
                </View>
                <BoxInput label="Bairro" placeholder="Digite seu bairro" />
                <View className="flex-row gap-3">
                    <View className="w-[70%]">
                        <BoxInput label="Cidade" placeholder="Digite sua cidade" />
                    </View>
                    <View className="w-[27%]">
                        <BoxInput label="UF" placeholder="UF" />
                    </View>
                </View>
                <BoxInput label="CEP" placeholder="Digite o CEP" />
            </View>
            <View className=" w-full pt-5 mb-28">
                <Button label="Criar minha conta" url=""></Button>
            </View>

        </View>
    );
}