// import React from "react";

const Selected = ({ selectedCard, price,setPrice, setSelectedCard }) => {
  const handle_remove_button = (card) => {
    
    const newSelectedCard = selectedCard.filter(
      (tmp) => tmp.id !== card.id
    );
    setSelectedCard((newSelectedCard));
    setPrice(price-card.price)
  };
  return (
    <div className="mt-9 container mx-auto  min-h-60">
      <p className="font-bold">Your cart</p>

      {selectedCard.length === 0 ? (
        <div className="text-center mt-17 opacity-80">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          {selectedCard.map((card) => (
            <div className="flex justify-between items-center border mt-5 bg-base-300">
              <div className="flex gap-4 items-center">
                <div className="max-w-5">
                  <img src={card.icon} alt="" />
                </div>
                <div>
                  <p>{card.title}</p>
                  <p>{card.price}</p>
                </div>
              </div>
              <button onClick={()=>handle_remove_button(card)} className="btn">remove</button>
            </div>
          ))}
          <div className="flex justify-between mt-5">
            <p className="opacity-60">Total</p>
            <p className="font-bold">${price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selected;
