import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.addBizPlace = this.addBizPlace.bind(this);
  }

  componentDidMount(){
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(map, options);
    this.listenForMove();
  }

  componentDidUpdate(){
    const bizPlace = [];
    if (this.props.bizes) {
      this.props.bizes.map((biz)=>{
        if (biz.lat && biz.lng) {
          bizPlace.push({
            lat: biz.lat,
            lng: biz.lng,
            name: biz.name
          });
        }
      });
    } else if (this.props.biz){
      bizPlace.push({
        lat: this.props.biz.lat,
        lng: this.props.biz.lng,
        name: this.props.biz.name
      });
    }
    bizPlace.forEach(this.addBizPlace);
  }

  addBizPlace(place) {
    const pos = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    marker.addListener('click', () => {
      alert(`clicked on: ${place.name}`);
    });
  }

  listenForMove(){
    google.maps.event.addListener(this.map, 'idle', ()=>{
      const bounds = this.map.getBounds();
      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
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
