import React from 'react';
import AddLogo from "../resources/AddLogo"
import Topnavigation from '../pages/Topnavigation'

function Formation() {
    return (
        <React.Fragment>
            <Topnavigation />
            <div className="content-group">
                <div className="content-add">
                    <a href="#">
                        <div className="add-logo">
                            <AddLogo />
                        </div>
                    </a>
                    <h1 className="title">
                        Ajouter une formation
                    </h1>
                </div>
                <Formations icon="hello" text="formation 1" />
                <Formations icon="hello" text="formation 1" />
                <Formations icon="hello" text="formation 1" />
                <Formations icon="hello" text="formation 1" />
            </div>
        </React.Fragment>
    );
}


const Formations = ({ icon, text }) => (
    <div className="content-add">
        <a href="#">
            <div className="formation-logo">
                {icon}
            </div>
        </a>
        <h1 className="title">
            {text}
        </h1>
    </div>
);

export default Formation;
