import React, {Component} from 'react'
import Button from 'components/Button'
import styled, {keyframes} from 'styled-components'
import Icon from 'components/Icon'
import {heartRateSensor} from './heartRateSensor'

const pulse = keyframes`
  0% {
    fill: rgba(0,0,0,.3);
  }
  33% {
    fill: #ff4c4c;
	}
	66% {
    fill: #ff4c4c;
	}
	100% {
    fill: rgba(0,0,0,.3);
  }
`

const HeartIcon = styled(Icon)`
	fill: rgba(0, 0, 0, 0.3);
	width: 3rem;
	height: 3rem;
	transition: 0.1s;
	${p =>
		p.heartRate && `animation: ${pulse}  ${60 / p.heartRate}s linear infinite`};
`
const HR = styled.div`
	position: absolute;
	font-size: 1.1rem;
`

class HRButton extends Component {
	state = {
		heartRate: null,
	}
	connect = () => {
		heartRateSensor
			.connect()
			.then(() =>
				heartRateSensor
					.startNotificationsHeartRateMeasurement()
					.then(this.handleHeartRateMeasurement)
			)
	}

	handleHeartRateMeasurement = heartRateMeasurement => {
		heartRateMeasurement.addEventListener(
			'characteristicvaluechanged',
			event => {
				var heartRateMeasurement = heartRateSensor.parseHeartRate(
					event.target.value
				)
				console.log('HR', heartRateMeasurement.heartRate)
				this.setState({heartRate: heartRateMeasurement.heartRate})
			}
		)
	}

	render() {
		const {heartRate} = this.state
		return (
			<Button onClick={this.connect}>
				<HeartIcon glyph="heart" heartRate={heartRate} />
				<HR>{heartRate}</HR>
			</Button>
		)
	}
}

export default HRButton
