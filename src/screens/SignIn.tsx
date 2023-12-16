import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando na academia"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={32}>
        <LogoSvg />

        <Text color={"gray.100"} fontSize={"sm"}>
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
          Acesse sua Conta
        </Heading>

        <Input placeholder="E-mail"/>
        <Input placeholder="Senha" type="password"/>

        <Button title='Acessar'/>

        <Button title='Criar conta' variant='outline'/>
      </Center>
    </VStack>
  );
}
