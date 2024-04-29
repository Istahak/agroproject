import React, { useEffect } from 'react';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function Calendar() {
  const localData = {
    dataSource: [{
      EndTime: new Date(2019, 0, 11, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0)
    }]
  };

  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  useEffect(() => {
    // Additional effect code if needed
  }, []);

  return (
    <ScheduleComponent currentView='Month'
      eventSettings={{ dataSource: remoteData }} selectedDate={new Date(2017, 5, 5)}>
      {/* Add your ScheduleComponent configuration here */}
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default Calendar;
