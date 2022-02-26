import React from 'react';
import Displayformation from "./Displayformation"
import FormationDetails from "./FormationDetails"
import AddFormation from "./AddFormation"
import { Route, Routes, Link } from 'react-router-dom'




function AdminDisplayFormation() {
    return (
        <React.Fragment>
            <div className="formation-field">
                <div className="formation-list">
                    < Displayformation />
                </div>
                <div className="formation-details">
                    <Routes>
                        <Route exact path="/:id" element={<FormationDetails />} />
                        <Route path="/AddFormation" element={<AddFormation />} />
                    </Routes>
                </div>
                <Link to={`/Admin/Suggestion`} className="text-link">
                    <div className="contact-btn">contact</div>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default AdminDisplayFormation;



