import { Flex, Heading, HStack, Icon, Link } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
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
        <HStack spacing="30px" color="white">
          <Link>
            <Icon as={IoHomeOutline} h={6} w={6} />
          </Link>
          <Link>FEATURES</Link>
          <Link>PRODUCTS</Link>
          <Link>TESTIMONIALS</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Header;
