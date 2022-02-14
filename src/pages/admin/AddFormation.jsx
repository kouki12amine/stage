import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import db from "../../Firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

function AddFormation() {
    const [nomFormation, setFomFormation] = useState()
    const [nomformateur, setNomformateur] = useState()
    const [lieuFormation, setLieuFormation] = useState()
    const [dateFormation, setDateFormation] = useState()
    const [etablissement, setEtablissement] = useState()
    const [formationDetails, setFormationDetails] = useState([])


    function addFormation(formationDetails) {
        const collectionRef = collection(db, "Formation");
        addDoc(collectionRef, formationDetails);
        console.log(formationDetails)
    }



    return (
        <div className="contact-page">
            <div className="contact-form">
                <h1>
                    Ajouter une formation
                </h1>
                <div className="inputs">
                    <div className='form-input'>
                        <div className='input-x'>
                            <div className='input-y'>
                                <label for="nom">Nom formation</label>
                                <input placeholder="Nom" type="text" className='input-desgn' name="nomFormation" id="nom" onChange={(e) => setFomFormation(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="tel">Nom formateur</label>
                                <input placeholder="Tel" type="text" className='input-desgn' name="nomformateur" id="tel" onChange={(e) => setNomformateur(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="tel">Lieu formation</label>
                                <input placeholder="Tel" type="text" className='input-desgn' name="LieuFormation" id="tel" onChange={(e) => setLieuFormation(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="fax" >Date formation</label>
                                <input placeholder="Fax" type="text" className='input-desgn' name="DateFormation" id="fax" onChange={(e) => setDateFormation(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="email" >Etablissement</label>
                                <input placeholder="Email" type="email" className='input-desgn' name="etablissement" id="email" onChange={(e) => setEtablissement(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-animation">
                <div className="send-btn" onClick={() => addFormation({ id: uuidv4(), nomFormation, nomformateur, lieuFormation, dateFormation, etablissement })}>
                    Ajouter
                </div>
            </div>
        </div>
    );
}
export default AddFormation;