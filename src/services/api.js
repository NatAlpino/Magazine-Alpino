import axios from "axios";

export const get = async (url, headers) => {
  if (!headers) {
    headers = {
      'Content-type': 'application/json'
    };
  }
  return axios.get(url).then((response) => response)
}



























// import axios from "axios";

// const base = "https://fakestoreapi.com/";

// async function getProducts () {
//     const response = await axios.get (base + "products")

//     return response.json();
// }

// async function getProductsInfo(productsId, type) {
//     if (productsId) {
//       switch (type) {
//         case "products":
//           return(`${base}/products/${productsId}`, 'GET');
//         default: 
//           throw new Error('Produto inválido!')
//       }
//     }
//   }

//   export default {
//     getProducts,
//     getProductsInfo
//   }