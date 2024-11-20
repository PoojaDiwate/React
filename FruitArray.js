import React from "react";

function FruitArray (){

const fruits1 = ["apple","banana","guava","almond"];
const fruits2 = ["cherry","orange","banana","mango","Avocado"];

const mergefruits = [...fruits1,...fruits2];
const lasttwofruits = mergefruits.slice(-2); //retrive a specific part of sequence loke list,tuple,string

return(
    <div>
        <h1>All Fruits</h1>
        <ul>
        {mergefruits.map((fruits)=>(
            <li>{fruits}</li>
        ))}
        </ul>
        <h1>Last two element in array</h1>
        <ul>
            {lasttwofruits.map((fruits)=>(
                <li>{fruits}</li>
            ))}
        </ul>
    </div>
)};

export default FruitArray;