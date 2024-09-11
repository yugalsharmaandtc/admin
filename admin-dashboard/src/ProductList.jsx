import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Description</th>
            <th className="px-6 py-3 border-b">Price</th>
            <th className="px-6 py-3 border-b">Image URL</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {products.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-6 py-4 border-b">{product.name}</td>
              <td className="px-6 py-4 border-b">{product.description}</td>
              <td className="px-6 py-4 border-b">${Number(product.price).toFixed(2)}</td>
              <td className="px-6 py-4 border-b">{product.imageUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;



//  import React from 'react';
// const ProductList = ({ products }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border">Name</th>
//             <th className="px-4 py-2 border">Description</th>
//             <th className="px-4 py-2 border">Price</th>
//             <th className="px-4 py-2 border">Image URL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="px-4 py-2 border">{product.name}</td>
//               <td className="px-4 py-2 border">{product.description}</td>
//               <td className="px-4 py-2 border">${Number(product.price).toFixed(2)}</td>
//               <td className="px-4 py-2 border">{product.imageUrl}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;
