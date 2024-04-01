import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin font-bold text-4xl text-center">
        What our
        <span className=" font-montserrat text-coral-red "> Customer </span>
        Say?
      </h2>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div
        className="mt-24 flex flex-1 justify-evenly items-center 
        max-lg:flex-col gap-14 "
      >
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
