import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState, useEffect, useRef } from 'react'

function App() {
	// API url
	const API_URL = 'http://localhost:3500/items'
	// set state for items array
	const [items, setItems] = useState([])
	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')
	const [fetchError, setFetchError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	// for react 18 strict mode change
	const apiFetchRan = useRef(false)

	useEffect(() => {
		// define async function to fetch items from db
		if (apiFetchRan.current === false) {
			const fetchItems = async () => {
				try {
					const response = await fetch(API_URL)
					if (!response.ok) throw new Error('Did not receive API data.')
					const listItems = await response.json()
					setItems(listItems)
					setFetchError(null)
				} catch (error) {
					setFetchError(error.message)
				} finally {
					setIsLoading(false)
				}
			}
			fetchItems()
		}

		return () => (apiFetchRan.current = true)
	}, [])

	// function to add item
	const addItem = (item) => {
		// get what the id number should be (last of the length or one)
		const id = items.length ? items[items.length - 1].id + 1 : 1
		// build new item object
		const myNewItem = { id: id, itemName: item, isChecked: false }
		// add to the array
		const listItems = [...items, myNewItem]
		// update state with the new array
		setItems(listItems)
	}

	// function to handle checked list item
	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, isChecked: !item.isChecked } : item
		)
		setItems(listItems)
	}

	// function to delete item from list
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id)
		setItems(listItems)
	}

	// function to handle submitting form to add new item
	const handleSubmit = (e) => {
		e.preventDefault()
		// check if blank value submitted
		if (!newItem) return
		// add item functionality
		addItem(newItem)
		// reset input to blank
		setNewItem('')
	}

	return (
		<div className='App'>
			<Header />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{isLoading && <p>Loading...</p>}
				{fetchError && (
					<h3 style={{ color: '#f00' }}>{`Error ${fetchError}`}</h3>
				)}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.itemName.toLowerCase().includes(search.toLowerCase())
						)}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</div>
	)
}

export default App
