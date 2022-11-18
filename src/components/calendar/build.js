// this function builds the calendar starting from the visualization and the value that represents the day
export default function buildCalendar(value, vis){

    let startDay;
    let endDay;

    if(vis === "month"){
        startDay = value.clone().startOf("month").startOf("week");
        endDay = value.clone().endOf("month").endOf("week");
    } else if(vis === "week") {
        startDay = value.clone().startOf("week");
        endDay = value.clone().endOf("week");
    }
    const day = startDay.clone().subtract(1,"day");

    const calendar = []
    while (day.isBefore(endDay,"day")){
        calendar.push(day.add(1,"day").clone());
    }

    return calendar;
}