import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App() {
	// set state for items array
	const [items, setItems] = useState([
		{ id: 0, itemName: 'milk', isChecked: false },
		{ id: 1, itemName: 'eggs', isChecked: false },
		{ id: 2, itemName: 'tofu', isChecked: true },
		{ id: 3, itemName: 'turkey', isChecked: false },
		{ id: 4, itemName: 'oats', isChecked: true },
	])

	// function to handle checked list item
	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, isChecked: !item.isChecked } : item
		)
		setItems(listItems)
		// save items to local storage for now
		localStorage.setItem('groceryList', JSON.stringify(listItems))
	}

	// function to delete item from list
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id)
		setItems(listItems)
		// save items to local storage for now
		localStorage.setItem('groceryList', JSON.stringify(listItems))
	}

	return (
		<div className='App'>
			<Header />
			<Content
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
