import "./Product.scss";

const Product = ({ product }) => {
  const image = product.image.map((image) => {
    return (
      <img key={product._id} src={"http://localhost:8080/uploads/" + image} />
    );
  });
  return (
    <div>
      <p>{product.description}</p>
      {image}
    </div>
  );
};

export default Product;
