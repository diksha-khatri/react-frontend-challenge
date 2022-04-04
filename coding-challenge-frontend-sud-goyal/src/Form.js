import React from "react";
import axios from "axios"
import { useState , useEffect } from "react";
// import AsyncSelect from "react-select/async"
// import Select from "react-select";
// import {GoogleMap , withScriptjs, withGoogleMap } from "google-maps-react"
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export default function Form(){
const options = []  
    
        const [data , setdata] = useState([])
                         
        

        useEffect(()=>{
                const getdata = async ()=>{
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const getinfo = await res.json()
                console.log(getinfo)
                setdata( await getinfo)
            }
            getdata()
        },[])

    
    const [formData, setFormData] = React.useState(
        {
            title:"",
            body:"",
            user:"",
            id:""
        }
    )
    console.log(formData)
    function handleChange(event){
        
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checked" ? checked : value
            }
        })    
    }   
    function handleSubmit(event){
        
        event.preventDefault()
    }
   return( 
       <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="user">What is your favorite color?</label>
                    <select className="form--input" id="user" 
                    value={formData.id}
                    onChange={handleChange}
                    name="id"
                    >  
                        
                        <option value="">--Choose--</option>
                    
                        {
                            data.map( (item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                        
                        
                        
                    </select>
                        
                            
                                <iframe
                                width="300"
                                height="250"
                                style="border:0"
                                loading="lazy"
                                allowfullscreen
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-sAqxa1pZqF4tk7eR83ZS7wOCEmsxKwI
                                    &q={{lat=item.geo.lat},{lng=item.geo.lng}},Seattle+WA">
                                </iframe>
                
                        
                        
                    
                    {/* <Map google={this.props.google} zoom={14}>
 
                    <Marker onClick={this.onMarkerClick}
                     name={'Current location'} />

                       <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                    </InfoWindow>
                    </Map> */}

                    <br /> 
                    {/* <img src="./images/earth.png" width="100px"></img> */}

                    <textarea className="form--input" 
                        placeholder="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <textarea  className="form--input"
                        placeholder="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                    <button className="form--submit" type="submit">Submit</button>
            </form>
       </div>
   )
}
// function map(){
//     return(
//         <Map
//         google={this.props.google}
//         style={style}
//         initialCenter={{
//           lat: [this.item.geo.lat],
//           lng: [this.item.geo.lng]
//         }}
//         zoom={15}
//         onClick={this.onMapClicked}
//       />
//     )
// }
// const WrappedMap = withScriptjs(withGoogleMap(map))

// function GoogleApiWrapper(){
//     return(
//         <WrappedMap
//             googleMapURl = {"AIzaSyD-sAqxa1pZqF4tk7eR83ZS7wOCEmsxKwI"}
//             loadingElement={<div style={{height = "100%"}} />}
//             containerElement={<div style={{height = "100%"}} />}
//             mapElement={<div style={{height = "100%"}} />}
//          />
//     )
//      }

//  export {GoogleApiWrapper} 