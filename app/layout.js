import { Inter, Pacifico, Acme, Kanit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kanit",
});
const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-acme",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${kanit.variable} ${acme.variable} `}
    >
      <body className={inter.className}>
        <section className="headerbg">
          <Nav />
          <Header />
        </section>
        {children}
      </body>
    </html>
  );
}
