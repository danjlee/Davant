import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Reservation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            rest_id: this.props.restId,
            party: '1',
            date: new Date(),
            time: '12:00 PM'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    handleDate(day) {
        this.setState({
            date: day
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let result = Object.assign({}, this.state);
        result.date = this.state.date.toISOString().substring(0, 10);
        this.props.createRes(result).then(() => {
            this.props.history.push('/user');
        });
    }

    numParty() {
        let arr = [];

        for (let i = 2; i <= 12; i++) {
            arr.push(i);
        }

        return arr.map(num => (
            <option key={num} value={num}>
                { "For " + num }
            </option>
        ))
    }

    render() {
        let checkUser;

        if (this.props.currentUserId === null) {
            checkUser = (
                <div className="reserve-no-submit">
                    Please sign in to make a reservation
                </div>
            )
        } else {
            checkUser = (
                <button className="reserver-form-submit" onClick={this.handleSubmit}>
                    Book a Table
                </button>
            )
        }

        const { date } = this.state;

        return(
            <div className="reserve-form-container">

                <span className="reserver-form-head">Make a reservation</span>

                <label className="party-size">Party Size
                    <select className="res-input party" onChange={this.update.bind('party')}>
                        <option value="For 1" defaultValue="selected">For 1</option>
                        {this.numParty()}
                    </select>
                    <i className="downarrow-party">
                        <img src={window.downarrow} />
                    </i>
                </label>

                <label htmlFor="">

                </label>
            </div>
        )
    }

}