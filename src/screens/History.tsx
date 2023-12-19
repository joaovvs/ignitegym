import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';


export function History(){
    const [exercises, setexercises] = useState([
        {
            title: '26.08.22',
            data: ['Puxada fontal', 'remada unilateral','a','b']
        },
        {
            title: '27.08.22',
            data: ['Puxada fontal']
        },
        ]);
    
    return(
        <VStack flex={1}>
            <ScreenHeader title='Histórico de Exercícios'/>

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard/>
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color='gray.200' fontFamily={'heading'} fontSize={'md'} mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={6}
                contentContainerStyle={exercises.length === 0 && {flex:1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color={'gray.100'} textAlign={'center'}>
                        Não há exercícios registrados ainda. {'\n'}
                        Vamos fazer exercícios hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />

        </VStack>
    );
}