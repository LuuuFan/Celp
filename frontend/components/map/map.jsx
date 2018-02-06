import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.addBurritoPlace = this.addBurritoPlace.bind(this);
  }

  componentDidMount(){
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(map, options);
    this.listenForMove();

    const burritos = [
      { lat: 37.775785, lng: -122.445979, name: "Papalote" },
      { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
      { lat: 37.781899, lng: -122.410426, name: "Cancun" }
    ];

    burritos.forEach(this.addBurritoPlace);
  }

  addBurritoPlace(burritoPlace) {
    const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    marker.addListener('click', () => {
      alert(`clicked on: ${burritoPlace.name}`);
    });
  }

  listenForMove(){
    google.maps.event.addListener(this.map, 'idle', ()=>{
      const bounds = this.map.getBounds();
      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
    });
  }

  render(){
    return(
      <div className='map' id='index-map' ref='map'>
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
