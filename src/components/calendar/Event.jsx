import React from "react";
import {eventStyle} from "../../utils";

// this component represents the single event scheduled into the calendar
export function Event(props){

    return(
    <>
        {(props.vis === "searched") ?
            <div key={props.ev.id} onClick={() => props.show(props.ev)}>
                    {props.ev.date} | {props.ev.timeStart} - {props.ev.timeEnd} <br/>
                    <div className={"event"}
                         style={eventStyle(props.ev, props.types, props.vis)}> {props.ev.title.slice(0, 20)} </div>
                    <br/>
            </div>
        :
           <div key={props.ev.id} onClick={() => props.show(props.ev)} className={"event"}
                     style={eventStyle(props.ev, props.types, props.vis)}>
                    {(props.ev.title.length > 20) ? props.ev.title.slice(0, 20) + "..." : props.ev.title}
           </div>
        }
    </>
    );
}