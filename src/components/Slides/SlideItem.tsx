import { Flex, Heading, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemProps {
  image: string;
  name: string;
  summary: string;
  url: string;
}

export function SlideItem({ image, name, summary, url }: SlideItemProps) {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      align="center"
      justify="center"
      direction="column"
      bgImage={`url(${image})`}
      bgPosition="100% 50%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
      
    > 
      <Link href={`/continent/${url}`}>
        <ChakraLink filter='drop-shadow(5px 3px 3px #333)' _hover={{textDecoration: 'none'}}>
          <Heading fontSize={["3xl", "5xl"]} color="white" fontWeight="bold" >
            {name}
          </Heading>
          <Text
            fontSize={["0.8rem", "1xl", "2xl"]}
            fontWeight="bold"
            color="white"
            mt={["2", "4"]}
          >
            {summary}
          </Text>
          <Button mt='5' colorScheme="blue" >Conheça Mais</Button>
        </ChakraLink >
      </Link>
    </Flex>
  );
}
