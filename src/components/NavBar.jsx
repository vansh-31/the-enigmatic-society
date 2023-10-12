import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="custom-navbar">
			<div
				className="custom-navbar-container custom-flex custom-justify-between custom-items-center"
			>
				<div className="custom-navbar-left custom-justify-center">
					<NavLink className="custom-nav-link" to="/">Shop</NavLink>
					<NavLink className="custom-nav-link" to="/">Offer</NavLink>
					<NavLink className="custom-nav-link" to="/">Our Story</NavLink>
					<NavLink className="custom-nav-link" to="/">Blog</NavLink>
				</div>
				<div className="custom-navbar-right custom-flex custom-items-center">
					<input className="custom-search-input" placeholder="Search" type="text" />
					<NavLink className="custom-nav-link custom-sign-in-button" to="/">Sign In</NavLink>
				</div>
			</div>
		</nav>
  )
}

export default NavBar
