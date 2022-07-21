import { Flex, Heading, HStack, Icon, Image, Link } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import marketingLogoUrl from "../img/marketing-logo.svg";
function Header() {
  return (
    <Flex
      px={28}
      py={5}
      width="full"
      bg="#222"
      maxH={20}
      justifyContent="space-between"
    >
      <Flex>
        <Image minW="10rem" py={0.5} src={marketingLogoUrl} />
      </Flex>
      <Flex>
        <HStack fontSize={12} spacing="30px" color="white">
          <Link>
            <Icon as={IoHomeOutline} h={5} w={5} />
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
