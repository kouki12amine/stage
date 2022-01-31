
import { useLottie } from "lottie-react";
import contact  from "./Loties/contact.json"

const Contact = () => {
    const options = {
      animationData: contact,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Contact;
