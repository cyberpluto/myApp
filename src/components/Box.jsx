import PropTypes from 'prop-types'
import styled from 'styled-components'

const START = 'flex-start'
const END = 'flex-end'
const MID = 'center'
const topBot = p => (p.top ? START : p.bottom ? END : MID)
const leftRight = p => (p.left ? START : p.right ? END : MID)

const Box = styled.div`
	display: flex;
	${p => p.padding && `padding: ${p.padding}`};
	${p => p.order && `order: ${p.order}`};
	${p => p.margin && `margin: ${p.margin}`};
	${p => (p.width ? `width: ${p.width}` : !p.fitChildren && 'width: 100%')};
	${p => p.height && `height: ${p.height}`};
	${p => !p.fitChildren && `width: ${p.width || '100%'}`};
	${p => p.relative && 'position: relative'};
	${p => p.wrap && 'flex-wrap: wrap'};
	${p => p.column && 'flex-direction: column'};
	${p => p.minWidth && `min-width: ${p.minWidth}`};
	${p => p.maxWidth && `max-width: ${p.maxWidth}`};
	${p => p.minHeight && `min-height: ${p.minHeight}`};
	${p => p.maxHeight && `max-height: ${p.maxHeight}`};
	${p => p.flex && `flex: ${p.flex}`};
	justify-content: ${p =>
		p.spaceBetween
			? 'space-between'
			: p.spaceAround
				? 'space-around'
				: p.spaceEvenly ? 'space-evenly' : p.column ? topBot(p) : leftRight(p)};
	align-items: ${p =>
		p.stretch ? 'stretch' : p.column ? leftRight(p) : topBot(p)};
	& > *:not(:first-child) {
		${p =>
			p.gap &&
			`margin-${p.column ? 'top' : 'left'}: ${
				p.gap === true ? p.theme.gap : p.gap
			};`};
	}
`
Box.propTypes = {
	bottom: PropTypes.bool,
	column: PropTypes.bool,
	flex: PropTypes.string,
	gap: PropTypes.string,
	height: PropTypes.string,
	left: PropTypes.bool,
	margin: PropTypes.string,
	maxHeight: PropTypes.string,
	maxWidth: PropTypes.string,
	minHeight: PropTypes.string,
	minWidth: PropTypes.string,
	padding: PropTypes.string,
	relative: PropTypes.bool,
	right: PropTypes.bool,
	spaceAround: PropTypes.bool,
	spaceBetween: PropTypes.bool,
	spaceEvenly: PropTypes.bool,
	stretch: PropTypes.bool,
	top: PropTypes.bool,
	width: PropTypes.string,
	wrap: PropTypes.bool,
}

export default Box
