import React from "react";
import { useState, useEffect } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

// import AsyncSelect from "react-select/async"
// import Select from "react-select";
// import {GoogleMap , withScriptjs, withGoogleMap } from "google-maps-react"
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default function Form() {

    const [data, setdata] = useState([])
    const [userid, setuserid] = useState("")
    const [post, setpost] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        const getdata = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const getinfo = await res.json()
            console.log(getinfo)
            setdata(await getinfo)
        }
        getdata()
    }, [])

    // const handleData = (event) => {
    //     const getuserid = event.target.value
    //     setuserid(userid)
    // }
    // useEffect(() => {const options = {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
    //     const getpost = async () => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userid}`,{method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }})
    //         const getpost = await res.json()
    //         console.log(getpost)
    //         setpost(await getpost)
    //     }
    //     getpost()
    // }, [userid])
    const [formData, setFormData] = React.useState(
        {
            title: "",
            body: "",
            user: "",
            id: "",
            latlng: ""

        }
    )
    // const [postData, setpostData] = React.useState(
    //     {
    //         title: "",
    //         body: "",
    //         id: "",

    //     }
    // )
    console.log(formData)
    function handleChange(event) {

        const { name, value, type, checked, id } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checked" ? checked : value,

            }
        })
        // find the Selected User with the ID from the Dropdown Select
        // and find it in the data array which is populated from the API
        const selectedId = event.target.value;
        const user = data.find(user => user.id == selectedId)
        setSelectedUser(user)
    }
    // function handlepost(e){
    //     setpostData () => {
    //     return {
    //         const newdata = { ...post }
    //         newdata[e.target.id] = e.target.value,
    //         setpost(newdata),
    //         console.log(setpost)
    //     }}
    // }

function handleSubmit(event) {

    event.preventDefault()
    // Axios.post(url, {
    //     id: postData.id,
    //     title: postData.title,
    //     body: postData.body
    // })
    //     .then(res => {
    //         console.log(res.postData)
    //     })
}
return (
    <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="user">Select a user</label>
            <select className="form--input" id="user"
                value={formData.id}
                onChange={handleChange}
                name="id"

            >

                <option value="">--Choose--</option>

                {
                    data.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                        // <Map
                        //     google={this.props.google}
                        //     // style={style}
                        //     initialCenter={{
                        //     lat: [this.item.address.geo.lat],
                        //     lng: [this.item.address.geo.lng]
                        //     }}
                        //     zoom={15}
                        //     onClick={this.onMapClicked}
                        // />
                        //     <img name="latlng"
                        //     value={formData.latlng}
                        //     onchange={handleChange}
                        //     src = {`https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.address.geo.lat},${item.address.geo.lng}&key=${Key}`}
                        //    /> 
                    ))
                }

                {/* {
                                    data.map((item)=>(
                                        <img 
                                        src = {`https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.address.geo.lat},${item.address.geo.lng}&key=${Key}`}
                                        />
                                        ))
                                }  */}

                {/* console.log(Lat,Lng) */}



            </select>

            {/* {
                data.map((item) => (
                    Credential = "sameorigin",
                    <img
                        src={`https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.address.geo.lat},${item.address.geo.lng}&key=${Key}`}
                    />

                ))

            } */}
        
                <textarea className="form--input"
                    placeholder="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />,
                <textarea className="form--input"
                    placeholder="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
        
        
            <button className="form--submit" type="submit">Submit</button>

            
        </form>
        <div class="map-container">
            <MyMapUpdated user={{...selectedUser}}/>
        </div>
    </div>
)}

function MyMap(props) {
  return Object.keys(props.user).length > 0? <Map google={props.google} zoom={14}>
         <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{
                "lat": props.user.address.geo.lat,
                "lng": props.user.address.geo.lng
            }}
            style={{
                innerWidth: 50
            }}
            />
      </Map>: null
}

const MyMapUpdated =  GoogleApiWrapper({
    apiKey: process.env.GOOGLE_KEY
})(MyMap);
