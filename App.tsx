import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  	return (
		<View style={styles.container}>
			<Text style={[styles.button, styles.blue]}>iangaunt.dev</Text>
			<Text style={[styles.button, styles.darkBlue]}>iangaunt.dev</Text>
		</View>
  	);
}

let colBlue = "rgb(52, 140, 235)";
let colDarkBlue = "rgb(32, 120, 215)";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	blue: {
		backgroundColor: colBlue,
	},
	darkBlue: {
		backgroundColor: colDarkBlue,
	},
	button: {
		alignContent: "center",
		borderRadius: 10,
		color: "white",
		fontSize: 30,
		margin: 5,
		overflow: "hidden",
		padding: 10,
		textAlign: "center",
		width: "50%"
	}
})