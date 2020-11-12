import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        if (Object.keys(this.props.review).length === 0) { 
            return null; 
        }

        let overall = 0;
        let food = 0;
        let service = 0;
        let ambience = 0;

        const reviews = Object.values(this.props.reviews).map(review => {
            overall += review.overall;
            food += review.food;
            service += review.service;
            ambience += review.ambience;

            const user = this.props.users[review.user_id];
            const res = this.props.reservations[review.res_id];

            return (
                <div className="review-index-item" key={review.id}>
                    <span className="review-left">
                        <div className="review-user-icon">{user.fname[0]}{user.lname[0]}</div>
                        <h5>{user.fname}{user.lname[0]}</h5>
                        <h5 className="review-location">{user.location}</h5>
                    </span>

                    <span className="review-right">
                        <span className="review-stars-container">
                            <div className="review-stars" style={style}></div>
                        </span>
                    </span>
                </div>
            )
        });
    }
}