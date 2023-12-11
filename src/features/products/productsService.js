import axios from "axios";

const API_URL = "http://localhost:8080/products";

const getAll = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const productsService = {
  getAll,
};

export default productsService;
