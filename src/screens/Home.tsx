import { useState } from 'react';

import { HomeHeader } from '@components/HomeHeader';
import { VStack, FlatList, HStack, Heading, Text } from 'native-base';

import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home(){
    const [groups, setGroups] = useState(['Costas', 'Bíceps','Tríceps','Ombro']);
    const [exercises, setExercises] = useState(['Puxada fontal', 'Remada curvada','Remada unilateral', 'Levantamento terra']);
    const [groupSelected, setGroupSelected] = useState('Costas');

    return(
        <VStack flex={1}>
            <HomeHeader/>

            
 
                <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Group 
                        name={item} 
                        isActive={groupSelected===item}
                        onPress={() => setGroupSelected(item)}/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{px: 8}}
                marginY={10}
                maxHeight={10}
                />
            <VStack flex={1} px={8}>
                <HStack justifyContent={'space-between'} marginBottom={5}>
                    <Heading color={'gray.200'} fontSize={'md'}>
                        Exercícios
                    </Heading>

                    <Text color={'gray.200'} fontSize={'sm'}>
                        {exercises.length}
                        </Text>
                </HStack>


            
                <FlatList
                data={exercises}
                keyExtractor={item => item}
                renderItem={({item})=> (
                <ExerciseCard name={item}/>
                )}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{paddingBottom: 20}}
                />
            </VStack>
            
            
            
            
        </VStack>
    );
}