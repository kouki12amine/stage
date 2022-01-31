
import { useLottie } from "lottie-react";
import back  from "./Loties/back.json"

const Back = () => {
    const options = {
      animationData: back,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Back;
