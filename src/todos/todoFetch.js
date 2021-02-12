import React, { useState, useEffect } from "react";
//import { data } from "./data";
const url = "http://localhost:3000/Todos";

const UseEffectFetchData = () => {
  const [todo, setTodo] = useState([]);
  const [state, setState] = useState([]);
  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    setTodo(todos);
  };

  const getInitialState = () => {
    return {
      isCompleted: false
    };
  };
  const onHandleClick = () => {
    // toggle the strikethrough state
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  useEffect(() => {
    getTodos();
    //getInitialState();
    // onHandleClick();
  }, []);

  const changeItem = id => {
    let filtered = todo.filter(list => !list.isCompleted);

    console.log(filtered);
    setTodo(filtered);
  };

  const removeItem = id => {
    let newTodo = todo.filter(list => list.id !== id);
    setTodo(newTodo);
  };

  var styles1 = {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
    width: "550px",
    height: "450px",
    backgroundColor: "lightcoral",
    display: "block"
  };
  var styles2 = {
    margin: "20px",
    width: "200px",
    height: "1200px",
    backgroundColor: "blue",
    display: "inline-block"
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightcyan",
          height: "1000px"
          //margin: '20px'
        }}
      >
        <div className="square-box" style={styles1}>
          <h3>ToDo List</h3>

          <ul className="users">
            {todo.map(list => {
              const { id, Desc, isCompleted } = list;

              return (
                <ul key={id}>
                  <li>
                    <h4 className="d-block p-2 bg-dark text-white">
                      {Desc}

                      <button onClick={() => removeItem(id)}>Remove</button>
                    </h4>
                  </li>
                </ul>
              );
            })}

            <button className="btn" onClick={() => setTodo([])}>
              Clear Items
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
