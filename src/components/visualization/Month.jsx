import React from "react";
import {Event} from "../calendar/Event";
import {dayStyle, check} from "../../utils";

// this component represents the month visualization of the calendar
export function Month(props) {

    return (
        <div className="grid-container">
            {
                ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"].map(d => <div key={d}
                                                                                className="grid-item-days text-center"> {d} </div>)
            }
            {
                props.calendar.map(day => <div key={day} className={"grid-item " + dayStyle(day, props.value)}
                                         onClick={() => props.setDay(day)}>
                    {day.format(" D").toString()}
                    {props.events.filter(ev => check(ev, day)).map(ev => <Event key={ev.id} ev={ev} types={props.types} vis={"month"} show={props.show}/>)}
                </div>)
            }
        </div>
    );
}