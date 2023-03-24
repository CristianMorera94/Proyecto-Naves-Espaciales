import React from "react";
import  "./cardships.css"

export default function cardships({name, image}){
    console.log(name, image);
    return(
        <div className="card">
            <h3 className="name">{name}</h3>
            <img className="img-c" src={image} alt="img not foud" width="150px" height="100"/>
        </div>
    )
};