import React, {Component} from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import SectionHeader from 'components/SectionHeader'

const List = styled.ul`
	text-align: left;
`
const Skill = styled.li`
	margin-bottom: 0.5rem;
`

class Skills extends Component {
	render() {
		return (
			<Box column left>
				<SectionHeader>Skills</SectionHeader>
				<List>
					<Skill>JavaScript</Skill>
					<Skill>React.js</Skill>
					<Skill>Redux</Skill>
					<Skill>GraphQL</Skill>
					<Skill>node.js</Skill>
					<Skill>Webpack</Skill>
					<Skill>Git</Skill>
				</List>
			</Box>
		)
	}
}

export default Skills
