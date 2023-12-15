import { VStack, Image, Text, Center } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png';


export function SignIn(){
    return(
        <VStack flex={1} bg='gray.700'>
            <Image 
                source={BackgroundImg}
                alt='Pessoas treinando na academia'
                resizeMode='contain'
                position='absolute'
            />
            <Center my={32}>
            <LogoSvg/>

            <Text color={'gray.100'} fontSize={'sm'}>
                Treine sua mente e o seu corpo
            </Text>
            </Center>
        </VStack>
    
    );
};