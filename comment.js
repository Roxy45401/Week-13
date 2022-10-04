import React from "react";
import SubmitButton from "./submit-button";

let e = React.createElement

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-50 container">
            <div className="card-header bg-dark text-white">Username</div>
            <div className="card-body text-secondary"> Enter username here</div>
            <div className="card-header bg-dark text-white">Password</div>
            <div className="card-body text-secondary">Enter password here</div>
            <div className="card-footer"> </div>
            <SubmitButton/>
            </div>
        );
    }
}