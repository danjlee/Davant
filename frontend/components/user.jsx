import React from 'react';
import { withRouter } from 'react-router-dom';

class User extends React.Component {
    constructor(props) {
        super(props);

    }

    // componentDidMount() {
    //     this.props.fetchAllRes(this.props.currentUserId);
    // }

    render() {
        return (
            <div> UPCOMING RESERVATIONS test </div>
        )
    }
}

export default withRouter(User);