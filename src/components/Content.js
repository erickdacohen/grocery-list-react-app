import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Content = () => {
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
		<main>
			<h2>Items</h2>
			{items.length ? (
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							<input
								checked={item.isChecked}
								onChange={() => handleCheck(item.id)}
								type='checkbox'
							/>
							{/* {item.itemName} */}
							<label
								onDoubleClick={() => handleCheck(item.id)}
								style={
									item.isChecked ? { textDecoration: 'line-through' } : null
								}
							>
								{item.itemName}
							</label>
							<FaRegTrashAlt
								role='button'
								tabIndex='0'
								onClick={() => handleDelete(item.id)}
							/>
						</li>
					))}
				</ul>
			) : (
				<h3 className='empty-message'>Nothing to see here.</h3>
			)}
		</main>
	)
}
export default Content
