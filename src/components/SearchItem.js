const SearchItem = ({ search, setSearch }) => {
	return (
		<form className='search-form' onSubmit={(e) => e.preventDefault()}>
			<label className='sr-only' htmlFor='search'>
				Search
			</label>
			<input
				id='search'
				role='searchbox'
				placeholder='Search items'
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	)
}
export default SearchItem
