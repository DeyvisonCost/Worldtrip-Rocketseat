import { Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

interface CityProps {
  topCities: number;
  cities: {
    name: string;
    country: string;
    countryCode: string;
    image: string;
  }[];
}

export function Cities({ cities, topCities }: CityProps) {
  console.log(cities)
  return (
    <>
      <Heading fontSize={["2xl", "4xl"]} fontWeight="500" mb="10">
        Cidades +{topCities}
      </Heading>
      <Grid
        templateColumns={["1fr", "repeat(4, 1fr)"]}
        gap={["20px", "40px"]}
        align="center"
        justify="center"
        px={["30px", "0"]}
      >
        {cities.map((city, index) => (
          <City
            key={index}
            name={city.name}
            country={city.country}
            countryCode={city.countryCode}
            image={city.image}
          />
        ))}
      </Grid>
    </>
  );
}
