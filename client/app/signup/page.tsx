'use client';
import { useState } from "react";

export default function SignupPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch(
                `${apiUrl}/auth/register`,
                {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                        email,
                        password,
                    })
                },
            );
        console.log("Response is ", response)
        const data = await response.json();
        if(!response.ok){
            return alert(data.message || "Registration failed");
        }
        console.log(data);
            alert('Registration Succussful');
        } catch (error) {
            console.log("error is", error);
        }
    };

    return(
        <div className="m-2 border-1px-solid-black">  
            <h1>Signup</h1>
            <br/> 
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}} 
            />
            <br />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <br />
            <br />
            <button onClick={handleSignup}>
                Signup
            </button>
        </div>
    );
}