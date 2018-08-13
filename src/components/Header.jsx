import React, {Component} from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import Photo from 'components/Photo'

const Circle = styled(Box)`
	border: 2px solid #000;
	border-radius: 50%;
	width: 10rem;
	height: 10rem;
	font-size: 3rem;
`
const Name = styled.div`
	font-size: 2rem;
	text-transform: uppercase;
`
const Profession = styled.div``

class Header extends Component {
	render() {
		return (
			<Box column gap="1rem">
				<Photo />
				<Name>Test Test</Name>
				<Profession>Frontend Developer</Profession>
			</Box>
		)
	}
}

export default Header
