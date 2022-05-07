import React from "react"
import "../style/screen.css"

function Screen({screenInput}){
    return (
        <div className="screen">
            <p className="input-value">{screenInput}</p>
        </div>
    )
}

export default Screen;