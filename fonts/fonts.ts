import { Inter, Parisienne, Reem_Kufi } from "next/font/google";

export const parisienFont = Parisienne({
    subsets: ["latin"],
    weight: "400",
  });
  

  export const arabicFont = Reem_Kufi({
    subsets: ["arabic"],
    weight: "400",
  });

 export const fontHeading = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
  })
  
 export const fontBody = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
  })