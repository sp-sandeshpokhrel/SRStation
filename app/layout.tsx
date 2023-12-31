import Nav from "@components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import CopyrightSection from "@components/Copyright";
import { Session } from "next-auth";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type layoutProps = { children: React.ReactNode; session: Session };

export default function RootLayout({ children, session }: layoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <div className="mx-16">
            <Nav />
            {children}
            <CopyrightSection />
          </div>
        </Provider>
      </body>
    </html>
  );
}
