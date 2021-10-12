import { useState, useEffect } from "react";

const Search = ({ tab, data, setData }) => {
    const [games, setGames] = useState()

    useEffect(() => {
        let temp = []

        if (data) {
            data.map((item) => {
                if (tab === 'ALL') {
                    temp.push(item)
                }
                if (tab === 'NEW') {
                    if (item.new) {
                        temp.push(item)
                    }
                }
                if (tab === 'TOP') {
                    if (item.favorite) {
                        temp.push(item)
                    }
                }
            })
        }

        setGames(temp)
    }, [tab, data])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();

        var result = games.filter(game => {
            let name = game.name.toLowerCase()
            return name.includes(query) ? game : null
        });

        if (result.length > 0 || query !== "") {
            setData(result);
        } else {
            setData(data)
        }
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" className="form-control" name="search" onChange={handleSearch} />
            <div className="search-icon"><i className="fas fa-search"></i></div>
        </form>
    )
}
export default Search