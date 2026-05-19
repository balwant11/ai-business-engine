import "./globals.css";

import businessData from "@/data/business.json";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export default function RootLayout({ children }) {

  const website = businessData.website_content;

  return (
    <html lang="en">
      <body>

        <Navbar
          menu={website.pages}
          business={businessData}
        />

        {children}

        <Footer business={businessData} />

        <WhatsAppButton
          phone={businessData.phone}
        />

      </body>
    </html>
  );
}