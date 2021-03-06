import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import styledMapType from './map_style';



class AddressMap extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let _mapOptions = {
      center: {lat: 41.9028,
        lng: 12.4964},
      zoom: 15,
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
    // this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.currBounds.lat !== nextProps.currBounds.lat || this.props.currBounds.lng !== nextProps.currBounds.lng) {
        if (this.spotCircle) {
          this.spotCircle.setMap(null);
        }
        this.spotCircle = new google.maps.Circle({
          strokeColor: '#2EF4C1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2EF4C1',
          fillOpacity: 0.35,
          map: this.map,
          center: {lat: nextProps.currBounds.lat,
            lng: nextProps.currBounds.lng},
          radius: 50
        });
        let center = new google.maps.LatLng(nextProps.currBounds.lat, nextProps.currBounds.lng);
        this.map.setZoom(17);
        this.map.panTo(center);
    }
  }

  // componentDidUpdate() {
  //   this.MarkerManager.updateMarkers(this.props.spots);
  // }


  render() {
    return <div className="address-map" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(AddressMap);
