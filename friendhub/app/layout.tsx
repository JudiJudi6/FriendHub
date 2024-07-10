import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Nav from "./components/Nav";
import {Poppins} from 'next/font/google' 

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-bg-dark`}>
          <Nav />
          <main>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
