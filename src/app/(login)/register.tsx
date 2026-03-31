import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Register() {

    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-white mx-8 pt-10">
            <Text className="text-2xl font-normal">
                Criar sua conta
            </Text>
            <View className=" w-full pt-5 mb-10">
                <BoxInput label="Nome Completo" placeholder="Digite seu nome" />
                <BoxInput label="E-mail" placeholder="Digite seu melhor e-mail" />
                <BoxInput label="WhatsApp" placeholder="Digite seu WhatsApp" />
                <BoxInput label="Senha" placeholder="Digite uma senha segura" isPassword />
                <BoxInput label="Confirme a Senha" placeholder="Confirme a senha segura" isPassword />
            </View>
            <View className=" w-full pt-5 mb-28">
                <Button label="Proximo passo" url="./address"></Button>
            </View>

        </View>
    );
}