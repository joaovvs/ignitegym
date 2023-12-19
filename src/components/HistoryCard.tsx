import { HStack, Heading, VStack, Text } from "native-base";


type Props = {

}

export function HistoryCard(){
    return(
        <HStack width='full' px={5} py={4} mb={3} 
            backgroundColor={'gray.600'} rounded={'md'} 
            alignItems={'center'} justifyContent={'space-between'}>
            <VStack mr={5} flex={1}>
                <Heading color={'white'} fontSize={'md'} fontFamily={'heading'} textTransform={'capitalize'} numberOfLines={1}>
                    Costas
                </Heading>
                <Text color={'gray.100'} fontSize={'lg'} numberOfLines={1}>
                    Puxada frontal
                </Text>
            </VStack>
            <Text color={'gray.300'} fontSize={'md'}>
                08:56
            </Text>
        </HStack>
    )
}