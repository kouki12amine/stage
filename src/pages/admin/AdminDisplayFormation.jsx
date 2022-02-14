import React, { useState, useEffect } from 'react';
import Displayformation from "./Displayformation"
import FormationDetails from "./FormationDetails"
import { Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'



function AdminDisplayFormation() {
    let params = useParams();
    return (
        <React.Fragment>
            <div className="formation-field">
                <div className="formation-list">
                    < Displayformation />
                </div>
                <div className="formation-details">
                    <Routes>
                        <Route exact path="/:id" element={<FormationDetails />} />
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminDisplayFormation;



