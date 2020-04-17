import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.location.search.slice(8).split('%20').join(' ')
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return (e) => {
            let string = e.target.value;
            if (string.length > 0) {
                this.setState({ [field]: string });
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/restaurants',
            search: `?search=${this.state.keyword}`
        });
    }



    render() {
        if (this.props.location.pathname === '/') {
            return (
                <form className="search-container" onSubmit={this.handleSubmit} method="GET">

                    <span className="search-span">
                        <div className="search-image">
                            <img src={window.search} />
                        </div>
                        <input type="text" onChange={this.update('keyword')} value={this.state.keyword} placeholder="Location, Restaurant, or Cuisine" />
                    </span>
                    <button type="submit " className="search-submit">Let's go</button>
                </form>
            );
        } 

    }
}


export default withRouter(Search);