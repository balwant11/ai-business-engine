import HeroFashion from "./variants/HeroFashion";
import HeroMinimal from "./variants/HeroMinimal";

// You could add HeroLuxury, HeroSplit, etc. here

export default function HeroSection({ data, variant }) {
  switch (variant) {
    case "fashion":
      return <HeroFashion data={data} />;
    case "minimal":
      return <HeroMinimal data={data} />;
    case "luxury":
      // Fallback to fashion for now if luxury isn't explicitly defined
      return <HeroFashion data={data} />;
    default:
      return <HeroFashion data={data} />;
  }
}
