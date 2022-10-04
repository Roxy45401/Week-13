import React from "react";
import SubmitButton from "./submit-button";
import Comment from "./comment";
import Link from "./Link";
import ResetPassword from "./ResetPassword";


export default class Post extends React.Component {
    render (){
        return (
            <div className="card w-75">
            <h3 className="card-body bg-dark text-center text-white"> Log In</h3>
            <Link/>
            <ResetPassword/>
            <div className="card-footer">
                <br/>
                <Comment/>
                </div>  
                <br/>      
            </div>
        );
    }
}