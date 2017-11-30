import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Metrics } from '../../constants';

export class Rating extends Component {
	render() {
		return (
			<View
				style={{
					alignSelf: 'center',
					width: Metrics.FULL_WIDTH * 0.5,
					backgroundColor: '#F9F9FB'
				}}
			>
				<View
					style={{
                        flexDirection: 'row',
                        paddingVertical : 10,
                        paddingHorizontal : 10
					}}
				>
					<Text style={{
                        fontSize : 28,
                        paddingRight : 10
                    }}>4.5</Text>
					<View>
						<Text>Out of</Text>
						<Text>5 Stars</Text>
					</View>
				</View>

				<View>
					<View />
					<View />
				</View>
			</View>
		);
	}
}

export default Rating;
