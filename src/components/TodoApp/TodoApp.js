import React, { useEffect, useState } from "react";
import "./TodoApp.css";
const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [button, setButton] = useState(true);
  const [edit, setEdit] = useState("");
  const [clearButton, setClearButton] = useState(false);

  useEffect(() => {
    let saveItems = JSON.parse(localStorage.getItem("list"));
    setItems(saveItems || []);
  }, []);

  useEffect(() => {
    setInput("");
    if (items.length > 0) {
      setClearButton(true);
    }
  }, [items]);
  useEffect(() => {
    setError("");
  }, [input]);

  const addItem = () => {
    if (input.length >= 1) {
      let itemsUpdated = JSON.stringify([...items, input]);
      localStorage.setItem("list", itemsUpdated);
      setItems([...items, input]);
      setClearButton(true);
    } else {
      setError("List item must have at least 1 character");
    }
  };
  const editItem = (item) => {
    setInput(item);
    setEdit(item);
    setButton(false);
  };
  const updateItem = () => {
    if (input.length >= 3) {
      let listAfterUpdate = JSON.parse(localStorage.getItem("list"));
      listAfterUpdate.splice(listAfterUpdate.indexOf(edit), 1, input);
      localStorage.setItem("list", JSON.stringify(listAfterUpdate));
      setItems(listAfterUpdate);
      setButton(true);
    } else {
      setError("List item must have at least 1 character");
    }
  };
  const clearAll = () => {
    localStorage.clear();
    setItems([]);
    setButton(true);
    setClearButton(false);
  };
  const removeItem = (item) => {
    let listAfterRemove = items.filter((i) => i !== item);
    localStorage.setItem("list", JSON.stringify(listAfterRemove));
    setItems(listAfterRemove);
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
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  button ? addItem(input) : updateItem(input);
                }
              }}
            />
            <button
              className={"btn btn-block font-weight-bold text-white h-100"}
              style={{ backgroundColor: "#219EBC" }}
              onClick={(input) => (button ? addItem(input) : updateItem(input))}
            >
              {button ? "Add" : "Update"}
            </button>
            <button
              className={"btn btn-block font-weight-bold text-white h-100"}
              // style={{ backgroundColor: "#FFB703" }}
              style={
                clearButton
                  ? { display: "inline-block", backgroundColor: "#FFB703" }
                  : { display: "none", backgroundColor: "#FFB703" }
              }
              onClick={() => clearAll()}
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
                      onClick={() => {
                        editItem(item);
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
                      onClick={() => {
                        removeItem(item);
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