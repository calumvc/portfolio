import { Flex, Heading, FlexProps } from '@chakra-ui/react'
import { FC } from "react";

type HeroProps = { title?: string; } & FlexProps;

export const Hero: FC<HeroProps> = ({ title = "hello" , ...props }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    {...props}
  >
    <Heading fontSize="6vw">{ title }</Heading>
  </Flex>
)
