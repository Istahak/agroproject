import React from "react";
import moment from "moment";
import "./TaskCard.css";

const TaskCard = ({ task, onMarkAsFinished, onDelete }) => {
  const { title, createdDate, dueDate, completed } = task;

  const formattedCreatedDate = moment(createdDate).format("MMMM DD, YYYY");
  const formattedDueDate = dueDate ? moment(dueDate).format("MMMM DD, YYYY") : "No due date";

  return (
    <div className="task-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Created: {formattedCreatedDate}</p>
        <p className="card-text">Due: {formattedDueDate}</p>
        <p className="card-text">Status: {completed ? "Completed" : "Incomplete"}</p>
        <button className="btn btn-success" onClick={onMarkAsFinished}>
          {completed ? "Mark as Incomplete" : "Mark as Finished"}
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
