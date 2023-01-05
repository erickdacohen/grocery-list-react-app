import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Content = () => {
	// set state for items array
	const [items, setItems] = useState([
		{ id: 0, itemName: 'milk', isChecked: false },
		{ id: 1, itemName: 'eggs', isChecked: false },
		{ id: 2, itemName: 'tofu', isChecked: true },
	])
	return (
		<main>
			<h2>Items</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.itemName}
						<input type='checkbox' checked={item.isChecked} />
						<label>{item.itemName}</label>
						<FaRegTrashAlt role='button' tabIndex='0' />
					</li>
				))}
			</ul>
		</main>
	)
}
export default Content
