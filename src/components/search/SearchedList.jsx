import React from "react"
import {Event} from "../calendar/Event"

// this component represents the list of searched events
export default function SearchedList(props) {

        return (<div className={"searched"}>
            {props.events.map(ev => <Event key={ev.id} ev={ev} types={props.types} vis={props.vis} show={props.show}/>)}
         </div>);

}