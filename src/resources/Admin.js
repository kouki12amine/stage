
import { useLottie } from "lottie-react";
import admin  from "./Loties/admin.json"

const Admin = () => {
    const options = {
      animationData: admin,
      loop: true,
      autoplay: true,
      
    };
    
    const { View } = useLottie(options);
    return View;
  }

export default Admin;
