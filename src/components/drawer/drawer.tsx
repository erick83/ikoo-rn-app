import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationOptions } from '@react-navigation/drawer'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import Home from '../../screens/home/home'
import CreditP2P from '../../screens/credit-p2p/credit-p2p'
import styles from './styles'
import colors from '../../global-styles/colors'
import DebitP2P from '../../screens/debit-p2p/debit-p2p'
import DebitP2pConfirm from '../../screens/debit-p2p-confirm/debit-p2p-confirm'

const Drawer = createDrawerNavigator();

const IkooDrawer: React.FC = () => {
  const HeaderRight = () => {
		return (
			<Icon
				name="notifications-none"
				type="material-comunity"
				color={colors.white}
        style={{ marginRight: 8 }}
			/>
		)
	}

	const headerStyles: DrawerNavigationOptions = {
		headerShown: true,
		headerStyle: {
			backgroundColor: colors.darkblue,
		},
		headerTintColor: colors.white,
		headerRight: HeaderRight,
		title: '',
	}

  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          ...headerStyles
        }}
      />
      <Drawer.Screen
        name="CreditP2P"
        component={CreditP2P}
        options={{
          ...headerStyles
        }}
      />
      <Drawer.Screen
        name="DebitP2P"
        component={DebitP2P}
        options={{
          ...headerStyles
        }}
      />
      <Drawer.Screen 
        name="DebitP2pConfirm"
        component={DebitP2pConfirm}
        options={{
          ...headerStyles
        }}
      />
    </Drawer.Navigator>
  );
}

const Menu = (props: DrawerContentComponentProps) => {
  const { navigation } = props
  return (
    <View style={styles.menuContainer}>
      <Button
        title="Inicio"
        raised
        containerStyle={styles.buttonsContainer}
        buttonStyle={styles.buttonHome}
        onPress={() => navigation.navigate('Home')}
        icon={
          <Icon
          name="home"
          type="font-awesome-5"
          size={18}
          color="white"
          style={styles.buttonIcon}
          />
        }
        />
      <Text style={styles.menuTitle}>Agregar Saldo</Text>
      <Button
        title="P2P"
        raised
        containerStyle={styles.buttonsContainer}
        buttonStyle={styles.buttonAdd}
        onPress={() => navigation.navigate('CreditP2P')}
        icon={
          <Icon
          name="people-arrows"
          type="font-awesome-5"
          size={18}
          color="white"
          style={styles.buttonIcon}
          />
        }
        />
      {/* <Button
        title="ZELLE"
        raised
        containerStyle={styles.buttonsContainer}
        buttonStyle={styles.buttonAdd}
        /> */}


      <Text style={styles.menuTitle}>Realizar Pagos</Text>
      <Button
        title="P2P"
        raised
        containerStyle={styles.buttonsContainer}
        buttonStyle={styles.buttonMinus}
        onPress={() => navigation.navigate('DebitP2P')}
        icon={
          <Icon
          name="people-arrows"
          type="font-awesome-5"
          size={18}
          color="white"
          style={styles.buttonIcon}
          />
        }
        />
      {/* <Button
        title="ZELLE"
        raised
        containerStyle={styles.buttonsContainer}
        buttonStyle={styles.buttonMinus}
        /> */}
    </View>
  )
}

export default IkooDrawer
