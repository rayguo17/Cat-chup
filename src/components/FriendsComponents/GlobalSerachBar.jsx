import SelectSearch from 'react-select-search';
import SearchIcon from '../../img/searchIcon.png'
import "../../stylesheet/globalSearch.css"
import fuzzySearch from '../../util/fuzzySearch';


const GlobalSearchBar = () => {
    // console.log("globalSearch", props)
    const options = [
        { photo: "https://randomuser.me/api/portraits/women/71.jpg", name: 'Jim', value: 'j' },
        { photo: "https://randomuser.me/api/portraits/women/71.jpg", name: 'Esther', value: 'es' },
        { photo: "https://randomuser.me/api/portraits/women/71.jpg", name: 'Nathan', value: 'na' },

    ];
    return (
        <div className="globalSearch-input-container">
            <img className="global-search-icon" src={SearchIcon} alt="SearchIcon" />
            <SelectSearch options={options} filterOptions={fuzzySearch} search placeholder="Search CatchUp"
                renderOption={(props, value) => {
                    console.log('render option', value, props)
                    return (<a style={{ textDecoration: "none" }} href={"/" + value.name}><div style={{ display: 'flex', fontSize: '20px', color: 'black', padding: '8px' }}>
                        <img style={{ height: '50px', borderRadius: '30px' }} src={value.photo} alt="this is photo" />
                        {/* add a tag */}
                        <p style={{ marginLeft: '20px' }}>{value.name}</p>
                    </div></a>)
                }} />
        </div>
    )
}

export default GlobalSearchBar




