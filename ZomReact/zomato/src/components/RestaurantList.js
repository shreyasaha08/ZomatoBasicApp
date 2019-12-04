import React, { Component } from 'react'
import axios from 'axios'

class RestaurantList extends Component {
    constructor(props){
        super(props)
        this.state = {
            restaurants : []
        }
    }

componentDidMount(){
    axios.get("http://localhost:3000/restaurants")   
    .then(response => {
        console.log(response.data)
        this.setState({restaurants:response.data})
    })
    .catch(error =>{
        console.log(error)
    })
}
    render() {
        const myres = this.state.restaurants.map((restaurant) => {
        return <div key={restaurant.Id}>{restaurant.Name} {restaurant.Cuisine}</div>
        })
        return (
            <div>
                {myres}
    
            </div>
        )
    }
}
export default RestaurantList