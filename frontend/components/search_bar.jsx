import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchRestaurants } from '../util/restaurant_api_util';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.location.search.slice(8).split('%20').join(' '),
            suggestions: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
        this.holdSuggest = this.holdSuggest.bind(this);
        this.timeOut = null;
    }


    update(field) {
        return (e) => {
            document.getElementsByClassName('suggest-list')[0].classList.remove('hidden');
            let string = e.target.value;
            if (string.length > 0) {
                this.setState({ [field]: string }, this.holdSuggest);
            } else {
                this.setState({ [field]: string, suggestions: [] })
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

    showSuggestions() {
        let suggestArray;
        if (this.state.suggestions.result.length > 5) {
            suggestArray = this.state.suggestions.result.slice(0, 5);
        } else {
            suggestArray = this.state.suggestions.result;
        }
        return suggestArray.map((name, idx) => (
            <li key={idx} onClick={() => {
                document.getElementsByClassName('suggest-list')[0].classList.add('hidden');
                this.setState({ keyword: name });
            }}>{name}</li>
        ))
    }

    holdSuggest() {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            searchRestaurants(this.state.keyword)
                .then((result) => {
                    this.setState({ suggestions: result })
                });
        }, 500);
    };


    render() {
        if (this.props.location.pathname === '/') {
            return (
                <form className="search-container" onSubmit={this.handleSubmit} method="GET">

                    <span className="search-span">
                        <div className="search-icon">
                            <img src={window.search} />
                        </div>
                        <input type="text" onChange={this.update('keyword')} value={this.state.keyword} placeholder="Location, Restaurant, or Cuisine" />
                        <ul className="suggest-list">{this.state.suggestions.result ? this.showSuggestions() : null}</ul>
                    </span>
                    <button type="submit " className="search-submit">Let's go</button>
                </form>
            );
        } else {
            return (
                <div className="index-search-bar">
                    <form className="index-search-container" onSubmit={this.handleSubmit} method="GET">

                        <span className="search-span">
                            <div className="search-icon">
                                <img src={window.search} />
                            </div>
                            <input type="text" value={this.state.keyword} onChange={this.update('keyword')} placeholder="Location, Restaurant, or Cuisine" />
                            <ul className="suggest-list">{this.state.suggestions.result ? this.showSuggestions() : null}</ul>
                        </span>
                        <button type="submit" className="search-submit" >Find a Table</button>
                    </form>
                </div>
            );
        }

    }
}


export default withRouter(Search);