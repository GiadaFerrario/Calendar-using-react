import React from "react";
import {Event} from "../calendar/Event";
import {dayStyle, checkWeek} from "../../utils";

// this component represents the week visualization of the calendar
export function Week(props) {

    return (
        <div className="grid-container-week">
            <div className="days">
                <div/>
                <div style={{borderRight: '1px solid black'}}/>
                {
                    props.calendar.map(day => <div key={day} className={"day " + dayStyle(day, props.value)}
                                             onClick={() => props.setDay(day)}>
                        {day.clone().locale("en").format("ddd")}{day.format(" D").toString()}
                    </div>)
                }
            </div>
            <div className="content">
                {
                    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].map(h =>
                        <div key={h} className="hour" style={{gridRow: h}}>
                            {h + ":00"}
                        </div>)
                }
                {
                    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].map(h =>
                        <div key={h} className="row" style={{gridRow: h}}>
                        </div>)
                }
                <div className="filler-col"/>
                {
                    props.calendar.map((day, id) => <div key={day} className="col"
                                                   onClick={() => props.setDay(day)}
                                                   style={{gridColumn: id + 3}}>
                    </div>)
                }
                {
                    props.events.filter(ev => checkWeek(ev, props.value)).map(ev => <Event key={ev.id} ev={ev} types={props.types} vis={"week"} show={props.show}/> )
                }
            </div>
        </div>
    );
}