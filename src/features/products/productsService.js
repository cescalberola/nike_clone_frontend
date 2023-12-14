import axios from "axios";

const API_URL = "https://nike-clone-backend-dev-sbrt.4.us-1.fl0.io/products";

const getAll = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
const getById = async (_id) => {
  const res = await axios.get(API_URL + "/" + _id);
  return res.data;
};

const productsService = {
  getAll,
  getById,
};

export default productsService;
