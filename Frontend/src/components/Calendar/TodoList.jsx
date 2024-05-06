import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker"; // Import date picker library
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import TaskCard from "./TaskCard";

const TodoList = () => {
  const todoss = [
    { id: 1, title: "Buy groceries", completed: false, createdDate: new Date(), dueDate: null },
    { id: 2, title: "Walk the dog", completed: true, createdDate: new Date(), dueDate: null },
    { id: 3, title: "Do laundry", completed: false, createdDate: new Date(), dueDate: null },
  ];
  
  const [todos, setTodos] = useState(todoss);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch data from backend
  };

  const handleAddTodo = async () => {
    const createdDate = new Date();
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      createdDate,
      dueDate,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setDueDate(null);
  };

  const handleMarkAsFinished = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card d-flex flex-column" id="list1" style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>My Todos</u>
                </p>

                <div className="pb-2">
                  <div className="card">
                    <div className="card-body d-flex flex-row align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-lg flex-grow-1 me-3"
                        placeholder="Add new..."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                      />
                      <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        className="form-control form-control-lg"
                        placeholderText="Due date"
                        dateFormat="MMMM d, yyyy"
                      />
                      <button
                        type="button"
                        className="btn btn-primary ms-3"
                        onClick={handleAddTodo}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {todos.map((todo) => (
                  <TaskCard
                    key={todo.id}
                    task={todo}
                    onMarkAsFinished={() => handleMarkAsFinished(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
