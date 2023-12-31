import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BootStrapJs from "./components/BootstrapJs";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import CarouselCom from "./components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rutah Hub",
  description: "Created by Keith Ocitti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CarouselCom />
        {children}
        <BootStrapJs />
      </body>
    </html>
  );
}
