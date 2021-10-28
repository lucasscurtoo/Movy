import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import MovyLogo from '../images/Movy-logo.png'

function userProfile() {
    const {user, isAuthenticated} = useAuth0();

    console.log(user)
    return (isAuthenticated && (
        <div className="w-screen h-screen bg-black text-white">
            <div className="w-full h-20">
                <img className="w-20 ml-20 pt-10" src={MovyLogo}></img>
            </div>
            <div className="w-9/12 m-auto mt-20 h-3/6">
                <div className="w-full h-20 ">
                    <h1 className="text-5xl">Edit Profile</h1>
                </div>
                <div className="w-full h-96 flex">
                    <section className="w-2/5 h-full">
                        <img className="w-44" src={user.picture} alt={user.name}/>
                    </section>
                    <section className="w-2/5 h-full">
                        <form action="submit" className="w-full place-content-evenly">
                            <h1 className="text-xl">Nombre</h1>
                            <input className="bg-black outline-none	border-blue-500 border-2 rounded-md w-64 h-8" placeholder={user.name}></input>
                            <h1 className="text-xl mt-8">Nombre de usuario</h1>
                            <input className="bg-black outline-none	border-blue-500 border-2 rounded-md w-64 h-8" placeholder={user.nickname}></input>
                        </form>
                    </section>
                </div>
                <div className="w-full">
                    <button className="border-blue-500 border-2 rounded-md w-24 h-12">SAVE</button>
                    <button className="border-blue-500 border-2 rounded-md w-24 h-12 mx-6">CANCEL</button>
                    <button className="border-blue-500 border-2 rounded-md w-44 h-12">DELETE PROFILE</button>
                </div>
            </div>
        </div>
    ))
}

export default userProfile;