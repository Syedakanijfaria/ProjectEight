import React from "react";
import './Person.css';

const Person = (props) => {
    const { name, img, id, age, occupation, country, salary, role } = props.person || {};
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top rounded h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Occupation: {occupation}</p>
                    <p className="card-text">Salary: {salary}</p>
                    <p className="card-text">Role: {role}</p>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Id: {id}</p>
                </div>
            </div>
        </div>

    );
};

export default Person;