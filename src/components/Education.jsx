import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from 'components/Box'
import SectionHeader from 'components/SectionHeader'

const experience = [
	{
		period: '2008-2013',
		company: 'Military University of Technology',
		responsibilities: [`Master of Engeneering, Civil engeneering`],
	},
]

const Ul = styled.ul`
	text-align: right;
	li {
		margin-bottom: 0.5rem;
	}
`

const Item = ({experience: {period, company, responsibilities}, ...rest}) => {
	return (
		<li>
			<Box top>
				<Box column right gap="0.5rem" {...rest}>
					<Box gap="1rem" {...rest}>
						<span>{period}</span>
						<span>{company}</span>
					</Box>
					<Ul>
						{responsibilities.map((responsibility, i) => {
							return <li key={i}>{responsibility}</li>
						})}
					</Ul>
				</Box>
			</Box>
		</li>
	)
}
Item.propTypes = {
	experience: PropTypes.shape({
		period: PropTypes.string,
		company: PropTypes.string,
		responsibilities: PropTypes.array,
	}),
}

class Experience extends Component {
	render() {
		return (
			<Box column {...this.props}>
				<SectionHeader>Education</SectionHeader>
				<Ul>
					{experience.map((exp, i) => {
						return <Item key={i} experience={exp} right />
					})}
				</Ul>
			</Box>
		)
	}
}

export default Experience
