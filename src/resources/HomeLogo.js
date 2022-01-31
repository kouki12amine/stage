
import { useLottie } from "lottie-react";
import home  from "./Loties/home.json"

const HomeLogo = () => {
    const options = {
      animationData: home,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default HomeLogo;
