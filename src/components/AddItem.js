import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label className='sr-only' htmlFor='addItem'>
				Add item
			</label>
			<input
				autoFocus
				id='addItem'
				placeholder='Add item'
				required
				type='text'
				value={newItem} // this is what makes it a controlled input. Set by state
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button aria-label='Add item' type='submit'>
				<FaPlus />
			</button>
		</form>
	)
}
export default AddItem
