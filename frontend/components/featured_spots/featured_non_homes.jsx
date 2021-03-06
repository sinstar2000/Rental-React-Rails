import React from 'react';
import { Link } from 'react-router';
import FeaturedSpotDetail from './featured_spot_detail';
import ReactDOM from 'react-dom';


export default class FeaturedNonHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotViewIdx: 1
    };
    this.spots = this.spots.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }


  spots() {
    return this.props.spots.map((spot, idx) => (
      <FeaturedSpotDetail key={spot.id}
        ownIdx={ idx }
        currIdx={ this.state.spotViewIdx }
        spot={spot}
        loading={this.props.loading} />
      )
    );
  }

  moveLeft() {
    return (e) => {
      if (this.state.spotViewIdx > 1) {
        this.setState({ spotViewIdx: (this.state.spotViewIdx - 1) });
      }
    };
  }

  moveRight() {
    return (e) => {
      if (this.state.spotViewIdx < 5) {
        this.setState({ spotViewIdx: (this.state.spotViewIdx + 1) });
      }
    };
  }

  render() {
    return (
      <div className="featured-holder">
        { this.state.spotViewIdx > 1 ? <button onClick={ this.moveLeft() } className="chevron-holder"><img className="chevron" src={window.chevronl} /></button> : <div className="faux-chevron"></div> }
        <ul className="featured-non-homes">{this.spots()}</ul>
        { this.state.spotViewIdx < 5 ? <button onClick={ this.moveRight() } className="chevron-holder"><img className="chevron" src={window.chevronr} /></button> : <div className="faux-chevron"></div> }
      </div>
    );
  }


}
