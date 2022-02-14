
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyA0d3C7PZF_IrsyZc779cDPIlfTvABb6NE",
    authDomain: "cni-evaluation.firebaseapp.com",
    projectId: "cni-evaluation",
    storageBucket: "cni-evaluation.appspot.com",
    messagingSenderId: "1066164150386",
    appId: "1:1066164150386:web:81ccbe0dc9ffaf711462eb"
  };

  const app = initializeApp(firebaseConfig);


export default getFirestore();


