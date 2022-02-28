import React, { useState } from 'react';
import { doc, collection, addDoc ,getDocs} from "firebase/firestore";
import db from "../../Firebase";
import { useParams } from 'react-router-dom'



function FirstStep() {
    let params = useParams();
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

      function addRateFormateur(inputs) {
        const collectionRef = collection(db,"Formation",params.id,"Rating",);
         addDoc(collectionRef, inputs);
        console.log(inputs)
    }
    return(
            <React.Fragment>
    
                        <div className="title-content">
                            Formateur
                        </div>
                        <div className="question-content">
                            <div className="quiz-group">
                <div className="question">
                    <h2>Maitrisie du sujet </h2>
                </div>
                <div className="radio-container">
                    <p>
                    <form onSubmit={handleSubmit}>
                        <select name='Maitrisie du sujet' onChange={handleChange}>
                            <option value="5">Tres bien</option>
                            <option value="3">bien</option>
                            <option value="2">moyen</option>
                            <option value="0">non satisfait</option>
                        </select>
                        </form>
                    </p>
                </div>

                            </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>gestion du temps </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name='gestion du temps' onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>conforme du programme</h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name='conforme du programme' onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                        </form>
                                    </p>
                                </div>

                            </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>qualite pidgogique ( rythme ,comunication , ...)  </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="qualite pidgogique" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                            <div className="title-content">
                        Environement et moyen pidagogiques
                            </div>
                            
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>Accueil</h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="Salle de formation" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>
                            </div>

                            <div className="quiz-group">
                                <div className="question">
                                    <h2>Matriel informatique  </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="Matriel informatique" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>support du formation  </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="support du formation" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>Matriel informatique </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="Matriel informatique" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                            <div className="title-content">
                            Formation
                        </div>
                            <div className="quiz-group">
                                <div className="question">
                                    <h2>Matriel informatique </h2>
                                </div>
                                <div className="radio-container">
                                    <p>
                                    <form onSubmit={handleSubmit}>
                                        <select name="Objet atient" onChange={handleChange}>
                                            <option value="5">Tres bien</option>
                                            <option value="3">bien</option>
                                            <option value="2">moyen</option>
                                            <option value="0">non satisfait</option>
                                        </select>
                                    </form>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="send-btn" onClick={() => addRateFormateur(inputs)}>
                        Ajouter
                    </div>
            </React.Fragment>

        )
}

function ReviewSection({ text, radioId }) {
    return (
        <div className="quiz-group">
            <div className="question">
                <h2>{text}  </h2>
            </div>
            <div className="radio-container">
                <p>
                <form >
                    <select >
                        <option value="Tres bien">Tres bien</option>
                        <option value="bien">bien</option>
                        <option value="moyen">moyen</option>
                        <option value="non satisfait">non satisfait</option>
                    </select>
</form>
                </p>
            </div>

        </div>)

}
export default FirstStep;
