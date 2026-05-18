const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="shadow-2xl p-3">
      <div className="flex justify-between items-center mb-2">
        <div className="max-w-5">
          <img src={product.icon} alt="" />
        </div>
        <div class="badge badge-soft badge-secondary">{product.badge}</div>
      </div>
      <h1 className="font-bold text-xl">{product.title}</h1>
      <p className="text-sm opacity-85">{product.description}</p>
      <p className="mt-2">
        <span className="font-bold">${product.price}</span>/{" "}
        <span className="opacity-60">{product.pricingType}</span>{" "}
      </p>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        {product.features.map((feature) => (
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary w-full rounded-4xl mt-5">Buy Now</button>
      {/* <button className="Primary ">Buy Now</button> */}
    </div>
  );
};

export default Card;
