import GalleryMasonry from "./variants/GalleryMasonry";

export default function GallerySection({ data, variant }) {
  switch (variant) {
    case "masonry":
      return <GalleryMasonry data={data} />;
    default:
      return <GalleryMasonry data={data} />;
  }
}
