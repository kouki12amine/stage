
import { useLottie } from "lottie-react";
import plus  from "./Loties/plus.json"

const AddLogo = () => {
    const options = {
      animationData: plus,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options);
    return View;
  }

export default AddLogo;
