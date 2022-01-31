
import { useLottie } from "lottie-react";
import backgroundwel  from "./Loties/backgroundwel.json"

const Backgroundwel = () => {
    const options = {
      animationData: backgroundwel,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Backgroundwel;
