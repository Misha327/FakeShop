import React from "react";
import styled from "styled-components";
import basketIcon from "../images/icons/tote.svg";

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>FakeStore</Logo>
				<Menu>
					<MenuItem>Men</MenuItem>
					<MenuItem>Women</MenuItem>
					<MenuItem>SALE</MenuItem>
					<MenuItem>Clearance</MenuItem>
				</Menu>
				<IconList>
					<Icon src={basketIcon} />
					<Icon />
				</IconList>
			</Wrapper>
		</Container>
	);
};

const IconList = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`;
const Icon = styled.img`
	width: 30px;
`;
const MenuItem = styled.li`
	list-style: none;
	padding: 20px 25px;
	border: none;
	:hover {
		background: rgba(0, 0, 0, 0.26);
	}
`;
const Menu = styled.ul`
	display: flex;
`;
const Logo = styled.h2`
	padding: 0 25px;
`;
const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1300px;
	display: flex;
	align-items: center;
`;
const Container = styled.div`
	width: 100%;
	background: white;
`;
export default Header;
