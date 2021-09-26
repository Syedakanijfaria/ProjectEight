import React, { useEffect, useState } from 'react';
import Person from '../Person/Person.js';
import Cart from '../Cart/Cart.js';
import './Infromation.css';

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
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        persons.map(person => <Person person={person}></Person>)
                    }
                </div>
            </div>

            <div className="cart-container col-md-3">
                <p>cart calcultion</p>
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Infromation;