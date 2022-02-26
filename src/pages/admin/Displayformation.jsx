import React, { useState, useEffect } from 'react';
import db from "../../Firebase";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'

function Displayformation() {
    const [formations, setFormations] = useState();

    useEffect(
        () =>
            onSnapshot(collection(db, "Formation"), (snapshot) =>
                setFormations(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    return (
        <React.Fragment>
            <Link to={`/Admin/AddFormation`} className="text-link">
                <FormationList nomFormation="ajouter formation" />
            </Link>
            {formations?.map((formation) => (
                <Link key={formation.id} to={`/Admin/${formation.id}`} className="text-link">
                    <FormationList key={formation.id}
                        nomFormation={formation.nomFormation}
                        nomformateur={formation.nomformateur}
                        lieuFormation={formation.lieuFormation}
                        dateFormation={formation.dateFormation}
                        etablissement={formation.etablissement} />
                </Link>
            ))}
        </React.Fragment>
    );
}



const FormationList = ({ nomFormation, nomformateur, hey }) => (
    <div className="formation-field-list">
        <div className="titleFormation"> {nomFormation} </div>
        <h2 className="titleFormation">  {nomformateur} </h2>
    </div>
);

export default Displayformation;



