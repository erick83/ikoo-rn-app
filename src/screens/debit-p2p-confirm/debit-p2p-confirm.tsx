import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { ITransactionPayload, IUserData, RootState } from '../../model/reducers.interfaces'
import { sendPayment, clearData } from '../../redux/p2p/actions'
import { StackNavigator } from '../../model/navigator.interfaces'
import styles from './styles'

const DebitP2pConfirm: React.FC = () => {
  const userData = useSelector<RootState, IUserData>(state => state.p2p.targetUserData)
  const comment = useSelector<RootState, any>(state => state.p2p.comment)
  const amount = useSelector<RootState, any>(state => state.p2p.amount)
  const navigation = useNavigation<StackNavigator>()
  const dispatch = useDispatch()
  
  const saveHandler = () => {
    const email = userData && userData.email
    const payload: ITransactionPayload = { email, comment, amount, callback: navigation.navigate }
    dispatch(sendPayment(payload))
  }

  const cancelHandler = () => {
    navigation.navigate('Home')
    dispatch(clearData())
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Transferencia a Usuario</Text>
        <View style={styles.targetDetails}>
          <Avatar
            size={120}
            rounded
            title="MD"
            containerStyle={styles.imageThumb}
          />
          <View style={styles.userDataContainer}>
            <Text style={styles.userDataText}>{userData.name} {userData.lastname}</Text>
            <Text style={styles.userDataText}>EMAIL: {userData.email}</Text>
            <Text style={styles.userDataText}>CONCEPTO: {comment}</Text>
          </View>
        </View>
        <Text style={styles.amountText}>$ {parseFloat(amount).toFixed(2)}</Text>
        <View style={styles.buttosWrapper}>
          <Button
            title="PAGAR"
            containerStyle={styles.buttonsContainer}
            buttonStyle={styles.buttonNext}
            onPress={saveHandler}
          />
          <Button
            title="CANCELAR"
            containerStyle={styles.buttonsContainer}
            buttonStyle={styles.buttonBack}
            onPress={cancelHandler}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default DebitP2pConfirm
