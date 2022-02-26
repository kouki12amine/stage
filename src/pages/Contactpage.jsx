import React, { useState } from 'react';
import Contactus from "../resources/Contactus"
import { v4 as uuidv4 } from 'uuid';
import db from "../Firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

function Contactpage() {
    const [nom, setNom] = useState()
    const [tel, setTel] = useState()
    const [fax, setFax] = useState()
    const [email, setEmail] = useState()
    const [suggestions, setSuggestions] = useState()
    const [contactForm, setContactForm] = useState([])


    function addContactForm(contactForm) {
        const collectionRef = collection(db, "ContactForm");
        addDoc(collectionRef, contactForm);
    }



    return (
        <div className="contact-page">
            <div className="contact-form">
                <h1>
                    Contact form
                </h1>
                <div className='q-form'>
                    cette formation a-t-elle fait naitre de nouveaux besoins en formation ?
                </div>
                <p>
                    <span>
                        <input type="radio" name="R1" id="radio-1" value="true" />
                        <label for="radio-1">oui</label>
                    </span>
                    <span>
                        <input type="radio" name="R1" id="radio-2" value="false" />
                        <label for="radio-2">non</label>
                    </span>
                </p>
                <div className="inputs">
                    <div className='q-form'>Conrdonnees du responsable a contacter dans votre etablisseement pour une prochaine formation :</div>
                    <div className='form-input'>
                        <div className='input-x'>
                            <div className='input-y'>
                                <label for="nom">Nom</label>
                                <input placeholder="Nom" type="text" className='input-desgn' name="nom" id="nom" onChange={(e) => setNom(e.target.value)} />
                            </div>
                            <div className="vol">
                                <div className='input-y'>
                                    <label for="tel">Tel</label>
                                    <input placeholder="Tel" type="text" className='input-desgn' name="tel" id="tel" onChange={(e) => setTel(e.target.value)} />
                                </div>
                                <div className='input-y'>
                                    <label for="fax" >Fax</label>
                                    <input placeholder="Fax" type="text" className='input-desgn' name="fax" id="fax" onChange={(e) => setFax(e.target.value)} />
                                </div>
                            </div>
                            <div className='input-y'>
                                <label for="email" >Email</label>
                                <input placeholder="Email" type="email" className='input-desgn' name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-Suggestions">
                    <label for="nom">Suggestions </label>
                    <textarea placeholder="Suggestions" type="email" className='input-desgn' name="email" id="email" onChange={(e) => setSuggestions(e.target.value)} />
                </div>
                <div className="send-btn" onClick={() => addContactForm({ suggestions, nom, email, fax, tel, id: uuidv4() })}>
                    Envoyer
                </div>
            </div>
            <div className="contact-animation">
                <Contactus />
            </div>
        </div>
    );
}
export default Contactpage;