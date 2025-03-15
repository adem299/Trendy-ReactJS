import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";

const reviews = [
  { id: 1, name: "Sarah M.", review: "Great service and quality products!" },
  { id: 2, name: "Alex K.", review: "Love the variety of styles available." },
  { id: 3, name: "James L.", review: "Super fast delivery and great customer service!" },
  { id: 4, name: "Anggun A.", review: "Super fast delivery, good!" },
  { id: 5, name: "Orange Cat", review: "meow meow meow meaw meow meoww..~" },
  { id: 6, name: "Aoba Moca.", review: "yamabuki bakery~~ it`s good thanks!" },
  { id: 7, name: "Hagumi", review: "hagumi say thank you" },
  { id: 8, name: "Kokoro", review: "HAPPY LUCKY SMILE YEAYY~~ 😊" },
  { id: 9, name: "Ako Odogawa", review: "ako great full" },
  { id: 10, name: "Michelle", review: "thankyouuu~🐼🔥" },
];

const CustomerReviews = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
        
      <h2 className="text-3xl font-bold mb-5">OUR HAPPY CUSTOMERS</h2>
      <Swiper slidesPerView={4} spaceBetween={20} grabCursor={true}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-gray-600">{review.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
