import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h[120px] "
      />
      <p className="mt-6 max-w-sm text-center info-text ">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h2 className="mt-1 font-palanquin text-3xl font-bold ">
        {" "}
        {customerName}{" "}
      </h2>
    </div>
  );
};

export default ReviewCard;
