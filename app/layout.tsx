import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

// export const metadata = {
//   title: "Terram | Terarijumi",
//   description: "Ručno izrađeni terarijumi za dom i kancelariju",

//   keywords: [
//     "terarijum",
//     "terarijumi",
//     "biljke u staklu",
//     "dekoracija enterijera",
//     "office biljke",
//     "kancelarijske biljke",
//     "zeleni dekor",
//   ],
//   openGraph: {
//     title: "Terram",
//     description: "Priroda u vašem prostoru",
//     url: "https://terramnext.vercel.app",
//     siteName: "Terram",
//     locale: "sr_RS",
//     type: "website",
//   },
// };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}