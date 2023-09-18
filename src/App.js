import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import axios from "axios";
import Form from "./Components/Form";
function App() {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("All");
  // useEffect(()=>,[todos])

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const todos = await axios.get("http://localhost:8080/api/todos/getAll");
      setTodos(todos.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/todos/delete/${id}`
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (todo) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/todos/add`, {
        ...todo,
        completed: false,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleView = (view) => {
    if (view === "All") {
      fetch();
    }
    setView(view);
  };
  const handleToggle = async (todoId, toggled) => {
    try {
      const updated = await axios.put(
        `http://localhost:8080/api/todos/update/${todoId}`,
        { completed: toggled }
      );
      // window.location.reload()
      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (search) => {
    console.log(search);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/todos/by/${search}`
      );
      console.log(response.data);
      setTodos([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar handleView={handleView} handleSearch={handleSearch} />
      {view === "All" ? (
        <div className="AllTods">
          {todos.map((todo) => (
            <Card
              className="card"
              todo={todo}
              key={todo._id}
              handledelete={handledelete}
              handleToggle={handleToggle}
            />
          ))}{" "}
        </div>
      ) : (
        <Form handleAdd={handleAdd} />
      )}
    </div>
  );
}

export default App;
