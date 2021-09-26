import React from "react";
import './Person.css';

const Person = (props) => {
    const { name, img, id, age, occupation, country, donation, role } = props.person || {};
    return (
        <div className="col">
            <div className="card h-100 person shadow">
                <img src={img} className=" mx-auto h-50" alt=".." />
                <div className="card-body">
                    <div className="details">
                        <h5 className="card-title">NAME: {name}</h5>
                        <p className="card-text">AGE: {age}</p>
                        <p className="card-text">ID: {id}</p>
                        <p className="card-text">OCCUPATION: {occupation}</p>
                        <p className="card-text">Role: {role}</p>
                        <p className="card-text">Country: {country}</p>
                        <p className="card-text">DONATION: $ {donation}</p>
                    </div>
                    <button onClick={() => props.handleAddPerson(props.person)}
                        className="button btn btn-secondary"> <i class="fas fa-shopping-cart"></i> Add Person</button>
                </div>
            </div>
        </div>
    );
};

export default Person;