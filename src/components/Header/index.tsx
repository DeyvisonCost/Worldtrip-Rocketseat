import { useRouter } from "next/router";
import Link from "next/link";
import {
  Flex,
  IconButton,
  useColorMode,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";

import { RiArrowLeftSLine, RiMoonLine, RiSunLine } from "react-icons/ri";
import { Logo } from "./Logo";

export function Header() {
  const { asPath } = useRouter();
  const noIndex = asPath !== "/";

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      h="100"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="center"
    >
      {noIndex && (
        <Link href="/">
          <ChakraLink mt="-5" display="flex" align="flex-start">
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </ChakraLink>
        </Link>
      )}
      <Flex mt="-3" w="90%" justify="center" align="center">
        <Logo />
      </Flex>
      <Flex mt="-5" textAlign="center" p={0}>
        <IconButton
          icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Dark Mode"
        />
      </Flex>
    </Flex>
  );
}
