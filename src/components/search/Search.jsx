import React, {Component} from "react"
import moment from "moment"
import SearchedList from "./SearchedList";

// this component represents the searching feature in the calendar, it contains the input field and the SearchedList component
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    // handles  if the search input changes
    handleOnChange(e) {
        const val = e.target.value;
        const url = this.props.searchURL + val;
        if(this.props.remote === true && val !== "") {
            this.searchRemote(url);
        } else if (val !== "") {
            this.searchLocal(val);
        } else {
            this.setState({items: []});
        }
    }

    // executes the fetch for the remote search
    searchRemote = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => res.sort((e1, e2) => moment(e1.date, 'DD.MM.YYYY').toDate() > moment(e2.date, 'DD.MM.YYYY').toDate() ? 1 : -1))
            .then(res => this.setState({items: res}));
    }

    // executes the filter on title and description of events
    searchLocal = (query) => {
        const a = this.props.events.filter(ev => ev.title.includes(query) || ev.description.includes(query));
        a.sort((e1, e2) => moment(e1.date, 'DD.MM.YYYY').toDate() > moment(e2.date, 'DD.MM.YYYY').toDate() ? 1 : -1);
        this.setState({items: a});
    }

    render() {
        return <div className={"search"}>
            <form>
                <input type="text"
                       placeholder="Search..."
                       onChange={this.handleOnChange}
                />
            </form>
            <br/>
            <SearchedList events={this.state.items} types={this.props.types} vis={"searched"} show={this.props.show}/>
        </div>;
    }
}