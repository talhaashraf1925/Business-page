import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
