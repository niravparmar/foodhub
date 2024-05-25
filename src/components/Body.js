import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import apiData from "../utils/mockData";
import { API_URL } from "../utils/constants";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super Powerful Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const [filterBtn, setFilterBtn] = useState(0);
  const [loading, setLoading] = useState(0);

  //   let loading = 0
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(1);
    // loading = 1;

    const latestRestaurant = await fetch(API_URL);
    const jsonData = await latestRestaurant.json();
    // console.log(
    //   "JSON data :",
    //   jsonData.data.cards[1].card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    // console.log(
    //   "JSON data :",
    //   jsonData.data.cards[2].card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    // console.log("JSON data :", jsonData.data.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[6].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[7].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[8].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[9].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("JSON data :", jsonData.data.cards[10].card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setLoading(0);
    // loading = 0;
  };

  //   Filter Function for Search
  const filterFunction = () => {
    const filterData = listOfRestaurant.filter((data) => {
      return data.info.name.toLowerCase().includes(searchBar.toLowerCase());
    });
    setFilteredRestaurant(filterData);
  };

  const internetStatus = useOnlineStatus()

  if(!internetStatus){
    return <div>Looks Like your Internet is not working</div>
  }

  return loading == 1 || filteredRestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchBar}
            onChange={(e) => {
              // console.log("Key Press",e.target.value);
              setSearchBar(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              filterFunction();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={async () => {
            if (filterBtn == 0) {
              setFilteredRestaurant(
                listOfRestaurant.filter((cur_val) => {
                  return cur_val.info.avgRating >= 4.3;
                })
              );
              setFilterBtn(1);
            } else {
              setLoading(1);
              //   loading = 1;

              await fetchData();
              setFilterBtn(0);
              setLoading(0);
              //   loading = 0;
            }
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant, index) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
