import SelectSearch from 'react-select-search';
import SearchIcon from '../../img/searchIcon.png'
import fuzzySearch from '../../util/fuzzySearch';
import "../../stylesheet/globalSearch.css";
import { useState, useEffect } from "react";




const FriendSearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(value) {
        setSearchValue(value)
    }

    const { localFriendsList, searched } = props;

    useEffect(() => {
        searched(searchValue);
        console.log("FRIENDS SEARCH USE EFFECT")
    }, [searchValue])

    const friendsObject = localFriendsList && localFriendsList.map(friend => {
        return {
            name: friend,
            value: friend
        }
    })
    console.log("friendsList from searchbar", friendsObject);

    return (

        <div className="friendSearch-input-container">
            <img className="search-icon" src={SearchIcon} alt="SearchIcon"></img>
            <SelectSearch options={friendsObject} onChange={handleChange} filterOptions={fuzzySearch} search placeholder="Search Friends" />
        </div>



    )
}




export default FriendSearchBar;