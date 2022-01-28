import React from "react";
import "./Started.css";
function Started() {
    return (
        <div className="started">
            <h1 className="started__Title">Get started today</h1>

            <form action="" className="started__Form">
                <input type="text" name="wallet_id" id="wallet_id" placeholder='Enter your ethereum address'/>
                <input type="submit" value="Connect"/>
            </form>
        </div>
    );
}

export default Started;
