import React, {Component} from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import photo from 'assets/jobs.jpg'

const PhotoWrapper = styled.div`
	background: #ebebeb;
	background: url('${photo}');
	background-size: cover;
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
`

class Photo extends Component {
	render() {
		return (
			<Box>
				<PhotoWrapper />
			</Box>
		)
	}
}

export default Photo
