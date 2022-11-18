import React from "react";

// this component represents the single checkbox present in the checkboxes list
export function Checkbox(props) {

    function handleChecked(indexType){
        const updateChecked = props.check.map((item,index) =>
            index === indexType ? !item : item
        );
        props.setCheck(updateChecked);

        let filterList = [];
        props.types.forEach((type,index) => {
            let eventType = props.events.filter(e => e.calendar === type.name);
            if(updateChecked[index]) {
                eventType.forEach(ev => {
                    filterList.push(ev);
                });
            }
        });
        props.setFilterEvent(filterList);
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={true} onChange={() => handleChecked(props.index)} style={props.style}/>
            {props.label} <br/>
        </label>
    );
}