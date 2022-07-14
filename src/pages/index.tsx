import { Button, Text, Flex, Spacer, HStack } from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useState } from 'react'
import { Stat } from '../components/Stat'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Index = () => {
  const [count, setCount] = useState<number>(0);

  return (
    // <>
    //   <Hero title="calumvc" alignItems="start" />
    <Container height="100vh">
      <Tabs colorScheme="red" align="center">
        <TabList>
          <Tab color="text">
            <p>Main</p>
          </Tab>
          <Tab color="text">
            <p>League</p>
          </Tab>
          <Tab color="text">
            <p>Super Calum Game</p>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text color="#5D3FD3" textAlign="center">Main Page</Text>
          </TabPanel>
          <TabPanel>
            <Stat />
          </TabPanel>
        </TabPanels>
        <Hero title="calumvc" alignItems="start" />
        <Main>

        {/* <Text color="text" textAlign="center">{count} </Text> */}
        {/* <HStack spacing={3} justifyContent="center">
          <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => { setCount(count + 1) }}>Add 1</Button>
          <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => { setCount(count * 2) }}>Double it!</Button>
          <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => { setCount(0) }}>Poof!</Button>
          <Button colorScheme={'purple'} variant="outline" w='18%' onClick={() => { setCount(count - 1) }}>Goodbye 1</Button>
        </HStack> */}
        {/* <Stat /> */}
        </Main>
      </Tabs>
    </Container>
  // </>
  )
};

export default Index
