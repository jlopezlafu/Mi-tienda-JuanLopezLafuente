import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div className="containerList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
