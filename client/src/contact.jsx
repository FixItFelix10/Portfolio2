import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
//export Contact component
export default function Contact() {
    //state variables for the form inputs
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

//plan to handle form submission
function handleSubmit(event) {

};

//return a form with labels, inputs and a submit button
return (
    <form onSubmit={handleSubmit}>
        <label>
            <p>First Name:</p>
            <input type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label>
            <p>Last Name:</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
            <p>Email:</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <p>Phone Number:</p>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
            <label>
            <p>Message:</p>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength="500px"></textarea> 
        </label>
    
        <button type="submit"><Link to="/">Submit</Link></button>

    </form>
);

}