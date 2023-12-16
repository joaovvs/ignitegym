import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, VStack, Text , Icon} from "native-base";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    name: string;
};

export function ExerciseCard({ name,...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bgColor={'gray.500' } alignItems={'center'} p={2} pr={4} rounded={'md'} marginBottom={3}>
        <Image
          source={{
            uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
          }}
          alt="Imagem do exercício"
          width={16}
          height={16}
          rounded={"md"}
          marginRight={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize={"lg"} color={"white"}>
            {name}
          </Heading>
          <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name='chevron-thin-right' color={'gray.300'} />
      </HStack>
    </TouchableOpacity>
  );
}
