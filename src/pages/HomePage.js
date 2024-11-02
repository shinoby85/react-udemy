import {Link, useNavigate} from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    setTimeout(() => {
      navigate("/products");
    }, 1500);
  }

  return (
    <>
      <h1>Home page</h1>
      <p>
        Go to <Link to="/products">the list of product</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;