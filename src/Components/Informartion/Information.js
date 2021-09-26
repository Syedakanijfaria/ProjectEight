import React, { useEffect, useState } from 'react';
import Person from '../Person/Person.js';
// import './Infromation.css';

const Infromation = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('./persons.json')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    return (
        <div className="row">
            <div className="info-container col-md-9">
                <p>persons: {persons.length}</p>
                {
                    persons.map(person => <Person></Person>)
                }
            </div>

            <div className="cart-container col-md-3">
                <p>calculation</p>
            </div>

        </div>
    );
};

export default Infromation;