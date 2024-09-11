import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import OrderList from './OrderList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [orders] = useState([
    { orderNumber: "ORD001", amount: 150.99, address: "123 Main St, Anytown, USA" },
    { orderNumber: "ORD002", amount: 89.50, address: "456 Elm St, Otherville, USA" },
    { orderNumber: "ORD003", amount: 205.75, address: "789 Oak Rd, Somewhere, USA" }
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Product</h2>
          <ProductForm onAddProduct={addProduct} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Products</h2>
          <ProductList products={products} />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Orders</h2>
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import ProductForm from './ProductForm';
// import ProductList from './ProductList';
// import OrderList from './OrderList';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [orders] = useState([
//     { orderNumber: "ORD001", amount: 150.99, address: "123 Main St, Anytown, USA" },
//     { orderNumber: "ORD002", amount: 89.50, address: "456 Elm St, Otherville, USA" },
//     { orderNumber: "ORD003", amount: 205.75, address: "789 Oak Rd, Somewhere, USA" }
//   ]);

//   const addProduct = (product) => {
//     setProducts([...products, { ...product, id: Date.now() }]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Add New Product</h2>
//           <ProductForm onAddProduct={addProduct} />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Products</h2>
//           <ProductList products={products} />
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-2">Orders</h2>
//         <OrderList orders={orders} />
//       </div>
//     </div>
//   );
// };

// export default App;