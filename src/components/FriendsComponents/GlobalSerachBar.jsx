import SelectSearch from 'react-select-search';


const GlobalSearchBar = (props) => {

    const options = [
        { name: 'Swedish', value: 'sv' },
        { name: 'English', value: 'en' },
        {
            type: 'group',
            name: 'Group name',
            items: [
                { name: 'Spanish', value: 'es' },
            ]
        },
    ];
    return (

        // <SelectSearch className="catchUpSearch"
        //     //input search data into options//link it
        //     // options={countries}
        //     search
        //     // filterOptions={fuzzySearch}
        //     placeholder="Search CatchUp" />
        <SelectSearch className="catchUpSearch" options={options} search placeholder="Choose your language" />




    )
}

{/* <SelectSearch className="catchUpSearch"
                    //input search data into options//link it
                    // options={countries}
                    search
                    // filterOptions={fuzzySearch}
                    placeholder="Search CatchUp"
                /> */}


export default GlobalSearchBar




