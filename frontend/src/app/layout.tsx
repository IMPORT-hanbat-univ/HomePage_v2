import Recoil from "@/components/Recoil";
import "./global.scss";
import ReactQuery from "@/components/ReactQuery";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Recoil>
          <ReactQuery>{children}</ReactQuery>
        </Recoil>
        <Footer />
      </body>
    </html>
  );
}
