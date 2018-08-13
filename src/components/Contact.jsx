import React, {Component} from 'react'
import Box from 'components/Box'
import SectionHeader from 'components/SectionHeader'

class Contact extends Component {
	render() {
		return (
			<Box column {...this.props}>
				<SectionHeader>Contact</SectionHeader>
				<Box column gap="0.5rem" {...this.props}>
					<span>535 032 025</span>
					<span>arkadiusz.zalewsky@gmail.com</span>
					<span>linkedin.com/in/zalewsky</span>
					<span>github.com/cyberpluto</span>
				</Box>
			</Box>
		)
	}
}

export default Contact
