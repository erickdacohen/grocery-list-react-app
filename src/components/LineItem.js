import { FaRegTrashAlt } from 'react-icons/fa'
const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li key={item.id}>
			<input
				checked={item.isChecked}
				onChange={() => handleCheck(item.id)}
				type='checkbox'
			/>
			<label
				onDoubleClick={() => handleCheck(item.id)}
				style={item.isChecked ? { textDecoration: 'line-through' } : null}
			>
				{item.itemName}
			</label>
			<FaRegTrashAlt
				role='button'
				tabIndex='0'
				onClick={() => handleDelete(item.id)}
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	)
}
export default LineItem
