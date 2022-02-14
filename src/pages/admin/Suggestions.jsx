import React, { useState, useEffect } from 'react';
import db from "../../Firebase";
import { onSnapshot, collection } from "firebase/firestore";


function Suggestions() {
    const [comment, setComment] = useState();

    useEffect(
        () =>
            onSnapshot(collection(db, "ContactForm"), (snapshot) =>
                setComment(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );
    return (
        <React.Fragment>
            <div className="content-contacts">
                {comment?.map((comments) => (
                    <ContactsFields key={comments.id}
                        content={comments.suggestions}
                        text={comments.nom}
                        emailfield={comments.email}
                        phone={comments.tel} />

                ))}
            </div>
        </React.Fragment>
    );
}


const ContactsFields = ({ content, text, emailfield, phone }) => (
    <div className="conatct-field">
        <h1> {text} </h1>
        <div className="text-segs">
            {content}
        </div>
        <div className="content-contects">
            <h1>{phone}</h1>
            <h1>{emailfield}</h1>
        </div>
    </div>
);

export default Suggestions;
