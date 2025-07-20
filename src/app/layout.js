import { Amatic_SC, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const amatic = Amatic_SC({ subsets: ["hebrew"], display: "swap", style: "normal", weight: '700', stretch: "normal", variant: "normal", size: "100%", lineHeight: 1.5, text: "inherit", textTransform: "none", letterSpacing: "normal" });
const openSans = Open_Sans({ subsets: ["hebrew"], display: "swap", style: "normal", weight: '400', stretch: "normal", variant: "normal", size: "100%", lineHeight: 1.5, text: "inherit", textTransform: "none", letterSpacing: "normal"});
export const metadata = {
  title: "נופר שפר - צלמת מקצועית",
  description: "צלמת אירועי חברה, פרפורמס ומשפחה - נופר שפר",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${openSans.className} overflow-x-hidden`}>
        <div className="h-[100vh]">
          <Navigation amatic={amatic} />
          {children}
        </div>
      </body>
    </html>
  );
}
