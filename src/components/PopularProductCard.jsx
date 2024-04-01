import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.imgURL}
        alt={product.name}
        className="object-contain h-[280px] w-[280px] "
      />

      <div className="mt-8 flex flex-col justify-start space-y-2 ">
        <p
          className="flex flex-row text-slate-gray font-montserrat 
          text-xl leading-normal "
        >
          <img src={star} alt="ratings" width={24} height={24} />
          (4.5)
        </p>
        <h3 className=" text-2xl font-palanquin font-semibold">
          {" "}
          {product.name}{" "}
        </h3>
        <p className=" font-semibold font-montserrat text-coral-red text-xl">
          {" "}
          {product.price}{" "}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
