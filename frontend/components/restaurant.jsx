import React from 'react';
import { withRouter } from 'react-router-dom';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      this.props.fetchRestaurant(this.props.match.params.restId);
    }

    render() {
        if (this.props.restaurant.id === undefined) {
            return(
                <div>There is no information</div>
            );
        }

        const { name, address, location, phone_number, cuisine, menu, hours, dress_code, exec_chef, description } = this.props.restaurant;
        
        return (
          <>
            <div className="rest-banner"><i>BANNER GOES HERE</i></div>
            <div className="rest-show">
              <div className="rest-main">
                <span className="show-item-name">{name}</span>
                <span className="show-item-desc">{description}</span>
                <span className="show-item-menu">
                  <a href={menu}>View restaurant's menu</a>
                </span>
              </div>

              <div className="rest-details">

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