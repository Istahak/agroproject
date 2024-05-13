import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker"; // Import date picker library
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import TaskCard from "./TaskCard";
import "./TodoList.css";
import axios from "axios";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState(null);

  useEffect(() => {
    fetchUserData(); // Fetch user data including tasks when the component mounts
  }, []);

  const fetchUserData = async () => {
    const authTokenString = localStorage.getItem("auth");

    if (authTokenString) {
      try {
        const authToken = JSON.parse(authTokenString);

        // Make a GET request to fetch the current user's tasks
        const response = await axios.get("http://localhost:8000/tasks", {
          headers: {
            Authorization: `Bearer ${authToken.access_token}`,
          },
        });
        const newTodos = response.data.map((task) => ({
          id: task.id,
          title: task.contain,
          completed: task.status,
          createdDate: task.created_at,
          dueDate: task.Due_at,
        }));
        setTodos(newTodos); // Set the fetched tasks to the state
      } catch (error) {
        console.error("Error fetching user tasks:", error);
      }
    }
  };

  const handleAddTodo = async () => {
    const authTokenString = localStorage.getItem("auth");

    if (authTokenString) {
      try {
        const authToken = JSON.parse(authTokenString);

        // Define the task data to be sent in the request body
        const taskData = {
          contain: newTodo,
          Due_at: dueDate,
        };

        // Make a POST request to create a new task
        const response = await axios.post(
          "http://localhost:8000/tasks",
          taskData,
          {
            headers: {
              Authorization: `Bearer ${authToken.access_token}`,
            },
          }
        );

        // If the request is successful, update the local state with the new task
        const newTask = {
          id: response.data.id,
          title: response.data.contain,
          completed: response.data.status,
          createdDate: response.data.created_at,
          dueDate: response.data.Due_at,
        };

        setTodos([...todos, newTask]);

        // Reset the form fields
        setNewTodo("");
        setDueDate(null);
      } catch (error) {
        console.error("Error creating new task:", error);
      }
    }
  };

  const handleMarkAsFinished = async (id, current_st) => {
    try {
      let current_sta = current_st;
      if (current_st === "Pending") {
        current_sta = "Completed";
      } else {
        current_sta = "Pending";
      }

      // Make a PUT request to update the status of the task
      const response = await axios.put(
        `http://localhost:8000/tasks/${id}?current_status=${current_sta}`
      );
      // If the request is successful, update the local state
      const updatedTodo = {
        id: response.data.id,
        title: response.data.contain,
        completed: response.data.status,
        createdDate: response.data.created_at,
        dueDate: response.data.Due_at,
      };
      console.log("Updated task:", updatedTodo);
      const updatedTodos = todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error marking task as finished:", error);
    }
  };

  const handleDelete = async (id) => {
    const authTokenString = localStorage.getItem("auth");

    if (authTokenString) {
      try {
        const authToken = JSON.parse(authTokenString);

        // Make a DELETE request to delete the task
        const taskId = 1; // Replace 1 with the actual task ID you want to delete
        const response = await axios.delete(
          `http://localhost:8000/tasks/${id}`,
          {
            headers: {
              Authorization: `Bearer ${authToken.access_token}`,
            },
          }
        );

        // Handle the response as needed
        console.log("Task deleted:", response.data);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const groupTasks = () => {
    const grouped = [];
    for (let i = 0; i < todos.length; i += 3) {
      grouped.push(todos.slice(i, i + 3));
    }
    return grouped;
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card d-flex flex-column"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  Tasks
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

                {groupTasks().map((taskGroup, index) => (
                  <div className="row" key={index}>
                    {taskGroup.map((task) => (
                      <div className="col-md-4 mb-3" key={task.id}>
                        <TaskCard
                          task={task}
                          onMarkAsFinished={() =>
                            handleMarkAsFinished(task.id, task.completed)
                          }
                          onDelete={() => handleDelete(task.id)}
                        />
                      </div>
                    ))}
                  </div>
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
