import {useParams} from "react-router-dom";

function ProductDetailsPage() {
  const params = useParams();
  return (
    <>
      <h2>Product Details Page</h2>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailsPage;