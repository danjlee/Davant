import React from 'react';
import { withRouter } from 'react-router-dom';
import ReservatonContainer from './reservation_container';
import ReviewIndex from './review_index';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);

        this.createFav = this.createFav.bind(this);
        this.deleteFav = this.deleteFav.bind(this);
        this.checkFav = this.checkFav.bind(this);

    }

    componentDidMount() {
      
      if (this.props.restaurant === undefined) {
        this.props.fetchRestaurant(this.props.match.params.restId);
      }
    }

    createFav(id) {
      return e => {
        e.preventDefault();
        this.props.createFav(id);
      }
    }

    deleteFav(id) {
      return e => {
        e.preventDefault();
        this.props.deleteFav(id)
      }
    }

    checkFav() {
      const { restaurant } = this.props;
      debugger;
      if (restaurant.favorited) {
        return (
          <div className="unsave-res" onClick={this.deleteFav(restaurant.id)}>Unfavorite this restaurant</div>
        )
      } else {
        return (
          <div className="save-res" onClick={this.createFav(restaurant.id)}>Favorite this restaurant</div>
        )
      }
    }

    render() {
        if (this.props.restaurant === undefined) {
            return(
                <div>There is no information</div>
            );
        }

        const { name, address, location, phone_number, cuisine, menu, hours, dress_code, exec_chef, description } = this.props.restaurant;
        const numReviews = Object.values(this.props.restaurant.reviews).length
        
        debugger;

        return (
          <>
          {this.checkFav()}
            <div className="rest-banner"><i>BANNER GOES HERE</i></div>
            <div className="rest-show">
              <div className="rest-main">
                <span className="show-item-name">{name}</span>
                <span className="show-item-desc">{description}</span>
                <span className="show-item-menu">
                  <a href={menu}>View menu</a>
                </span>

                <div className="revs-container">
                  
                  {numReviews ?
                  <ReviewIndex reviews={this.props.restaurant.reviews} users={this.props.users} reservations={this.props.reservations} /> :
                  <span className="no-reviews"> No reviews yet!</span>
                }
                
                </div>
              </div>

              <div className="rest-details">
                <ReservatonContainer />
                <span className="show-item-address">
                  <i className="fas fa-map-marker-alt"></i>
                  {address}
                </span>

                <span className="show-item-location">
                  <i className="fas fa-city"></i>City
                  <p>{location}</p>
                </span>

                <span className="show-item-hours">
                  <i className="far fa-clock"></i>Hours of operation
                  <p>{hours}</p>
                </span>

                <span className="show-item-cuisine">
                  <i className="fas fa-utensils"></i>Cuisine
                  <p>{cuisine}</p>
                </span>

                <span className="show-item-dress">
                  <i className="fas fa-tshirt"></i>Dress code
                  <p>{dress_code}</p>
                </span>

                <span className="show-item-chef">
                  <i className="fas fa-user-ninja"></i>Executive chef
                  <p>{exec_chef}</p>
                </span>

                <span className="show-item-phone">
                  <i className="fas fa-phone"></i>Phone number
                  <p>{phone_number}</p>
                </span>

              </div>

            </div>
          </>
        );
    }
}

export default withRouter(Restaurant);