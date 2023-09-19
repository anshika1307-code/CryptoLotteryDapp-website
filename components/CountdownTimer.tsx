import React from 'react'
import Countdown from "react-countdown";
import {
    useContract,
    useContractRead
 } from "@thirdweb-dev/react";
function CountdownTimer() {
    const { contract } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
    const {data: expiration, isLoading: isLoadingExpiration} =
    useContractRead(
        contract,
        "expiration"
    );
    const renderer = ({ hours, minutes, seconds, completed }) => {
        
    }
    return <div>
        <Countdown date={new Date(expiration * 1000)} renderer={renderer}/>

    </div>;
}

export default CountdownTimer