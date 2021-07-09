import SelectSearch from 'react-select-search';
import SearchIcon from '../../img/searchIcon.png'


const FriendSearchBar = (props) => {

    const options = [
        { name: 'Jim', value: 'j' },
        { name: 'Esther', value: 'es' },
        { name: 'Nathan', value: 'na' },

        {
            type: 'group',
            name: 'Group name',
            items: [
                { name: 'Spanish', value: 'es' },
            ]
        },
    ];
    return (

        <div className="friendSearch-input-container">
            <img className="search-icon" src={SearchIcon} alt="SearchIcon"></img>
            <SelectSearch className="friendSearch" options={options} search placeholder="Search Friend" />
        </div>



    )
}




export default FriendSearchBar;