import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
function App() {
	return (
		<>
			<PageWrapper>
				<Header></Header>
				<SaleBox></SaleBox>
				<ContentContainer>
					<ContentWrapper></ContentWrapper>
				</ContentContainer>
			</PageWrapper>
		</>
	);
}

const SaleBox = styled.div`
	background: blue;
	height: 720px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	background: green;
	height: 600px;
	width: 100%;
	max-width: 1300px;
`;

const ContentContainer = styled.div`
	display: flex;
	width: 100%;

	justify-content: center;
`;

const PageWrapper = styled.div`
	height: 100%;
	width: 100%;
	background: pink;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default App;
