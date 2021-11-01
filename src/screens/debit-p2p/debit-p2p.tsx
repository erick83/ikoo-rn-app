import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TextInput } from 'react-native-gesture-handler'

import { clearData, getUser } from '../../redux/p2p/actions'
import { StackNavigator } from '../../model/navigator.interfaces'
import colors from '../../global-styles/colors'
import styles from './styles'

const DebitP2P: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<StackNavigator>()
  const [email, setEmail] = useState('')
  const [value, setValue] = useState('')
  const [note, setNote] = useState('')
  
  const nextHandler = () => {
    if (checkValidSubmit()) {
      const data = { amount: parseFloat(value), comment: note }
      dispatch(getUser({ email, data, callback: navigation.navigate }))
      clear()
    }
  }
  
  const backHandler = () => {
    navigation.navigate('Home')
    dispatch(clearData())
    clear()
  }

  const checkValidSubmit = () => {
    const valid = (item: string | undefined) => item && item != ''

    if (!valid(email)) {
      return false
    }

    if (!valid(value) && +(value) !== NaN ) {
      return false
    }

    return true
  }

  const clear = () => {
    setEmail('')
    setValue('')
    setNote('')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="ESCANEAR CÓDIGO QR"
          containerStyle={styles.buttonsContainer}
          buttonStyle={styles.buttonHome}
          icon={<Icon
            name="qr-code-scanner"
            type="material-comunity"
            color={colors.white}
            style={styles.qrIcon}
          />}
        />
        <Text style={styles.title}>Transferir por Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email de Usuario"
          style={styles.input}
          />
        <TextInput
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
          placeholder="Monto"
          style={styles.input}
          />
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Concepto"
          multiline
          numberOfLines={2}
          style={styles.input}
        />
        <View style={styles.buttosWrapper}>
          <Button
            title="SIGUIENTE"
            containerStyle={styles.buttonsContainer}
            buttonStyle={styles.buttonNext}
            disabledStyle={styles.buttonDisabledNext}
            disabled={!checkValidSubmit()}
            onPress={nextHandler}
          />
          <Button
            title="ATRAS"
            containerStyle={styles.buttonsContainer}
            buttonStyle={styles.buttonBack}
            onPress={backHandler}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default DebitP2P
