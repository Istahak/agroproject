import React from 'react';

const CalendarDay = ({ date, tasks }) => {
  return (
    <div className="calendar-day">
      <div className="date">{date}</div>
      <ul>
        {/* Render tasks for this day */}
        {/* Example: tasks.map(task => <li key={task.id}>{task.name}</li>) */}
      </ul>
    </div>
  );
};

export default CalendarDay;
