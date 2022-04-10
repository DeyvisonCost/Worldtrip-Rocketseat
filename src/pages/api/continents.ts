export default function (req, res) {


  res.status(200).json({
    continents: [
      {
        name: "América do Norte",
        description:
          "Entre viagens a trabalho, intercâmbios para estudar e passeios de férias com a família ou amigos, esses lugares atraem turistas durante todo o ano. De praias paradisíacas, reservas naturais e monumentos históricos à atmosfera urbana das metrópoles, passando por cidades que são parada obrigatória para quem deseja fazer compras, existe muito a explorar na América do Norte!",
        summary: "Características distintas e com muita diversidade cultural",
        image: "/images/continents/north-america/north-america.jpg",
        url: "north-america",
        countries: 3,
        languages: 256,
        topCities: 132,
        cities: [
          {
            name: "Nova York",
            country: "Estados Unidos",
            countryCode: "US",
            image: "/images/continents/north-america/new-york.jpg",
          },
          {
            name: "Cancun",
            country: "México",
            countryCode: "MX",
            image: "/images/continents/north-america/cancun.jpg",
          },
          {
            name: "Toronto",
            country: "Canadá",
            countryCode: "CA",
            image: "/images/continents/north-america/toronto.jpg",
          },
          {
            name: "São Francisco",
            country: "Estados Unidos",
            countryCode: "US",
            image: "/images/continents/north-america/sam-francisco.jpg",
          },
        ],
      },
      {
        name: "América do Sul",
        description:
          "A América do Sul tem doze países. Países que apesar de compartilharem palavras, comidas e costumes têm suas características bem marcadas e um povo que lida com dificuldades diárias, mas nunca deixa de caminhar.",
        summary: "O continente com maior riquesa natural.",
        image: "/images/continents/south-america/south-america.jpg",
        url: "south-america",
        countries: 12,
        languages: 456,
        topCities: 124,
        cities: [
          {
            name: "Rio de Janeiro",
            country: "Brasil",
            countryCode: "BR",
            image: "/images/continents/south-america/rio-de-janeiro.jpg",
          },
          {
            name: "Machu Picchu",
            country: "Peru",
            countryCode: "PE",
            image: "/images/continents/south-america/machu-picchu.jpg",
          },
          {
            name: "Salar de Uyuni",
            country: "Bolívia",
            countryCode: "BO",
            image: "/images/continents/south-america/salar-uyuni.jpg",
          },
          {
            name: "Ilha de Páscoa",
            country: "Chile",
            countryCode: "CL",
            image: "/images/continents/south-america/ilha-de-pascoa.jpg",
          },
          {
            name: "Ushuaia",
            country: "Argentina",
            countryCode: "AR",
            image: "/images/continents/south-america/ushuaia.jpg",
          },
        ],
      },
      {
        name: "Ásia",
        description:
          "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial.",
        summary: "O maior dos continentes.",
        image: "/images/continents/asia/asia.jpg",
        url: "asia",
        countries: 50,
        languages: 2322,
        topCities: 105,
        cities: [
          {
            name: "Bangkok",
            country: "Tailândia",
            countryCode: "TH",
            image: "/images/continents/asia/bangkok.jpg",
          },
          {
            name: "Bali",
            country: "Indonesia",
            countryCode: "ID",
            image: "/images/continents/asia/bali.jpg",
          },
          {
            name: "Hiroshima",
            country: "Japão",
            countryCode: "JP",
            image: "/images/continents/asia/hiroshima.jpg",
          },
          {
            name: "Dubai",
            country: "Emirados Árabes Unidos",
            countryCode: "AE",
            image: "/images/continents/asia/dubai.jpg",
          },
          {
            name: "Siem Reap",
            country: "Camboja",
            countryCode: "KH",
            image: "/images/continents/asia/siem-reap.jpg",
          },
        ],
      },
      {
        name: "África",
        description:
          "O continente africano possui uma das maiores diversidades culturais do planeta. Na chamada África Branca, ao norte, predominam os povos caucasóides e semitas e na chamada África Negra, ao sul do Deserto do Saara, encontram-se os povos pigmeus, bosquímanos, hotentotes, sudaneses e os bantos.",
        summary: "Considerada o berço da humanidade.",
        image: "/images/continents/africa/africa.jpg",
        url: "africa",
        countries: 54,
        languages: 2092,
        topCities: 112,
        cities: [
          {
            name: "Marraquexe",
            country: "Marrocos",
            countryCode: "MA",
            image: "/images/continents/africa/marrakech.jpg",
          },
          {
            name: "Nairóbi",
            country: "Quênia",
            countryCode: "KE",
            image: "/images/continents/africa/nairobi.jpg",
          },
          {
            name: "Cidade do Cabo Central",
            country: "África do Sul",
            countryCode: "ZA",
            image: "/images/continents/africa/cidade-do-cabo.jpg",
          },
          {
            name: "Kigali",
            country: "Ruanda",
            countryCode: "RW",
            image: "/images/continents/africa/kigali.jpg",
          },
        ],
      },
      {
        name: "Europa",
        description:
          "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        summary: "O continente mais antigo.",
        image: "/images/continents/europe/europe.jpg",
        url: "europe",
        countries: 50,
        languages: 60,
        topCities: 180,
        cities: [
          {
            name: "Londres",
            country: "Reino Unido",
            countryCode: "GB",
            image: "/images/continents/europe/london.jpg",
          },
          {
            name: "Paris",
            country: "França",
            countryCode: "FR",
            image: "/images/continents/europe/paris.jpg",
          },
          {
            name: "Roma",
            country: "Itália",
            countryCode: "IT",
            image: "/images/continents/europe/roma.jpg",
          },
          {
            name: "Praga",
            country: "República Tcheca",
            countryCode: "CZ",
            image: "/images/continents/europe/praga.jpg",
          },
          {
            name: "Amsterdã",
            country: "Holanda",
            countryCode: "BQ",
            image: "/images/continents/europe/amsterdam.jpg",
          },
        ],
      },
      {
        name: "Oceânia",
        description:
          "A Oceania é um continente que caracteriza-se pela grande presença de ilhas. O nome Oceania é uma referência ao oceano Pacífico, que é a principal referência de unidade da região.",
        summary: "O maior agrupamento de ilhas do planeta.",
        image: "/images/continents/oceania/oceania.jpg",
        url: "oceania",
        countries: 16,
        languages: 1250,
        topCities: 86,
        cities: [
          {
            name: "Sidney",
            country: "Austrália",
            countryCode: "AU",
            image: "/images/continents/oceania/sidney.jpg",
          },
          {
            name: "Milford Sound",
            country: "Nova Zelândia",
            countryCode: "NZ",
            image: "/images/continents/oceania/milford-sound.jpg",
          },
          {
            name: "Queenstown",
            country: "Nova Zelândia",
            countryCode: "NZ",
            image: "/images/continents/oceania/queenstown.jpg",
          },
          {
            name: "Bora Bora",
            country: "Polinésia Francesa",
            countryCode: "PF",
            image: "/images/continents/oceania/bora-bora.jpg",
          },
          {
            name: "Ilhas Palau",
            country: "Palau",
            countryCode: "PW",
            image: "/images/continents/oceania/palau.jpg",
          },
        ],
      },
    ],
  });
}
