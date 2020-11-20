import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        if (Object.keys(this.props.reviews).length === 0) { 
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

            const user = this.props.users[review.author_id];
            const res = this.props.reservations[review.rest_id];
            
            return (
                <div className="review-index-item" key={review.id}>
                    <span className="review-left">
                        <div className="review-user-icon">{user.fname[0]}{user.lname[0]}</div>
                        <h5>{user.fname}{user.lname[0]}</h5>
                        <h5 className="review-location">{user.location}</h5>
                    </span>

                    <span className="review-right">
                        <span className="review-stars-container">
                            <div className="review-stars">1 to 5 stars</div>
                            <h5> Dined on {res.date} </h5>
                        </span>

                        <span className="review-ratings">
                            <h5>Overall</h5>
                            <h5 className="review-rating"> {review.overall} </h5>
                            <h5>Food</h5>
                            <h5 className="review-rating"> {review.food} </h5>
                            <h5>Service</h5>
                            <h5 className="review-rating"> {review.service} </h5>
                            <h5>Ambience</h5>
                            <h5 className="review-rating"> {review.ambience} </h5>
                        </span>
                        <h4 className="review-comment"> {review.comment} </h4>
                    </span>
                </div>
            )
        });

        overall /= Object.keys(this.props.reviews).length;
        food /= Object.keys(this.props.reviews).length;
        service /= Object.keys(this.props.reviews).length;
        ambience /= Object.keys(this.props.reviews).length;


        return (
            <div className="reviews-container">
                <ul className="members-reviews">
                    { reviews }
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;