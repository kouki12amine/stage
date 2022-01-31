import React from 'react';
import AddLogo from "../resources/AddLogo"
import Topnavigation from '../pages/Topnavigation'

function Formation() {
    return (
        <React.Fragment>
            <Topnavigation />
            <div class="content-group">
                <div class="content-add">
                    <a href="#">
                        <div class="add-logo">
                            <AddLogo />
                        </div>
                    </a>
                    <h1 class="title">
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
    <div class="content-add">
        <a href="#">
            <div class="formation-logo">
                {icon}
            </div>
        </a>
        <h1 class="title">
            {text}
        </h1>
    </div>
);

export default Formation;
