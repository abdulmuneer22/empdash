import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Profile extends Component {
	render() {
		return (
			<View style={styles.profileWrapper}>
				<View
					style={{
						width: 100,
						height: 100,
						borderRadius: 100 / 2,
						backgroundColor: '#FD905D'
					}}
				/>

				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						paddingLeft: 20
					}}
				>
					<Text style={styles.emplabel}>Emplyee Name</Text>
					<Text style={styles.empname}>Ikea Logistics</Text>
				</View>
			</View>
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
	}
});

export default Profile;
