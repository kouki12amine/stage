import React, { useState, useEffect } from 'react';
import Topnavigation from '../pages/Topnavigation'
import db from "../Firebase";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'


function Formation() {
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
            <div className="wrap">
                <Topnavigation />
                <div className="formas">
                    {formations?.map((formation) => (
                        <Link key={formation.id} to={`/Formation/${formation.id}`} className="text-link">
                            <Formations key={formation.id}
                                nomFormation={formation.nomFormation}
                                nomformateur={formation.nomFormation}
                                dateFormation={formation.dateFormation} />
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}


const Formations = ({ nomFormation, nomformateur, dateFormation }) => (
    <div className="formation-rows">
        <h1 className='noms'>
            {nomFormation}
        </h1>
        <h1 className='for'>
            {nomformateur}'
        </h1>
    </div>
);

export default Formation;
