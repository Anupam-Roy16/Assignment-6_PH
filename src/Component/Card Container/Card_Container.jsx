import { use, useState } from "react";
import Card from "./Card";
import Selected from "./Selected";
const Card_Container = ({ promise }) => {
  const [selecetedtype, setSelecetedtype] = useState("Products");
  const [selectedCard, setSelectedCard] = useState([]);
  const [price, setPrice] = useState(0);
  const data = use(promise);
  return (
    <>
      {/* Card section Header and button  */}
      <div className="text-center mt-9">
        <h1 className="text-4xl font-bold mb-2">Premium Digital Tools</h1>
        <p className="max-w-xl mx-auto opacity-80 text-sm ">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="mt-3 flex gap-4 justify-center">
          <button
            onClick={() => setSelecetedtype("Products")}
            className={`btn ${selecetedtype === "Products" ? "btn-primary" : ""} rounded-4xl `}
          >
            Products
          </button>
          <button
            onClick={() => setSelecetedtype("Cart")}
            className={`btn ${selecetedtype === "Cart" ? "btn-primary" : ""} rounded-4xl`}
          >
            Cart(0)
          </button>
        </div>
      </div>


      {/* check if product button selected or cart button selected */}
      {/* as selection show card */}

      {selecetedtype === "Products" ? (
        <div className="container mx-auto grid grid-cols-3 gap-3 mt-9">
          {data.map((product) => {
            return <Card product={product} selectedCard={selectedCard} setSelectedCard={setSelectedCard} price={price} setPrice={setPrice}> </Card>;
          })}
        </div>
      ) : (
       <Selected selectedCard={selectedCard} price={price} setPrice={setPrice} setSelectedCard={setSelectedCard}></Selected>
      )}
      
    </>
  );
};

export default Card_Container;
