import {useState, useEffect} from "react";

const useRestaurantsData = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("http://localhost:3000/restaurants")
        const jsonData = await data.json()
        setRestaurants(jsonData)
        setFilteredRestaurants(jsonData)
    }

    return {restaurants, setRestaurants, filteredRestaurants, setFilteredRestaurants}
}

export default useRestaurantsData