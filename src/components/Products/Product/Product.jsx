import "./Product.scss";

const Product = ({ product }) => {
  const image = product.image.map((image) => {
    return (
      <img key={product._id} src={"http://localhost:8080/uploads/" + image} />
    );
  });
  return (
    <div className="cardsContainer">
      <div className="card">
        <p>{product.title}</p>
        <p>{product.description}</p>
        {image}
        <p>${product.price}</p>
        {/* <button>Add to Bag</button> */}
      </div>
    </div>
  );
};

export default Product;
