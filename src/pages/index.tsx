import { Button, Text, Flex, Spacer, HStack } from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useState } from 'react'

const Index = () => {
  const [count, setCount] = useState<number>(0);

  return (
  <Container height="100vh">
    <Hero title="calumvc" alignItems="start"/>
    <Main>
      
      <Text color="text" textAlign="center">{ count } </Text>

      <HStack spacing={3} justifyContent="center">
        <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => {setCount(count+1)}}>Add 1</Button>
        <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => {setCount(count * 2)}}>Double it!</Button>          
        <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => {setCount(0)}}>Poof!</Button>
        <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => {setCount(count-1)}}>Goodbye 1</Button>
      </HStack>
      
    </Main>
  </Container>
  )
};

export default Index
