import React, { useEffect, useState } from "react";
import "./TodoApp.css";
const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let saveItems = JSON.parse(localStorage.getItem("list"));
    setItems(saveItems || []);
  }, []);

  const addItem = () => {
    if (input.length >= 1) {
      let itemsUpdated = JSON.stringify([...items, input]);
      localStorage.setItem("list", itemsUpdated);
      setItems([...items, input]);
      // setClearButton(true);
    } else {
      setError("List item must have at least 1 character");
    }
  };

  return (
    <div className="container pb-5" style={{ maxWidth: "50%" }}>
      <div className="row pb-5">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder={"Add item.."}
              value={input}
              onChange={(input) => setInput(input.target.value)}
            />
            <button
              className={"btn btn-block font-weight-bold text-white h-100"}
              style={{ backgroundColor: "#219EBC" }}
              onClick={(input) => addItem(input)}
            >
              Add
            </button>
            <button
              className={"btn btn-block font-weight-bold text-white h-100"}
              style={{ backgroundColor: "#FFB703" }}
            >
              Clear
            </button>
          </div>
          <p
            style={{
              color: "#FFB703",
              fontSize: "0.8rem",
            }}
          >
            {error}
          </p>
          <div
            style={
              items.length > 0 ? { display: "block" } : { display: "none" }
            }
          >
            {items.map((item, index) => (
              <div className="list-group-item w-100" key={index}>
                <div style={{ minHeight: "40px" }}>
                  {" "}
                  {`${index + 1}.`} {item}
                  <div style={{ float: "right" }}>
                    <span
                      className="mx-3"
                      style={{
                        color: "#FFB703",
                        border: "none",
                        padding: "8px",
                        background: "none",
                      }}
                    >
                      <i className="fas fa-pen"></i>
                    </span>
                    <span
                      className=""
                      style={{
                        color: "#FFB703",
                        border: "none",
                        padding: "8px",
                        background: "none",
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoApp;
