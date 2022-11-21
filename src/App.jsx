import { Component } from 'react'
import Map, { GeolocateControl, NavigationControl } from '@urbica/react-map-gl';
import * as Components from './components'
import { Routes ,Route } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      accessToken: 'pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRvaTR4MHRzcTNibzhlNGUzYWNpNSJ9.oehlKj-dv7_LzzmhzVJcmg',
      isDarkTheme: false,
      initialViewPort : {
        longitude: 107.608238,
        latitude: -6.914864,
        zoom: 12
      }
    }
  }

  themes = {
    light: 'mapbox://styles/mapbox/outdoors-v9',
    dark : 'mapbox://styles/vinoarystio/cl6ttky7b000y14my3f7khdlk'
  }

  handleSetTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    })
  }

  setViewPort = () => {
    this.setState({
      initialViewPort: this.state.initialViewPort
    })
  }

  render(){
    return (
      <>
        <Map
          {...this.state.initialViewPort}
          style={{ width: "100%", height: "100vh" }}
          mapStyle={this.state.isDarkTheme ? this.themes['dark'] : this.themes['light']}
          accessToken={this.state.accessToken}
          onViewportChange={this.setViewPort}
        >
          {/* Filter by route path */}
          <Routes>
            <Route path='/' element={<Components.LayerColorFilter names={'Hendri Alqori'} />}/>
            <Route path="/status-merah" element={<Components.LayerColorFilter names={'Hendri'} color={'Merah'}/>} />
            <Route path="/status-hijau" element={<Components.LayerColorFilter color="Hijau" />} />
            <Route path="/status-kuning" element={<Components.LayerColorFilter color="Kuning" />} />
          </Routes>

          {/* Menus */}
          <Components.Menu 
            isDarkTheme={this.state.isDarkTheme} 
            toggleThemeAction={this.handleSetTheme} 
          />

          {/* New features */}
          <GeolocateControl position='top-right' />
          <NavigationControl showCompass showZoom position='top-right' />

        </Map>
      </>
    )
  }
}

export default App
