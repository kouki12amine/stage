
import { useLottie } from "lottie-react";
import contactUs  from "./Loties/contact-us.json"

const Contact = () => {
    const options = {
      animationData: contactUs,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Contact;
