import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../assets/Style/TaskCalendar.css";
import TodoList from "../components/Calendar/TodoList";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Typography from "@mui/material/Typography";
const localizer = momentLocalizer(moment);

const TaskCalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [showTodoList, setShowTodoList] = useState(true);

  const toggleView = () => {
    setShowTodoList((prevShowTodoList) => !prevShowTodoList);
  };

  return (
    <div className="task-calendar-container vh-80">
      <div className="toggle-button-container">
        <IconButton
          color="black"
          onClick={toggleView}
          className="centered-icon-button"
        >
          {showTodoList ? (
            <>
              <CalendarTodayIcon sx={{ fontSize: 40 }} /> {/* Increase the icon size */}
              <Typography variant="h6" sx={{ ml: 1, fontSize: 18 }}>
                Calendar
              </Typography> {/* Increase the typography size */}
            </>
          ) : (
            <>
              <FormatListBulletedIcon sx={{ fontSize: 40 }} /> {/* Increase the icon size */}
              <Typography variant="h6" sx={{ ml: 1, fontSize: 18 }}>
                Todo List
              </Typography> {/* Increase the typography size */}
            </>
          )}
        </IconButton>
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
