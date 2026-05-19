import NavbarLuxury from "./variants/NavbarLuxury";
import NavbarMinimal from "./variants/NavbarMinimal";

export default function Navbar({ menu, business, variant }) {
  switch (variant) {
    case "luxury":
      return <NavbarLuxury menu={menu} business={business} />;
    case "minimal":
      return <NavbarMinimal menu={menu} business={business} />;
    default:
      // Default to luxury if none specified
      return <NavbarLuxury menu={menu} business={business} />;
  }
}
