const Product = ({ product }) => {
  const image = product.image.map((image) => {
    return (
      <img
        id="productImage"
        className="product-card__hero-image css-1fxh5tw"
        height="100%"
        loading="eager"
        sizes=""
        key={product._id}
        src={"http://localhost:8080/uploads/" + image}
        alt={product.title}
      />
    );
  });
  return (
    <div className="card">
      {image}
      <p className="product-card__title">{product.title}</p>
      <p className="product-card__subtitle">{product.description}</p>
      <p className="product-card__subtitle">{product.color}</p>
      <p className="product-card__price">${product.price}</p>
    </div>
  );
};

export default Product;
