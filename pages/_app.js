import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { theme } from '../components/Styles';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>;
}

export default MyApp;
