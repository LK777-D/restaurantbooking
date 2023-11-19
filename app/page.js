import Image from "next/image";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Restaurants from "@/components/Restaurants";
import Ad from "@/components/Ad";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Restaurants />
      <Ad />
      <Footer />
    </main>
  );
}
