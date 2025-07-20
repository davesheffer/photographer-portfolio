import { Amatic_SC, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientLayout from "@/components/ClientLayout";

const amatic = Amatic_SC({ 
  subsets: ["hebrew", "latin"], 
  display: "swap", 
  style: "normal", 
  weight: '700'
});

const openSans = Open_Sans({ 
  subsets: ["hebrew", "latin"], 
  display: "swap", 
  style: "normal", 
  weight: '400'
});

export const metadata = {
  title: "נופר שפר - צלמת מקצועית | Nofar Shafer - Professional Photographer",
  description: "צלמת אירועי חברה, פרפורמס ומשפחה - נופר שפר | Corporate events, performance and family photographer - Nofar Shafer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${openSans.className} overflow-x-hidden`}>
        <LanguageProvider>
          <div className="h-[100vh]">
            <Navigation amatic={amatic} />
            <ClientLayout>
              {children}
            </ClientLayout>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
