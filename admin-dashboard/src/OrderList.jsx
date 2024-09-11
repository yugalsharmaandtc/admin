import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 border-b">Order Number</th>
            <th className="px-6 py-3 border-b">Amount</th>
            <th className="px-6 py-3 border-b">Address</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {orders.map((order, index) => (
            <tr key={order.orderNumber} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-6 py-4 border-b">{order.orderNumber}</td>
              <td className="px-6 py-4 border-b">${order.amount.toFixed(2)}</td>
              <td className="px-6 py-4 border-b">{order.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;


// import React from 'react';
// const OrderList = ({ orders }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border">Order Number</th>
//             <th className="px-4 py-2 border">Amount</th>
//             <th className="px-4 py-2 border">Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.orderNumber}>
//               <td className="px-4 py-2 border">{order.orderNumber}</td>
//               <td className="px-4 py-2 border">${order.amount.toFixed(2)}</td>
//               <td className="px-4 py-2 border">{order.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderList;