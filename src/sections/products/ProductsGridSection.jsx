import ProductsGridCards from "./variants/ProductsGridCards";

export default function ProductsGridSection({ data, variant }) {
  switch (variant) {
    case "cards":
      return <ProductsGridCards data={data} />;
    default:
      return <ProductsGridCards data={data} />;
  }
}
