import React, { useState } from "react";

function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl space-y-6">
        <h4 className="text-2xl font-bold">{product.name}</h4>
        <img
          src={product.image}
          className="w-full h-[300px] object-cover"
          alt={product.name}
        />
        <h4 className="text-xl font-bold">Thông số</h4>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Thương hiệu:</p>
            <p>{product.alias}</p>
          </div>
          <div className="flex justify-between">
            <p>Mô tả:</p>
            <p>{product.description}</p>
          </div>
          <div className="flex justify-between">
            <p>Mô tả ngắn:</p>
            <p>{product.shortDescription}</p>
          </div>
          <div className="flex justify-between">
            <p>Số lượng:</p>
            <p>{product.quantity}</p>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export default function ProductItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={handleOpenModal}
      >
        Xem thông số
      </button>
      {isModalOpen && <Modal product={product} onClose={handleCloseModal} />}
    </div>
  );
}
