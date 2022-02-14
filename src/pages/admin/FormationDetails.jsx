import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { onSnapshot, collection, doc, getDoc, deleteDoc, query, updateDoc, setDoc } from "firebase/firestore";
import db from "../../Firebase";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function FormationDetails() {
    let params = useParams();
    const [nomFormations, setFomFormations] = useState()
    const [nomformateurs, setNomformateurs] = useState()
    const [lieuFormations, setLieuFormations] = useState()
    const [dateFormations, setDateFormations] = useState()
    const [etablissements, setEtablissements] = useState()
    const [formations, setFormations] = useState({});
    const [formationDetails, setFormationDetails] = useState({})


    const navigate = useNavigate();
    const handleClick = () => { navigate('/Admin') }

    const handleDelete = async (id) => {
        const docRef = doc(db, "Formation", params.id);
        await deleteDoc(docRef);
    };

    function EditFormation(formationDetails) {
        const docRef = doc(db, "Formation", params.id);
        console.log(formationDetails)
        updateDoc(docRef, formationDetails)
    }


    const handleEdit = async () => {

        const docRef = doc(db, "Formation", params.id);
        const docSnap = await getDoc(docRef);
        setFormations(docSnap.data())
    }

    useEffect(() => {
        handleEdit()
    }, [handleEdit])

    return (
        <React.Fragment>
            <div className="text-segs-formation">
                {formations.nomFormation}
            </div>
            <div className="update-formation">
                <div className="inputs">
                    <div className='form-input'>
                        <div className='input-x'>
                            <div className='input-y'>
                                <label for="nom">Nom formation</label>
                                <input defaultValue={formations.nomFormation} placeholder="Nom" type="text" className='input-desgn' name="nomFormation" id="nom" onChange={(e) => setFomFormations(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="tel">Nom formateur</label>
                                <input defaultValue={formations.nomformateur} placeholder="Tel" type="text" className='input-desgn' name="nomformateur" id="tel" onChange={(e) => setNomformateurs(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="tel">Lieu formation</label>
                                <input defaultValue={formations.lieuFormation} placeholder="Tel" type="text" className='input-desgn' name="LieuFormation" id="tel" onChange={(e) => setLieuFormations(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="fax" >Date formation</label>
                                <input defaultValue={formations.dateFormation} placeholder="Fax" type="text" className='input-desgn' name="DateFormation" id="fax" onChange={(e) => setDateFormations(e.target.value)} />
                            </div>
                            <div className='input-y'>
                                <label for="email" >Etablissement</label>
                                <input defaultValue={formations.etablissement} placeholder="Email" type="email" className='input-desgn' name="etablissement" id="email" onChange={(e) => setEtablissements(e.target.value)} />
                            </div>
                        </div>
                        <div className="formation-btn" onClick={() => handleClick()}>
                            <div className="update-btn" onClick={() => EditFormation({ nomFormations, nomformateurs, lieuFormations, dateFormations, etablissements })}>update</div>
                            <div className="delete-btn" onClick={() => handleDelete(params.id)}> delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormationDetails

