import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, VStack, Text , Icon} from "native-base";
import { Entypo } from '@expo/vector-icons'

import { api } from "@services/api";

import { ExerciseDTO } from "@dtos/ExercisesDTO";

type Props = TouchableOpacityProps & {
    exercise: ExerciseDTO;
};

export function ExerciseCard({ exercise,...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bgColor={'gray.500' } alignItems={'center'} p={2} pr={4} rounded={'md'} marginBottom={3}>
        <Image
          source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${exercise.thumb}`,
          }}
          alt={`Imagem do exercício ${exercise.name}`}
          width={16}
          height={16}
          rounded={"md"}
          marginRight={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize={"lg"} color={"white"} fontFamily={'heading'}>
            {exercise.name}
          </Heading>
          <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={2}>
            {exercise.series} séries x {exercise.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name='chevron-thin-right' color={'gray.300'} />
      </HStack>
    </TouchableOpacity>
  );
}
