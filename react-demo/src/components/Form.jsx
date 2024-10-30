import React, { useState } from 'react'

export default function Form() {

    const [ username, setUsername ] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");

    const [processing, setProcessing] = useState(false);

    const hadleSubmit = (e) => {
        e.preventDefault();
        alert(sex);
    } 

    return (
        <div>
            <form onSubmit={hadleSubmit}>
                <div>
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="username">Full Name</label>
                    <input type="text" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="username">Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Sex">Sex</label>
                    <select name="Sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type='button'>Submit</button>
            </form>
        </div>
    );
}
