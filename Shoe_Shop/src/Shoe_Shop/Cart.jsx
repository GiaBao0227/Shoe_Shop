import { useState } from "react";

export default function Cart({ cart, onClickUpdateQuantity }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderListCart = () => {
    return cart.map((product) => {
      return (
        <tr
          key={product.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {product.id}
          </th>
          <td className="px-6 py-4">
            <img src={product.image} alt={product.name} />
          </td>
          <td className="px-6 py-4">{product.name}</td>
          <td className="px-6 py-4">
            <button
              onClick={() => onClickUpdateQuantity(product.id, false)}
            >
              -
            </button>
            {product.amount}
            <button
              onClick={() => onClickUpdateQuantity(product.id, true)}
            >
              +
            </button>
          </td>
          <td className="px-6 py-4">{product.price}</td>
          <td className="px-6 py-4">{product.price * product.amount}</td>
        </tr>
      );
    });
  };

  const totalQuantity = () => {
    return cart.reduce((total, product) => (total += product.amount), 0);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Cart ({totalQuantity()})
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">Cart</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead>
                    <tr>
                      <th className="px-6 py-3">Product Id</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Product name</th>
                      <th className="px-6 py-3">Qty</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>{renderListCart()}</tbody>
                </table>
              </div>
              <div className="flex items-center p-4 border-t">
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
