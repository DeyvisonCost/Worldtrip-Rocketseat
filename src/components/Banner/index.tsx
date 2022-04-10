import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={[163, 335]}
      bgImage="url('/images/background.png')"
      bgPosition={["100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        align="center"
        justify="space-between"
        maxWidth={1160}
        w="100%"
        mx="auto"
      >
        <Box>
          <Heading color="white" fontSize={["xl", "4xl"]} fontWeight="500">
            5 continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            color="white"
            fontSize={["sm", "xl"]}
            mt="5"
            maxWidth={["100%", 550]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box>
          <Image
            maxWidth={417}
            display={["none", "block"]}
            transform="translateY(48px)"
            src="/images/airplane.svg"
            alt="Avião voando entre nuvens"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
