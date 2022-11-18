import React from "react";
import {Checkbox} from "./Checkbox";

// this component represents the checkboxes list in the calendar component
export function CheckboxesList(props) {

    return (
        <div className="checkboxes">
            {
                props.types.map((c,i) => <Checkbox label={c.name} style={{accentColor : c.color}} index={i} types={props.types} setCheck={props.setCheck} setFilterEvent={props.setFilterEvent} events={props.events} check={props.check}/>)
            }
        </div>
    );
}