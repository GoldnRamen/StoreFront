import "@/styles/globals.css";
import { Inter } from "next/font/google";
// import {Homepage} from "../pages/home"

const inter = Inter({ subsets: ["latin"] })
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      {/* <Homepage {...pageProps} /> */}
    </main>
  );
}
