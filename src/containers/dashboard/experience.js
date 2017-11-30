import React, { Component } from 'react';
import { Text, View } from 'react-native';

const ExpereicneData = [
	{
		title: 'Experience',
		array: [
			{
				title: 'Ikea Logistics',
				sub: 'Lorem Ipsum Ikea Logistics',
				desc:
					'Nulla vel pretium nisi. Duis sed nunc sed elit ornare hendrerit. Nam nec purus mi. Fusce eget sem enim. Etiam vulputate elit eu laoreet pharetra. Nulla magna risus, vulputate at condimentum quis, aliquet id justo. Nunc imperdiet vestibulum elementum. Nam vitae dui ullamcorper turpis porttitor elementum et quis erat. Maecenas non condimentum urna, non posuere metus. Donec ac velit blandit tellus ultrices porta'
			},
			{
				title: 'Ikea Logistics',
				sub: 'Lorem Ipsum Ikea Logistics',
				desc:
					'Nulla vel pretium nisi. Duis sed nunc sed elit ornare hendrerit. Nam nec purus mi. Fusce eget sem enim. Etiam vulputate elit eu laoreet pharetra. Nulla magna risus, vulputate at condimentum quis'
			}
		]
	},
	{
		title: 'Education',
		array: [
			{
				title: 'Phd In management',
				sub: 'Lorem Ipsum Ikea Logistics',
				desc:
					'Nulla vel pretium nisi. Duis sed nunc sed elit ornare hendrerit. Nam nec purus mi. Fusce eget sem enim.'
			},
			{
				title: 'Phd In management',
				sub: 'Lorem Ipsum Ikea Logistics',
				desc:
					'Nulla vel pretium nisi. Duis sed nunc sed elit ornare hendrerit. Nam nec purus mi. Fusce eget sem enim.'
			}
		]
	}
];

export class Experience extends Component {
	render() {
		return (
			<View>
				{
                    ExpereicneData.map((itm,ind)=>{
                        return(
                            <View key={ind}>
                                <View style={{
                                    borderBottomWidth : 1,
                                    borderBottomColor : 'rgba(1,1,1,0.2)',
                                    marginVertical : 10
                                }}>
                                <Text style={{
                                    color : 'black',
                                    fontSize : 26
                                }}>{itm.title}</Text>
                                </View>
                                <View style={{
                                    paddingLeft : 30
                                }}>
                                {
                                    itm.array.map((i,j)=>{
                                        return(
                                            <View key={j}>
                                                <Text style={{
                                                    color : 'black',
                                                    fontSize : 18,
                                                    fontWeight : '500'
                                                }}>{i.title}</Text>
                                                <Text style={{
                                                    color : 'rgba(1,1,1,0.7)',
                                                    fontWeight : '400',
                                                    fontSize : 16,
                                                    paddingVertical : 2
                                                }}>{i.sub}</Text>
                                                <Text style={{
                                                    color : 'rgba(1,1,1,0.6)',
                                                    paddingVertical : 5
                                                }}>{i.desc}</Text>
                                            </View>
                                        );
                                    })
                                }
                                </View>
                            </View>
                        );
                    })
                }
			</View>
		);
	}
}

export default Experience;
