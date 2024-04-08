const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full md:max-w-xs
      rounded-[20px] shadow-3xl py-16 px-10"
    >
      <div
        className="w-11 h-11 md:w-8 md:h-8 flex justify-center items-center 
     bg-coral-red rounded-full"
      >
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>

      <h3 className="mt-5 font-palanquin font-bold text-3xl md:text-2xl leading-normal">
        {label}
      </h3>
      <p
        className="mt-2 break-word font-montserrat text-lg 
        md:text-base leading-normal text-slate-gray"
      >
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
