import React, { useEffect, useState } from "react";

const GlobalState = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }


    const values = { navigate, token, headers }
    return (
        <GlobalStateContext.Provider value={{ values }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;