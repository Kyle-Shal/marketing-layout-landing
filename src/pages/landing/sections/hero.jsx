import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import heroUrl from "./img/hero.jpg";

function Hero() {
  return (
    <Box
      backgroundImage={heroUrl}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex>
        <Grid>
          <GridItem w="60%" h="200" m={10} ml={28}>
            <Stack>
              <Text color="white">RESEARCH</Text>
              <Heading color="white">Innovation in your hands.</Heading>
              <Text color="grey">
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco
              </Text>
              <Button
                color="white"
                textColor="grey"
                variant="solid"
                maxW="10rem"
              >
                LEARN MORE
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default Hero;
