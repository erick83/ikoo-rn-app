import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Image, TextInput, Text, ActivityIndicator } from 'react-native'
import { Divider, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { loginRequest } from '../../redux/auth/actions'
import { StackNavigator } from '../../model/navigator.interfaces'
import { RootState } from '../../model/reducers.interfaces'
import styles from './styles'
import { IAuthStore } from '../../model/auth.interfaces'
import { loaderStart } from '../../redux/loader/actions'
import colors from '../../global-styles/colors'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const auth = useSelector<RootState, IAuthStore>(state => state.auth)
  const loader = useSelector<RootState, boolean>(state => state.loader.active)
  const navigator = useNavigation<StackNavigator>()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const loginHandler = () => {
    dispatch(loaderStart())
    dispatch(loginRequest({
      email: user,
      password: pass,
    }))
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigator.push('Home')
    }
  })

  return (
    <View style={styles.loginContainer}>
      <Image source={require('../../assets/ikoo-banner.png')} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Usuario"
          value={user}
          autoCompleteType="email"
          textContentType="emailAddress"
          onChangeText={setUser}
        />
        <Divider />
        <TextInput
          style={styles.inputText}
          placeholder="Contraseña"
          value={pass}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          onChangeText={setPass}
        />
      </View>
      <View style={styles.buttonContainer}>
        {loader && <ActivityIndicator size="large" color={colors.blue} style={styles.loader}/>}
        <Button
          buttonStyle={styles.buttonSubmit}
          title="INGRESAR"
          onPress={loginHandler}
          disabled={loader}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.textNewUser}>
          ¿Nuevo usuario?
        </Text>
        <Button
          buttonStyle={styles.buttonNewUser}
          title="REGISTRATE"
        />
      </View>
    </View>
  )
}

export default Login
