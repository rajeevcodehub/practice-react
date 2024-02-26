import React, { useState } from "react";

const useOnline = () => {
    const[isOnline, setIsOnline] = useState(true);
    window.addEventListener("online", () => {
        setIsOnline(true);
    })
    window.addEventListener("offline", () => {
        setIsOnline(false);
    })
    return isOnline;
}

export default useOnline;