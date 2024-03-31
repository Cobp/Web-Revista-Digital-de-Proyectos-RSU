import './searchModule.css'

const Search = ({ icon, searchTerm, handleSearch }) => {
    return (
        <div class="group">
            <input 
                class="input"
                type="text"
                placeholder={icon.placeholder}
                value={searchTerm} 
                onChange={handleSearch} />
            {icon.svg}
        </div>
    )
}

export default Search
