import React from "react";
import Photo from "../../assets/pablo-867.png";
import "./Home.css";

function Home() {
    return (
        <div className="container text-center">
        <div className="row">
            <div className="col">
            <div className="w-75" style={{ marginTop: "120px" }}>
                <h1 className="text-capitalize">Welcome to shopping list app!</h1>
                <h4>
                In this app you can add, edit, delete items from your list, or
                clear all list.
                </h4>
            </div>
            </div>
            <div className="col">
            <img
                src={Photo}
                alt="shopping-list"
                style={{ width: "80%", marginTop: "30px" }}
            />
            </div>
        </div>
        </div>
    );
}

export default Home;
