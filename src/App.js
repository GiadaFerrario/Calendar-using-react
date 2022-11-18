import './App.css';
import Calendar from "./components/calendar/Calendar"
import React from "react";

function App() {
  const events=[{id: 1, title: "Meeting azienda", description: "Nella sala riunioni", date: "06.04.2022", timeStart: "11:00", timeEnd: "12:00", calendar: "Work"},
      {id: 2, title: "Allenamento", description: "Allenamento di boxe", date: "11.04.2022", timeStart: "09:00", timeEnd: "11:00", calendar: "Sport"},
      {id: 3, title: "Serata pizza", description: "Pizza e film", date: "23.04.2022", timeStart: "19:30", timeEnd: "22:00", calendar: "Home" },
      {id: 4, title: "Serata sushi", description: "Sushi buono", date: "20.05.2022", timeStart: "19:30", timeEnd: "23:00", calendar: "Home" },
      {id: 5, title: "Meeting cliente", description: "In sede", date: "02.03.2022", timeStart: "10:30", timeEnd: "12:00", calendar: "Work" },
      {id: 6, title: "Presentazione progetto", description: "In sede", date: "04.05.2022", timeStart: "12:45", timeEnd: "16:00", calendar: "Work" },
      {id: 7, title: "Partita", description: "Partita basket", date: "10.05.2022", timeStart: "19:00", timeEnd: "21:00", calendar: "Sport"},
      {id: 8, title: "Meeting lavoro", description: "A londra", date: "08.06.2022", timeStart: "10:00", timeEnd: "13:00", calendar: "Work" },
      {id: 9, title: "Giardiniere", description: "Appuntamento con giardiniere", date: "18.06.2022", timeStart: "17:00", timeEnd: "18:00", calendar: "Home" },
      {id: 10, title: "Tennis", description: "Partita tennis doppio", date: "01.07.2022", timeStart: "16:00", timeEnd: "19:00", calendar: "Sport"}
  ];

  const calendars = [{id: 1, name:'Work', color:'#8cf3e6'},
        {id: 2, name:'Sport', color:'#1fccec'},
        {id: 3, name:'Home', color:'#319cf8'},
  ];

  // this function show event's details when an event is clicked
  function show(ev){
           alert(ev.title + "\n" + ev.description + "\nOn date " + ev.date + "\nFrom "
             + ev.timeStart + " to " + ev.timeEnd + "\nFrom calendar " + ev.calendar);
  }

  return (
      <div>
          <Calendar events={events} calendarsType={calendars} show={show} month={true} startVis={"month"}/>
          <Calendar events={events} calendarsType={calendars} show={show} search={true} month={true} startVis={"month"}/>
          <Calendar events={events} calendarsType={calendars} show={show} search={true} week={true} startVis={"week"}/>
          <Calendar events={events} calendarsType={calendars} show={show} search={true} week={true} month={true} startVis={"month"}/>
          <Calendar eventsURL={"https://supsi-events.herokuapp.com/bff/events"} calendarsURL={"https://supsi-events.herokuapp.com/bff/calendars"}
                    searchURL={"https://supsi-events.herokuapp.com/bff/events?search="} show={show} month={true} startVis={"month"}/>
          <Calendar eventsURL={"https://supsi-events.herokuapp.com/bff/events"} calendarsURL={"https://supsi-events.herokuapp.com/bff/calendars"}
                    searchURL={"https://supsi-events.herokuapp.com/bff/events?search="} show={show} search={true} month={true} startVis={"month"}/>
          <Calendar eventsURL={"https://supsi-events.herokuapp.com/bff/events"} calendarsURL={"https://supsi-events.herokuapp.com/bff/calendars"}
                    searchURL={"https://supsi-events.herokuapp.com/bff/events?search="} show={show} search={true} week={true} startVis={"week"}/>
          <Calendar eventsURL={"https://supsi-events.herokuapp.com/bff/events"} calendarsURL={"https://supsi-events.herokuapp.com/bff/calendars"}
                    searchURL={"https://supsi-events.herokuapp.com/bff/events?search="} show={show} search={true} week={true} month={true} startVis={"month"}/>
      </div>
  );
}

export default App;
