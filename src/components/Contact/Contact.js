import React from "react";

function Contact() {
    return (
        <div
        className="container"
        style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "50px",
        }}
        >
        <div
            className="card border-white text-center"
            style={{
            backgroundColor: "#219ebc",
            width: "60%",
            borderRadius: "20px",
            }}
        >
            <p
            className="card-header text-bold p-3 h1"
            style={{
                background: "rgba( 255, 255, 255, 0.2 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 15px )",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                borderRadius: "10px",
            }}
            >
            Contact us
            </p>
            <div className="card-text p-2 mt-4 mb-4 h6">
            You can contact us via phone +37061234567
            </div>
        </div>
        </div>
    );
}

export default Contact;