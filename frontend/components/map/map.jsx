import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.addBizPlace = this.addBizPlace.bind(this);
  }

  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, options);
    this.listenForMove();
  }

  componentDidUpdate(){
    // const bizPlace = [];
    let pos;
    if (this.props.bizes) {
      this.props.bizes.forEach((biz, idx) => {
        if (biz.lat && biz.lng) {
          pos = new google.maps.LatLng(biz.lat, biz.lng);
          this.addBizPlace({pos: pos, name: biz.name});
          if (idx === 0) {
            this.map.setCenter(pos);
          }
        } else {
          this.geocoder.geocode({'address': biz.display_address}, (results, status)=>{
          if (status == 'OK') {
            if (idx === 0) {
              this.map.setCenter(results[0].geometry.location);
            }
            this.addBizPlace({pos: results[0].geometry.location, name: biz.name})
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
        }
      });
    } else if (this.props.biz){
      if (this.props.biz.lat && this.props.biz.lng) {
        pos = new google.maps.LatLng(this.props.biz.lat, this.props.biz.lng);
        this.addBizPlace({pos: pos, name: this.props.biz.name});
      } else {
        this.geocoder.geocode({'address': this.props.biz.display_address}, (results, status)=>{
        if (status == 'OK') {
          this.map.setCenter(results[0].geometry.location);
          this.addBizPlace({pos: results[0].geometry.location, name: this.props.biz.name})
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
      }
    }
    // bizPlace.forEach(this.addBizPlace);
  }

  addBizPlace(place) {
    // const pos = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position: place.pos,
      map: this.map
    });
    marker.addListener('click', () => {
      // alert(`clicked on: ${place.name}`);
    });
  }

  listenForMove(){
    google.maps.event.addListener(this.map, 'idle', ()=>{
      const bounds = this.map.getBounds();
      // console.log('center',
      //   bounds.getCenter().lat(),
      //   bounds.getCenter().lng());
    });
  }

  render(){
    return(
      <div className='map' ref='map'>
        <p>
          Hey! Here are a few good burrito places in SF. Click on them
          to find their name. Move the map and check the console to see
          the new boundaries of the displayed map.
        </p>
      </div>
    );
  }
}


export default Map;
