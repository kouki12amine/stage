
import { useLottie } from "lottie-react";
import welcome  from "./Loties/welcome.json"

const Welcome = () => {
    const options = {
      animationData: welcome,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Welcome;
