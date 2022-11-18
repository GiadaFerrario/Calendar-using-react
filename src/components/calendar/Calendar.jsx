import React, {useState, useEffect, useRef} from "react"
import moment from "moment"
import 'moment/locale/it'
import buildCalendar from "./build";
import Search from "../search/Search";
import {Month} from "../visualization/Month";
import {Week} from "../visualization/Week";
import {Buttons} from "../header/Buttons";
import {CheckboxesList} from "../checkboxes/CheckboxesList";
import {Title} from "../header/Title";

// this component represents the whole calendar
export default function Calendar(props) {
    const [calendar, setCalendar] = useState([]); //months array
    const [value, setValue] = useState(moment()); // single day, initialized as today
    const [vis, setVis] = useState(props.startVis); // calendar visualization
    const [calendarEvents, setEvents] = useState([]); // events array
    const [calendarsTypes, setTypes] = useState([]); // calendar types array
    const remote = useRef();
    const [filteredEvents, setFilteredEvent] = useState([]); // calendar filtered events based on checkboxes
    const [checked, setChecked] = useState([]); // checkboxes


    useEffect(() => {
        setCalendar(buildCalendar(value, vis));
    }, [value,vis]);

    function setLocalCalendar() {
        setEvents(props.events);
        setFilteredEvent(props.events);
    }

    function setLocalTypes() {
        setTypes(props.calendarsType);
        setChecked(new Array(props.calendarsType.length).fill(true));
    }

    // executes the fetch for the remote request of calendars events
    const getEvents = () => {
        fetch(props.eventsURL)
            .then((res) => res.json())
            .then((res) => {
                setEvents(res);
                setFilteredEvent(res);
            })
    }

    // executes the fetch for the remote request of calendars types
    const getTypes = () => {
        fetch(props.calendarsURL)
            .then((res) => res.json())
            .then((res) => {
                setTypes(res);
                setChecked(new Array(res.length).fill(true));
            })
    }

    // sets calendar events and types based on props
    useEffect( () => {
        if ('events' in props && 'calendarsType' in props) {
            setLocalCalendar();
            setLocalTypes();
            remote.current = false;
        } else if ('eventsURL' in props && 'calendarsURL' in props) {
            getEvents();
            getTypes();
            remote.current = true;
        }
    }, []);

    function setDay(day) {
        setValue(day);
    }

    function setVisualization(visual) {
        setVis(visual);
    }

    function setCheck(check){
        setChecked(check);
    }

    function setFilterEvent(filterEvent){
        setFilteredEvent(filterEvent);
    }

    return (
        <div className={"container"}>
            <div className="grid-header-container">
                <div>
                </div>
                <Title value={value}/>
                <div>
                </div>
                <div className="grid-header-item text-right" >
                    {('month' in props && props.month === true && 'week' in props && props.week === true) ?
                        <Buttons buttons={"both"} setDay={setDay} setVis={setVisualization} vis={vis} value={value}/>
                        :
                        <Buttons buttons={"none"} setDay={setDay} vis={vis} value={value}/>
                    }
                </div>
                <div>
                </div>
            </div>
            <div className="grid-main-container">
                <CheckboxesList types={calendarsTypes} setCheck={setCheck} setFilterEvent={setFilterEvent} events={calendarEvents} check={checked}/>
                <div>
                    {(vis === "month") ?
                        <Month calendar={calendar} value={value} events={filteredEvents} types={calendarsTypes} show={props.show} setDay={setDay}/>
                        :
                        <Week calendar={calendar} value={value} events={filteredEvents} types={calendarsTypes} show={props.show} setDay={setDay}/>
                    }
                </div>
                {('search' in props && props.search === true) ?
                    <Search remote={remote} events={filteredEvents} types={calendarsTypes} searchURL={props.searchURL} show={props.show}/>
                    :
                    <></>
                }
            </div>
        </div>
    );
}
