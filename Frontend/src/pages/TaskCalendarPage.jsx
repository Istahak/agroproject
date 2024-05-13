import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../assets/Style/TaskCalendar.css";
import TodoList from "../components/Calendar/TodoList";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
const localizer = momentLocalizer(moment);
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
const TaskCalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [showTodoList, setShowTodoList] = useState(true);

  const toggleView = () => {
    setShowTodoList((prevShowTodoList) => !prevShowTodoList);
  };

  useEffect(() => {
    fetchTasks();
  }, [showTodoList]);

  const fetchTasks = async () => {
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

        const tasks = response.data;
        console.log("Fetched tasks:", tasks);

        // Convert fetched tasks into events for the calendar
        const formattedEvents = tasks.map((task) => ({
          id: task.id,
          title: task.contain,
          start: new Date(task.created_at), // Assuming dueDate is a string in ISO format, adjust date parsing accordingly
          end: new Date(task.Due_at), // Assuming task ends on the same day it's due, adjust if needed
        }));

        // Update state with the formatted events
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
  };

  return (
    <div className="task-calendar-container vh-80">
      <Navbar></Navbar>
      <div className="toggle-button-container">
        <IconButton
          color="black"
          onClick={toggleView}
          className="centered-icon-button"
        >
          {showTodoList ? (
            <>
              <CalendarTodayIcon sx={{ fontSize: 40 }} />{" "}
              {/* Increase the icon size */}
              <Typography variant="h6" sx={{ ml: 1, fontSize: 18 }}>
                Calendar
              </Typography>{" "}
              {/* Increase the typography size */}
            </>
          ) : (
            <>
              <FormatListBulletedIcon sx={{ fontSize: 40 }} />{" "}
              {/* Increase the icon size */}
              <Typography variant="h6" sx={{ ml: 1, fontSize: 18 }}>
                Todo List
              </Typography>{" "}
              {/* Increase the typography size */}
            </>
          )}
        </IconButton>
        {/* <Button variant="success" onClick={toggleView}>
          {showTodoList ? "View Calendar" : "View Todo List"}
        </Button> */}
      </div>

      {showTodoList ? (
        <div className="todo-list vh-100">
          <TodoList />
        </div>
      ) : (
        <div className="calendar">
          <div className="calendar-header">
            <h2>Task Calendar</h2>
          </div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            // style={{ height: 500 }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCalendarPage;
