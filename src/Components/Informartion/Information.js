import React, { useEffect, useState } from 'react';
import Person from '../Person/Person.js';
import Cart from '../Cart/Cart.js';
import './Infromation.css';

const Infromation = () => {
    const [persons, setPersons] = useState([]);

    // cart calculation
    const [cart, setCart] = useState([]);
    const handleAddPerson = (person) => {

        const newCart = [...cart, person]
        setCart(newCart)
    }


    useEffect(() => {
        fetch('./persons.json')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    return (
        <div className="row mx-auto">
            <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        persons.map(person => <Person person={person}
                            handleAddPerson={handleAddPerson}></Person>)
                    }
                </div>
            </div>

            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Infromation;