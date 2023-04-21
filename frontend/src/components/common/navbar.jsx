import React, { useEffect } from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
	}

	.navbar-primary {
		height: 60px;
		display: flex;
		justify-content: left;
		align-items: left;
		background-color: #49030b;
	}

	.navbar-primary .navbar-brand {
		display: flex;
		align-items: center;
	}

	.navbar-logo {
		height: 40px;
		margin-left: 20px;
	}

	.search-box {
		display: flex;
		position: fixed;
		right: 2%;
		top: 10px;
		width: 20%;
		height: 40px;
		align-items: center;
		background-color: #fff;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.search-box input[type="text"] {
		flex: 1;
		border: none;
		outline: none;
		font-size: 100%;
		padding: 5px;
	}

	.search-box button {
		background-color: #49030b;
		color: #fff;
		border: none;
		outline: none;
		font-size: 15px;
		padding: 5px 10px;
		border-radius: 5px;
		margin-left: 10px;
		cursor: pointer;
	}

	.navbar-secondary {
		font-family: "Gotham", sans-serif;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
	}

	.navbar-links {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navbar-links a {
		text-decoration: none;
		color: #49030b;
		font-size: 16px;
		font-weight: bold;
		margin-right: 80px;
	}

	.navbar-links a:last-child {
		margin-right: 0;
	}

	@media only screen and (max-width: 767px) {
		.navbar-primary {
			height: 50px;
		}

		.navbar-primary .navbar-logo {
			height: 30px;
		}

		.search-box {
			flex-direction: column;
			align-items: stretch;
		}

		.search-box input[type="text"] {
			font-size: 100%;
			margin-bottom: 10px;
		}

		.search-box button {
			display: none;
		}

		.navbar-secondary {
			// height: auto;
			// padding: 10px 0;
			display: none;
		}

		.navbar-links {
			flex-direction: column;
			justify-content: space-between;
			height: calc(100vh - 70px);
		}

		.navbar-links a {
			margin: 0;
			padding: 10px 20px;
			border-top: 1px solid #49030b;
		}

		.navbar-links a:last-child {
			border-bottom: 1px solid #49030b;
		}
	}
`;

const NavBar = () => {
	useEffect(() => {
		document.title = "Research Publications | FOT-SJP";
	}, []);

	return (
		<React.Fragment>
			<StyledNavBar>
				<header>
					<nav className="navbar-primary">
						<div className="navbar-brand">
							<a href="/">
								<img
									src="/logo.png"
									alt="Logo"
									className="navbar-logo"
								/>
							</a>
						</div>
						<div className="search-box">
							<input type="text" placeholder="Search" />
							<button>Search</button>
						</div>
					</nav>
					<nav className="navbar-secondary">
						<div className="navbar-links">
							<a href="/">HOME</a>
							<a href="/">DEPARTMENTS</a>
							<a href="/">PUBLICATIONS</a>
							<a href="/">ABOUT US</a>
							<a href="/">AWARDS</a>
							<a href="/">SYMPOSIA</a>
						</div>
					</nav>
				</header>
			</StyledNavBar>
		</React.Fragment>
	);
};

export default NavBar;
