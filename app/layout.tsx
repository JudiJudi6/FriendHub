import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Nav from "./components/nav/Nav";
import { Poppins } from "next/font/google";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-bg-dark relative min-h-screen text-white`}>
          <div
            className="absolute top-0 left-0 right-0 bottom-0  overflow-hidden w-full h-full"
            id="app"
          ></div>
          <Nav />
          <main>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
