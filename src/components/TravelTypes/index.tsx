import { Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";
import NextLink from "next/link";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "repeat(5, 1fr)"]}
      gap={[1, 5]}
      w="100%"
      maxWidth={1160}
      mt={["10", "32"]}
      mx="auto"
    >
      <NextLink href="continent/north-america">
        <a>
          <GridItem>
            <Type icon="cocktail" text="vida noturna" />
          </GridItem>
        </a>
      </NextLink>

      <NextLink href="continent/south-america">
        <a>
          <GridItem>
            <Type icon="beach" text="praia" />
          </GridItem>
        </a>
      </NextLink>

      <NextLink href="continent/europe">
        <a>
          <GridItem>
            <Type icon="building" text="moderno" />
          </GridItem>
        </a>
      </NextLink>

      <NextLink href="continent/asia">
        <a>
          <GridItem>
            <Type icon="museum" text="clássico" />
          </GridItem>
        </a>
      </NextLink>
      <NextLink href="/">
        <a>
          <GridItem colSpan={[2, 1]}>
            <Type icon="earth" text="e mail..." />
          </GridItem>
        </a>
      </NextLink>
    </Grid>
  );
}
