import "./globals.css";
import businessData from "@/data/business.json";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getThemeStyles } from "@/lib/theme";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: businessData.name,
  description:
    businessData.editorial_summary || `Welcome to ${businessData.name}`,
};

export default function RootLayout({ children }) {
  const website = businessData.website_content;
  const themeStyles = getThemeStyles(website.theme);

  return (
    <html lang="en">
      <body
        style={themeStyles}
        className="font-main text-primary bg-secondary antialiased"
      >
        <Navbar
          menu={website.pages}
          business={businessData}
          variant={website.navbarVariant}
        />
        {children}
        <Footer business={businessData} variant={website.footerVariant} />
        <WhatsAppButton phone={businessData.phone} />
      </body>
    </html>
  );
}
