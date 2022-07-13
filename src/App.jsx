import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Header />
      <Footer />
    </Box>
  );
}

export default App;
