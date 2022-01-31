import React from 'react';
import Welcome from "../resources/Welcome"
import TypeAnimation from 'react-type-animation';
import Backgroundwel from '../resources/Backgroundwel'


function WelcomePage() {
    return (
        <div className="content-welcome">
            <div className="welcome-text">
                <h1><TypeAnimation
                    cursor={false}
                    sequence={['CNI', 1000]}
                    repeat={1} />
                </h1>
                <h3>
                    <TypeAnimation
                        cursor={true}
                        sequence={['Systeme', 1000, 'evoluation', 500, ' maintenance de qualite', 600,]}
                        repeat={Infinity} />
                </h3>
                <Backgroundwel />
            </div>
            <div className="welcome-animation">
                <div className="ani">
                    <Welcome />
                </div>
            </div>
        </div>
    );
}
export default WelcomePage;