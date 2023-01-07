const Footer = ({ items }) => {
	return (
		<footer>
			<h2>Items: {items}</h2>
		</footer>
	)
}

Footer.defaultProps = {
	items: 0,
}
export default Footer
