import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', description: '', price: '', imageUrl: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      ></textarea>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        step="0.01"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="url"
        name="imageUrl"
        value={product.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

// import React, { useState } from 'react';

// const ProductForm = ({ onAddProduct }) => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prevProduct => ({
//       ...prevProduct,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProduct(product);
//     setProduct({ name: '', description: '', price: '', imageUrl: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="name"
//         value={product.name}
//         onChange={handleChange}
//         placeholder="Product Name"
//         required
//         className="w-full p-2 border rounded"
//       />
//       <textarea
//         name="description"
//         value={product.description}
//         onChange={handleChange}
//         placeholder="Product Description"
//         required
//         className="w-full p-2 border rounded"
//       ></textarea>
//       <input
//         type="number"
//         name="price"
//         value={product.price}
//         onChange={handleChange}
//         placeholder="Price"
//         step="0.01"
//         required
//         className="w-full p-2 border rounded"
//       />
//       <input
//         type="url"
//         name="imageUrl"
//         value={product.imageUrl}
//         onChange={handleChange}
//         placeholder="Image URL"
//         required
//         className="w-full p-2 border rounded"
//       />
//       <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//         Add Product
//       </button>
//     </form>
//   );
// };

// export default ProductForm;