import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Slides } from "../components/Slides";

type SlideItemProps = {
  id: number;
  image: string;
  name: string;
  summary: string;
  url: string;
};

interface ContinentsProps extends SlideItemProps {
  continents: Array<SlideItemProps>;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentsProps[]>([]);

  useEffect(() => {
    async function loadContinents() {
      api.get("/continents").then((response) => {
       
        
       setContinents(response.data.continents);
      });
    }

    loadContinents();
  }, []);

  return (
    <>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bgColor="brand.700"
        my={["9", "20"]}
      />
      <Heading
        fontSize={["lg", "4xl"]}
        fontWeight="500"
        color="brand.700"
        mb={["5", "14"]}
        textAlign="center"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slides continents={continents} />
    </>
  );
}
