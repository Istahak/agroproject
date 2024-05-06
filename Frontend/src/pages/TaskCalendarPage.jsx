import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../assets/Style/TaskCalendar.css";
import TodoList from "../components/Calendar/TodoList";
import Button from 'react-bootstrap/Button';
const localizer = momentLocalizer(moment);

const TaskCalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [showTodoList, setShowTodoList] = useState(true);

  const toggleView = () => {
    setShowTodoList((prevShowTodoList) => !prevShowTodoList);
  };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);


  // const fetchTasks = async () => {
  //   try {
  //     // Make a GET request to fetch tasks from backend
  //     const response = await axios.get("your-backend-api-url/tasks");
  //     const tasks = response.data;

  //     // Convert fetched tasks into events for the calendar
  //     const formattedEvents = tasks.map((task) => ({
  //       id: task.id,
  //       title: task.title,
  //       start: new Date(task.dueDate), // Assuming dueDate is a string in ISO format, adjust date parsing accordingly
  //       end: new Date(task.dueDate), // Assuming task ends on the same day it's due, adjust if needed
  //     }));

  //     // Update state with the formatted events
  //     setEvents(formattedEvents);
  //   } catch (error) {
  //     console.error("Error fetching tasks:", error);
  //   }
  // };

  return (
    <div className="task-calendar-container">
      <div className="toggle-button-container">
        <Button variant="success"  onClick={toggleView}>
          {showTodoList ? "View Calendar" : "View Todo List"}
        </Button>
      </div>

      {showTodoList ? (
        <div className="todo-list">
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
            style={{ height: 500 }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCalendarPage;
