import React from "react";

// this component represents the title based on current month and year
export function Title(props) {

    return (
        <div>
            <h1 className="grid-header-item text-left">
                {props.value.clone().locale("en").format("MMMM").toUpperCase()} {props.value.format("YYYY")}
            </h1>
        </div>
    );
}