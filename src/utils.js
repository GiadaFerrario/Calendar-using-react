import moment from "moment";

// function that sets the style of an event
export function eventStyle(event, types, vis) {
    if (vis === "month" || vis === "searched") {
        return {background: types.find(c => c.name === event.calendar).color};
    } else if (vis === "week") {
        return {gridColumn: parseInt(moment(event.date, 'DD.MM.YYYY').format("e"))+3,
            gridRow: parseInt(moment(event.timeStart, 'HH:mm').format('H'))+1 + '/ span ' + ((parseInt(moment(event.timeEnd, 'HH:mm').format('H')) - parseInt(moment(event.timeStart, 'HH:mm').format('H')) === 0 ? 1 : (parseInt(moment(event.timeEnd, 'HH:mm').format('H')) - parseInt(moment(event.timeStart, 'HH:mm').format('H'))))),
            background: types.find(c => c.name === event.calendar).color};
    }
}

export function check(ev, day) {
    const myDate = moment(ev.date, 'DD.MM.YYYY').toDate();
    return day.isSame(myDate, "day");
}

function isToday(day) {
    return day.isSame(moment(), "day");
}

function isSelected(day, value) {
    return value.isSame(day, "day");
}

function isNotThisMonth(day, value) {
    return !day.isSame(value, "month");
}

export function dayStyle(day, value) {
    if(isNotThisMonth(day, value)) return "grey";
    if(isSelected(day, value) && isToday(day)) return "today";
    if(isSelected(day, value)) return "selected";
    if (isToday(day)) return "today";
    return "";
}

export function checkWeek(ev, value) {
    const myDate = moment(ev.date, 'DD.MM.YYYY').toDate();
    return value.isSame(myDate, "week");
}