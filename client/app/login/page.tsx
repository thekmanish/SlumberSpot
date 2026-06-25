'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage () {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            
            const response = await fetch(
                'http://localhost:3000/auth/login',
                {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                        email,
                        password
                    })
                }
            );
    
            
            const data = await response.json();
            
            if(!response.ok){
                return alert(data.message || "Login failed");
            }
            console.log("The response is ", response);
            console.log("The data is ", data);
            localStorage.setItem(
                'token',
                data.accessToken
            )

            alert('Login Successful');

            router.push('/profile');
        } catch (error) {
            console.error('error is', error)
            alert('Something went wrong');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <br /><br />
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
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}