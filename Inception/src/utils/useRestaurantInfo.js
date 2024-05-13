import { useEffect, useState } from 'react'

const useRestaurantInfo = (id) => {
    const [restaurantInfo, useRestaurantInfo] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('http://localhost:3000/restaurants/' + id)
        const jsonData = await data.json()
        useRestaurantInfo(jsonData)
    }


    return restaurantInfo
}

export default useRestaurantInfo