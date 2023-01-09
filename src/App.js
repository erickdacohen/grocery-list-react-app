import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App() {
	// set state for items array
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem('groceryList'))
	)

	const [newItem, setNewItem] = useState('')

	const [search, setSearch] = useState('')

	const setAndSaveItems = (newItems) => {
		setItems(newItems)
		// save items to local storage for now
		localStorage.setItem('groceryList', JSON.stringify(newItems))
	}

	// function to add item
	const addItem = (item) => {
		// get what the id number should be (last of the length or one)
		const id = items.length ? items[items.length - 1].id + 1 : 1
		// build new item object
		const myNewItem = { id: id, itemName: item, isChecked: false }
		// add to the array
		const listItems = [...items, myNewItem]
		// update state with the new array
		setAndSaveItems(listItems)
	}

	// function to handle checked list item
	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, isChecked: !item.isChecked } : item
		)
		setAndSaveItems(listItems)
	}

	// function to delete item from list
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id)
		setAndSaveItems(listItems)
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
			<Content
				items={items.filter((item) =>
					item.itemName.toLowerCase().includes(search.toLowerCase())
				)}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
