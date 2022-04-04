import React from "react"

function footer(){
    const yr = new Date().getFullYear();
    return <div className="foter">
        <p>Copyright Ⓒ {yr} by AMTRIX </p>
    </div>
}

export default footer