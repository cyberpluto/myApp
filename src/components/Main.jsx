import React, {Component} from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import Skills from 'components/Skills'
import Profile from 'components/Profile'
import Experience from 'components/Experience'
import Education from 'components/Education'
import Photo from 'components/Photo'
import Header from 'components/Header'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
	background: #ebebeb;
`
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`
const Paper = styled.div`
	max-width: 960px;
	padding: 2rem;
	background: #fff;
	box-shadow: 0px 4px 15px 10px rgba(0, 0, 0, 0.05);
`

export default class Main extends Component {
	render() {
		return (
			<Wrapper>
				<ButtonWrapper>
					<Paper>
						<Box column gap="2rem">
							<Header />
							<Box top gap="2rem">
								<Box column gap="2rem">
									<Profile />
									<Experience right />
									<Education right />
								</Box>
								<Box column gap="2rem">
									<Contact left />
									<Skills />
								</Box>
							</Box>
							<Footer />
						</Box>
					</Paper>
				</ButtonWrapper>
			</Wrapper>
		)
	}
}
