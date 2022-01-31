
import { useLottie } from "lottie-react";
import review  from "./Loties/review.json"

const Review = () => {
    const options = {
      animationData: review,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Review;
