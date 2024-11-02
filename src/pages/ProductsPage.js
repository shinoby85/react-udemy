import {Link} from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Page 1'},
  {id: 'p2', title: 'Page 2'},
  {id: 'p3', title: 'Page 3'},
  {id: 'p4', title: 'Page 4'},
  {id: 'p5', title: 'Page 5'},
];

function ProductsPage() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;