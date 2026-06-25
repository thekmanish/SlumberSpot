'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
    id: number,
    email : string,
    firstName : string | null,
    lastName : string | null,
    phone : string | null
}

export default function ProfilePage () {
    const [user, setUser] = useState<UserProfile | null>(null);
    const router = useRouter()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            alert('Please Login First');
            router.push('/login');
        }
        try {   

            const response = await fetch(
                'http://localhost:3000/users/me',
                {
                    headers : {
                        Authorization : `Bearer ${token}` 
                    },
                }
            );

            const data = await response.json();

            if(!response.ok) {
                return alert(data.message || 'Fetching profile failed');
            }
            setUser(data);
            setFirstName(data.firstName ?? '');
            setLastName(data.lastName ?? '');
            setEmail(data.email ?? '');
            setPhone(data.phone ?? '');
            alert('Profile fetched successfully');

        } catch (err : any) {
            console.error(err.message || 'Error in fetching profile')
        }
    }

    const handleUpdateProfile = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            alert('Please Login First');
            router.push('/login');
        }
        try {
            const response = await fetch(
                'http://localhost:3000/users/me',
                {
                    method : 'PATCH',
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${token}`
                    },
                    body : JSON.stringify({
                        firstName,
                        lastName,
                        phone
                    })
                }
            );

            const data = await response.json();
            if(!response.ok) return alert(data.message || 'Update failed');
            setUser(data);
            setFirstName(data.firstName ?? '');
            setLastName(data.lastName ?? '');
            setEmail(data.email ?? '');
            setPhone(data.phone ?? '');
            alert('Profile Updated successfully');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Profile page</h1>
            <br />
            <h2>Hi user </h2>
            <br />
            <h2>Firsname : </h2>
            <br />
            <input 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <h2>Lastname :</h2>
            <br />
            <input 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <h2>Email :</h2>
            <br />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />           
            <br />
            <h2>Phone :</h2>
            <br />
            <input 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />     

            <br /><br />
            <button onClick={handleUpdateProfile}>Update Profile</button>       
        </div>
    )
}