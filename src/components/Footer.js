const Footer = ({ length }) => {
	return (
		<footer>
			{length > 0 ? <h3>List items: {length}</h3> : <h3>Empty list</h3>}
		</footer>
	)
}

Footer.defaultProps = {
	items: 0,
}
export default Footer
