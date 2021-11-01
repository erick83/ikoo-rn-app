import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../../screens/login/login'
import { RootState } from '../../model/reducers.interfaces'
import IkooDrawer from '../drawer/drawer'

const Stack = createNativeStackNavigator();

const Navigaror: React.FC = () => {
	const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated)

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isAuthenticated ? (
					<>
						<Stack.Screen 
							name="Drawer"
							component={IkooDrawer}
							options={{
								headerShown: false,
							}}
						/>
					</>
				) : (
					<>
						<Stack.Screen 
							name="Login"
							component={Login}
							options={{
								title: 'Inicio de sesión',
								headerShown: false,
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default Navigaror
