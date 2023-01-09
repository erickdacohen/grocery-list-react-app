import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef()

	return (
		<form className='add-item-form' onSubmit={handleSubmit}>
			<label className='sr-only' htmlFor='addItem'>
				Add item
			</label>
			<input
				autoFocus
				ref={inputRef}
				id='addItem'
				placeholder='Add item'
				required
				type='text'
				value={newItem} // this is what makes it a controlled input. Set by state
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button
				aria-label='Add item'
				onClick={() => inputRef.current.focus()}
				type='submit'
			>
				<FaPlus />
			</button>
		</form>
	)
}
export default AddItem
