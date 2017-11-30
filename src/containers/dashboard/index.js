import React, { Component } from 'react';
import { Text, View, StyleSheet , ScrollView } from 'react-native';
import Profile from './profile';
import Rating from './rating';
import Experice from './experience'

export class DashBoard extends Component {
	render() {
		return (
			<ScrollView>
			<View
				style={{
					flex: 1,
					backgroundColor: '#FFFFFF',
					margin: 15
				}}
			>
				<View>
					<Text
						style={{
							fontSize: 24,
							fontWeight: '700',
							color: 'black',
							textAlign: 'center',
							paddingVertical: 10
						}}
					>
						{' '}
						Employee Dashboard{' '}
					</Text>
				</View>

				<Profile />
				<Rating />

				<View
					style={{
						marginHorizontal: 10,
						flexDirection: 'row',
						paddingVertical : 20
					}}
				>
					<View style={styles.box}>
						<Text style={styles.boxText}>Companies</Text>
						<Text style={styles.boxText}>25</Text>
					</View>

					<View style={styles.box}>
						<Text style={styles.boxText}>Notifications</Text>
						<Text style={styles.boxText}>25</Text>
					</View>
				</View>

				<Experice />
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	emplabel: {
		color: 'black',
		fontSize: 20,
		fontWeight: '500',
		paddingBottom: 1
	},
	empname: {
		color: 'black',
		fontSize: 14,
		fontWeight: '300',
		paddingTop: 1
	},
	profileWrapper: {
		flexDirection: 'row',
		marginHorizontal: 15
	},
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 5,
		paddingVertical : 20,
		backgroundColor: 'red',
		backgroundColor: '#46515C'
	},
	boxText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '500'
	}
});

export default DashBoard;
