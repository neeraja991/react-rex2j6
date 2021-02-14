import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./my-beautiful-button.module.css";
//import { data } from "./data";
//const url = "https://api.mocki.io/v1/f57cb614";
const url = "https://api.mocki.io/v1/84285efa";

const MyBeautifulButton = props => {
  const [todo, setTodo] = useState([]);
  // const [state, setState] = useState([]);

  const [state, setState] = useState({ isCompleted: false });
  const labelRef = React.createRef();

  const handleClick = e => {
    if (state.isCompleted === false) {
     // state.isCompleted = false;
      labelRef.current.style.textDecoration = "line-through";
    } else {
     // state.isCompleted = true;
      labelRef.current.style.textDecoration = "none";
    }
    setState({ isCompleted: !state.isCompleted });
  };
  const getTodos = async () => {
    axios.get(`${url}`).then(res => {
      console.log(res);
      const todos = res.data.Todos;
      console.log("test" + todos.Desc);
      setTodo(todos);
    });

    // setTodo(res);
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

  const button = {
    color: "#494949",
    // textTransform: 'uppercase',
    textDecoration: "none",

    // border: '4px solid #494949',
    display: "inline-block",
    transition: "all 0.4s ease 0s"
  };

  const primaryButton = {
    //...button,

    textDecoration: "line-through"
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
                    <input
                      type="checkbox"
                      id="foo"
                      name="foo"
                      onClick={handleClick}
                    />
                    <label ref={labelRef} htmlFor="foo">
                      {Desc}-{isCompleted}
                    </label>

                    <button onClick={() => removeItem(id)}>Remove</button>
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

export default MyBeautifulButton;
