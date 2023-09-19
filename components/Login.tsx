import React from 'react';
import { useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask();
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center mb-10">
           <img className="rounded-full h-56 w-60" 
            src="./images/52377.jpg" alt=""/>
            <h1>Lottery Draw</h1>
            <h2>Get</h2>
            <button onClick={connectWithMetamask} className="bg-white px-8 py-5">Login</button>
        </div>
    </div>
  );
}

export default Login