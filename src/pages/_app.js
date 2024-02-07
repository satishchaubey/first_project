import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomBar from "../../component/bottomBar";
export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
