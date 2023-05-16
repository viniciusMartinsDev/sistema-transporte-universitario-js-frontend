import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'

export default function AppMenu({ navigation }) {
	return (
		<View style={styles.menu}>
			<Icon
				name="home"
				size={40}
				color='#E0E0E0'
			/>
			<Icon
				name="pluscircle"
				size={40}
				color='#E0E0E0'
			/>
			<Icon
				name="find"
				size={40}
				color='#E0E0E0'
			/>
			<Icon
				name="user"
				size={40}
				color='#E0E0E0'
			/>

		</View>
	)
}