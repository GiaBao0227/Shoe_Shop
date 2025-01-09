import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";

import Cart from "./Cart";


export default function ShoesStore() {
  const [dataDetails, setDataDetails] = useState(null);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ]);

  const handleViewDetails = (data) => {
    setDataDetails(data);
  };

  const findIndexProduct = (id) =>
    cart.findIndex((product) => product.id === id);

  const handleAddToCart = (product) => {
    const productAddToCart = {
      id: product.id,
      image: product.image,
      name: product.name,
      amount: 1,
      price: product.price,
    };

    // tạo mảng mới từ mảng cart
    const newCart = [...cart];

    const index = findIndexProduct(productAddToCart.id);
    if (index !== -1) {
      // update SL sản phẩm trong giỏ hàng
      newCart[index].amount += 1;
    } else {
      // thêm productAddToCart vô trong mảng newCart
      newCart.push(productAddToCart);
    }

    // cập nhật lại state cart
    setCart(newCart);
  };

  const handleUpdateQuantity = (id, status) => {
    console.log(id, status);
    const index = findIndexProduct(id);
    //Tìm vị trí của sản phẩm trong giỏ hàng có tồn tại không
    // cart.findIndex((product) => product.maSP === maSP);

    const newCart = [...cart];

    if (index !== -1) {
      //Kiểm tra status để cập nhật số lượng sản phẩm
      if (status) {
        //Tang số lồng
        newCart[index].amount += 1;
      } else {
        //Giải phóng số lồng
        if (newCart[index].amount > 1) {
          newCart[index].amount -= 1;
        } else {
          newCart.splice(index, 1);
        }
      }
      setCart(newCart);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Danh sách sản phẩm</h2>

      {/* Giỏ hàng */}
      <Cart cart={cart} onClickUpdateQuantity={handleUpdateQuantity} />

      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {data.map((item, index) => {
          return (
            <ProductList
              key={item.id}
              product={item}
              onClickViewDetails={handleViewDetails}
              onClickAddToCart={handleAddToCart}
            />
          );
        })}
      </div>

      {/* {dataDetails !== null && dataDetails !== undefined && ( */}
      {!!dataDetails && (
        <>
          <h2 className="text-lg font-bold mt-8 mb-4">Thông số kỹ thuật</h2>
          <ProductItem product={dataDetails} />
        </>
      )}
    </div>
  );
}
