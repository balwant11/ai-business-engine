import TeamGrid from "./variants/TeamGrid";

export default function TeamSection({ data, variant }) {
  switch (variant) {
    case "grid":
      return <TeamGrid data={data} />;
    default:
      return <TeamGrid data={data} />;
  }
}
