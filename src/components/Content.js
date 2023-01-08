import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<main>
			<h2>Items</h2>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<h3 className='empty-message'>Nothing to see here.</h3>
			)}
		</main>
	)
}
export default Content
