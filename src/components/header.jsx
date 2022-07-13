import { Flex, Heading, HStack, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      px="200px"
      py="20px"
      width="full"
      bg="#222"
      justifyContent="space-between"
    >
      <Flex>
        <Heading color="white">MY Logo</Heading>
      </Flex>
      <Flex>
        <HStack color="white">
          <Link>FEATURES</Link>
          <Link>PRODUCTS</Link>
          <Link>TESTIMONIALS</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Header;
