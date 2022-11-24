import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StoreProvider } from "easy-peasy";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from "../components/Apollo/client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import store from "../components/store";
import { theme } from "../components/Styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {


  return (
    
      <StoreProvider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ToastContainer/>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
      </StoreProvider>
   
  );

}

export default MyApp;
