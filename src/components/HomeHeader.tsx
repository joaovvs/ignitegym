import { HStack, Heading, Text, VStack, Icon } from "native-base";

import { MaterialIcons} from '@expo/vector-icons';
import userPhotoDefault from '@assets/userPhotoDefault.png';
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";

export function HomeHeader(){
    const { user, signOut } = useAuth();

    return(
        <HStack bg='gray.600' paddingTop={16} paddingBottom={5} paddingX={8} alignItems='center'>
            <UserPhoto
                source={user.avatar ? {uri:  user.avatar }: userPhotoDefault}
                alt='Imagem do usuário'
                size={16}
                marginRight={4}/>

            <VStack flex={1}>
                <Text color='gray.100' fontSize={'md'}>Olá</Text>

                <Heading color='gray.100' fontFamily={'heading'} fontSize={'md'}>
                     {user.name}
                </Heading>
            </VStack>

            <TouchableOpacity onPress={signOut}>
                <Icon 
                    as={MaterialIcons}
                    name='logout'
                    color='gray.200'
                    size={7}/>
            </TouchableOpacity>
        </HStack>
    );
};