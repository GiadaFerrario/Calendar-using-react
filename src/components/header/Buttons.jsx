import React from "react";
import moment from "moment";

// this component represents th buttons group in the calendar according to props
// both -> month week and movement buttons (< > Today)
// none -> only movement buttons
export function Buttons(props) {

    function prev() {
        return props.setDay(props.value.clone().subtract(1, props.vis));
    }

    function next(){
        return props.setDay(props.value.clone().add(1, props.vis));
    }

    return (
        <>
            {(props.buttons === 'both') ?
                <>
                    <button onClick={() => props.setVis("month")}> Month </button>
                    <button onClick={() => props.setVis("week")}> Week </button>
                </>
                : <> </>}
            <button onClick={() => prev()}> &lt; </button>
            <button onClick={() => props.setDay(moment())}> Today </button>
            <button onClick={() => next()}> &gt; </button>
        </>
    );
}