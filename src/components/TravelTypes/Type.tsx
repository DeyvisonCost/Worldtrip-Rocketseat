import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={`/images/${icon}.svg`} w={85} h={85} mb="6" />
      ) : (
        <Text color="yellow.500" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text>{text}</Text>
    </Flex>
  );
}
