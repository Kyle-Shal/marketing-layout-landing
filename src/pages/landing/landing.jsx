import { Box } from "@chakra-ui/react";
import Hero from "./sections/hero";
import Testimonials from "./sections/testimonials";

function Landing() {
  return (
    <Box>
      <Hero />
      <Testimonials />
    </Box>
  );
}

export default Landing;
