import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
	return (
		<form>
			<label className='sr-only' htmlFor='addItem'>
				Add item
			</label>
			<input
				autoFocus
				id='addItem'
				placeholder='Add item'
				required
				type='text'
			/>
			<button aria-label='Add item' type='submit'>
				<FaPlus />
			</button>
		</form>
	)
}
export default AddItem
