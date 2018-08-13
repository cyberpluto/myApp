import React, {Component} from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import SectionHeader from 'components/SectionHeader'

const Text = styled.p`
	text-align: right;
	line-height: 1.2;
`

class Profile extends Component {
	render() {
		return (
			<Box column right>
				<SectionHeader>About me</SectionHeader>
				<Text>
					I'm a frontend developer working with React, Redux, webpack and
					related technologies. I build responsive web apps and participate in
					designing UX and UI.
				</Text>
			</Box>
		)
	}
}

export default Profile
