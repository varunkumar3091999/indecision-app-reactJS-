import React from 'react'

const Header = (props) =>
	console.log(this.props)
		(
			<div className="header">
				<div className="container">
					<h1 className="header__title">{props.title}</h1>
					{props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
				</div>
			</div>
		)


Header.defaultProps = {
	title: 'IndecisionApp'
}


export default Header