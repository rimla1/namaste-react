import { Card } from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);



  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // const data = await fetch("")
    // const jsonData = await data.json()
    // console.log(jsonData)
    // setRestaurantsState[]
    setRestaurants([
      {
        type: 'restaurant',
        data: {
          id: "guidfhgiudfh23479",
          name: 'Delicious Bites',
          tags: ['Italian', 'Pizza', 'Pasta'],
          review: 4.5,
          deliveryTime: '30-45 minutes',
          costForTwo: 25,
          address: '123 Main St',
          phoneNumber: '555-1234',
          website: 'http://www.deliciousbites.com',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg-dIZHqJhzA1yMBlLVo9zG-X5gQJS1j2Bo1U9Nl5Eg&s',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "hgyuguyguygugguyg67",
          name: 'Tasty Treats',
          tags: ['American', 'Burgers', 'Fries'],
          review: 4.2,
          deliveryTime: '20-35 minutes',
          costForTwo: 20,
          address: '456 Oak St',
          phoneNumber: '555-5678',
          website: 'http://www.tastytreats.com',
          image: 'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "dsfhdfh23h23h54",
          name: 'Spice Paradise',
          tags: ['Indian', 'Curry', 'Spicy'],
          review: 4.7,
          deliveryTime: '40-50 minutes',
          costForTwo: 30,
          address: '789 Spice Ave',
          phoneNumber: '555-9876',
          website: 'http://www.spiceparadise.com',
          image: 'https://www.allrecipes.com/thmb/cF4D_jCqxkPpjg08TdHXk1E-3nM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-indian-chicken-curry-murgh-kari-DDMFS-4x3-330302d59ca64543b3d7ead88c226f9a.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "kjghjghk3hjg43kj43",
          name: 'Sushi Delight',
          tags: ['Japanese', 'Sushi', 'Seafood'],
          review: 4.8,
          deliveryTime: '25-40 minutes',
          costForTwo: 35,
          address: '101 Sushi Blvd',
          phoneNumber: '555-5432',
          website: 'http://www.sushidelight.com',
          image: 'https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "oiupoiupoi324532",
          name: 'Mediterranean Grill',
          tags: ['Mediterranean', 'Grilled', 'Healthy'],
          review: 3.7,
          deliveryTime: '35-50 minutes',
          costForTwo: 28,
          address: '456 Olive St',
          phoneNumber: '555-8765',
          website: 'http://www.mediterraneangrill.com',
          image: 'https://www.restaurantmagazine.com/wp-content/uploads/2023/11/The-Great-Greek-Mediterranean-Grill-Accelerates-Expansion-With-the-Launch-of-Non-Traditional-Dining-Formats.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "nhgufguygg3y434",
          name: 'Thai Spice',
          tags: ['Thai', 'Spicy', 'Noodles'],
          review: 4.6,
          deliveryTime: '30-45 minutes',
          costForTwo: 22,
          address: '789 Pad Thai Ave',
          phoneNumber: '555-2345',
          website: 'http://www.thaispice.com',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/23/6e/d2/5c/thai-spice.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "jhgjkghkgjh676",
          name: 'Chinese Palace',
          tags: ['Chinese', 'Dumplings', 'Stir-fry'],
          review: 3.3,
          deliveryTime: '25-40 minutes',
          costForTwo: 24,
          address: '101 Fortune Rd',
          phoneNumber: '555-3456',
          website: 'http://www.chinesepalace.com',
          image: 'https://therecipecritic.com/wp-content/uploads/2023/02/soup_dumplings.jpg',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: "tyutyuyfytuyt123",
          name: 'Mexican Fiesta',
          tags: ['Mexican', 'Tacos', 'Burritos'],
          review: 4.7,
          deliveryTime: '20-35 minutes',
          costForTwo: 27,
          address: '456 Taco St',
          phoneNumber: '555-4321',
          website: 'http://www.mexicanfiesta.com',
          image: 'https://www.facts-about-mexico.com/wp-content/uploads/2022/01/shutterstock-lunamaria.jpg',
        },
      },
    ])
  }

  return restaurants.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.data.review > 4
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='restaurantsContainer'>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.data.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};
