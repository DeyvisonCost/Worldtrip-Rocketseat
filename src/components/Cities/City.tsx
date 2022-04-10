import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

import Image from 'next/image'

interface CityProps {
  name: string;
  country: string;
  countryCode: string;
  image: string;
}

export function City({ name, country, countryCode, image }: CityProps) {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius="4px"
      overflow="hidder"
      bgColor={colorMode === "light" ? "white" : "gray.900"}
    >
      <Image src={image} alt={`${name}, ${country}`} width="256" height="173" />
      <Flex
        borderBottomRadius="4px"
        p="6"
        align="center"
        justify="space-between"
        border="1px"
        borderColor={colorMode === "light" ? "yellow.300" : "yellow.500"}
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500">
            {country}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: "3em",
            lineHeight: "3em",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 4px 0 #FFBA0840",
          }}
          aria-label={country}
          countryCode={countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
