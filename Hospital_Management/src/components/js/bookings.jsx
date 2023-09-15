// import * as React from 'react';
// import { ScheduleComponent, Day, Week, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// // import { appData } from './datasource';
// const Scheduler = () => {
//   // const eventSettings = { dataSource: appData };
//   const timeScale = { enable: true, slotCount: 5 };

//   return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}> 
//   {/* eventSettings={eventSettings} */}

//     <ViewsDirective>
//       <ViewDirective option='Day' interval={2} displayName='2 Days' startHour='09:30' endHour='18:00' timeScale={timeScale} />
//       <ViewDirective option='Week' interval={2} displayName='2 Weeks' showWeekend={false} isSelected={true} />
//     </ViewsDirective>
//     <Inject services={[Day, Week]} />
//   </ScheduleComponent>);
// }
// ;
// export default Scheduler;
import React from 'react';

const GoogleCalendar = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width || '800'}
      height={height || '600'}
      frameBorder="0"
      scrolling="no"
      style={{ border: 'solid 1px #777' }}
    ></iframe>
  );
};

export default GoogleCalendar;
