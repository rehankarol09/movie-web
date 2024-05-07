import  { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "@mui/material";
import { RouterConfig } from "./navigation/routerconfig";

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Container
        sx={{
          maxWidth: "90% !important",
          marginTop: { xs: "90px", sm: "120px" },
          marginBottom: { xs: "90px", sm: "120px" },
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <RouterConfig />
      </Container>
      <Footer />
    </>
  );
}
