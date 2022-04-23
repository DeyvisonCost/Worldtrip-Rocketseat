import { Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";
import NextLink from "next/link";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth={1160}
      gap={[1, 5]}
      
    >
      <NextLink href="continent/north-america" >
       
          <GridItem 
            style={{cursor: 'pointer'}} 
            boxShadow='xs' 
            p='6' 
            rounded='md' 
            _hover={{
                     boxShadow: "0 3px 8px 0 #00000021", 
                     transition: " .4s"
                    }}       
          >

            <Type icon="cocktail" text="vida noturna" />
          </GridItem>
        
      </NextLink>

      <NextLink href="continent/south-america">
        
          <GridItem 
            style={{cursor: 'pointer'}} 
            boxShadow='xs' 
            p='6' 
            rounded='md'
            _hover={{
              boxShadow: "0 3px 8px 0 #00000021", 
              transition: " .4s"
             }}
          >
            <Type icon="beach" text="praia" />
          </GridItem>
        
      </NextLink>

      <NextLink href="continent/europe">
       
          <GridItem 
            style={{cursor: 'pointer'}} 
            boxShadow='xs' 
            p='6' 
            rounded='md'
            _hover={{
              boxShadow: "0 3px 8px 0 #00000021", 
              transition: " .4s"
             }}>
            <Type icon="building" text="moderno" />
          </GridItem>
        
      </NextLink>

      <NextLink href="continent/asia">
        
          <GridItem 
            style={{cursor: 'pointer'}} 
            boxShadow='xs' 
            p='6' 
            rounded='md'
            _hover={{
              boxShadow: "0 3px 8px 0 #00000021", 
              transition: " .4s"
             }}
          >
            <Type icon="museum" text="clássico" />
          </GridItem>
        
      </NextLink>
      <NextLink href="/" >
        
          <GridItem 
            colSpan={[2, 2, 2, 1]} 
            style={{cursor: 'pointer'}} 
            boxShadow='xs' 
            p='6' 
            rounded='md'
            _hover={{
              boxShadow: "0 3px 8px 0 #00000021", 
              transition: " .4s"
             }}
            >
            <Type icon="earth" text="e mail..."  />
          </GridItem>
       
      </NextLink>
    </Grid>
  );
}
