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
            <div className="all-formation">
                <div className="text-segs-formation">
                    {formations.nomFormation}
                </div>
                <div className="update-formation">
                    <div className="formdetails">
                        <div className="noms">Nom Formateur</div>
                        <div className="details">{formations.nomformateur}</div>
                    </div>
                    <div className="formdetails">
                        <div className="noms">lieux Formation</div>
                        <div className="details"> {formations.lieuFormation}</div>
                    </div>
                    <div className="formdetails">
                        <div className="noms">Date formation</div>
                        <div className="details"> {formations.dateFormation}</div>
                    </div>
                    <div className="formdetails">
                        <div className="noms">etablissement</div>
                        <div className="details">  {formations.etablissement}</div>
                    </div>
                </div>
                <div className="formation-btn" onClick={() => handleClick()}>
                    <div className="delete-btn" onClick={() => handleDelete(params.id)}> delete</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormationDetails

