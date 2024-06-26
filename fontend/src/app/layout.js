import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider"




const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400","500","700"], // あなたが必要とするウェイトを指定します
  subsets: ['cyrillic'], // 必要なサブセットを指定します
  display: 'swap', // フォントの表示方法を指定します
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className=" flex justify-between max-w-screen-2xl min-h-screen my-0 mx-auto py-0 px-5 flex-col">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
