import React, {Component} from 'react';
import './PinsFeed.css';

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // componentDidMount() {
    //     fetch("/getPosts").then(res => {

    //     })
    // }

    render() {
        return (
            <div className="pins-feed">
                {this.state.posts}
            </div>
        );
    }
}

export default PinsFeed;