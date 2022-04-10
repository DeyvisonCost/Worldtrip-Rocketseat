import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import Head from "next/head";

import {
  Box,
  Flex,
  Grid,
  Icon,
  IconButton,
  Heading,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Cities } from "../../components/Cities";

export interface ContinentProps {
  continent: {
    name: string;
    description: string;
    summary: string;
    image: string;
    url: string;
    countries: number;
    languages: number;
    topCities: number;
    cities: {
      name: string;
      country: string;
      countryCode: string;
      image: string;
    }[];
  };
}
//{ continent }: ContinentProps
export default function Continent({ continent }: ContinentProps) {
  if(!continent){return <h1>...</h1>}
  return (
    <>
      <Head>
        <title>Wordtrip | {continent.name}</title>
      </Head>

      <Header />

      <Flex
        w="100%"
        h={["150px", "500px"]} 
        bgImage={`url(${continent.image})`}
        bgPosition={["100% 40%", "100% 50%"]}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          align={["center", "flex-end"]}
          justify={["center", "flex-start"]}
          w="100%"
          maxWidth="1160px"
          mx="auto"
        >
          <Box>
            <Heading
              color="brand.200"
              fontSize={["2xl", "5xl"]}
              fontWeight="500"
              mb={[0, 16]}
              filter='drop-shadow(5px 3px 3px #333)'
            >
              {continent.name}
            </Heading>
          </Box>
        </Flex>
      </Flex>

      <Flex direction="column" maxWidth="1160px" mx="auto" mb={18} px={4}>
        <Grid templateColumns={["1fr", "1.2fr 1fr"]} gap={[5, 20]} my={[8, 20]}>
          <Text fontSize={["lg", "2xl"]} color="brand.700" textAlign="justify">
            {continent.description}
          </Text>

          <Stack align="center" justify="space-between" direction="row">
            <Box textAlign="center" m="0">
              <Heading
                fontSize={["2xl", "5xl"]}
                fontWeight="500"
                color="yellow.500"
              >
                {continent.countries}
              </Heading>
              <Text fontSize={["md", "xl"]} fontWeight="500" color="brand.700">
                países
              </Text>
            </Box>

            <Box textAlign="center" m="0">
              <Heading
                fontSize={["2xl", "5xl"]}
                fontWeight="500"
                color="yellow.500"
              >
                {continent.languages}
              </Heading>
              <Text fontSize={["md", "xl"]} fontWeight="500" color="brand.700">
                línguas
              </Text>
            </Box>

            <Box textAlign="center" m="0">
              <Heading
                fontSize={["2xl", "5xl"]}
                fontWeight="500"
                color="yellow.500"
              >
                {continent.cities.length}
              </Heading>
              <Text
                as="div"
                fontSize={["md", "xl"]}
                fontWeight="500"
                color="brand.700"
              >
                cidades {continent.topCities - continent.cities.length}+
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="Information Icon"
                      bgColor="transparent"
                      p="0"
                      m="0"
                    >
                      <Icon
                        as={RiInformationLine}
                        color="brand.10"
                        fontSize={14}
                        justifySelf="start"
                      />
                    </IconButton>
                  </PopoverTrigger>

                  <PopoverContent
                    fontSize={["sm", "md"]}
                    color="brand.700"
                    borderColor="yellow.300"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      São mais de {continent.topCities} cidades
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Box>
          </Stack>
        </Grid>

        <Cities cities={continent.cities} topCities={continent.topCities} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api
    .get("continents")
    .then((response) => response.data.continents);
  const paths = continents.map((continent) => ({
    params: { url: continent.url },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ContinentProps> = async (
  context
) => {
  const { url } = context.params;
  const continents = await api
    .get(`/continents`)
    .then((response) => response.data.continents);
  const continent = continents.find((continent) => continent.url === url);

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60, // 1hr
  };
};
