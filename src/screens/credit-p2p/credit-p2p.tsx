import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigator } from '../../model/navigator.interfaces'
import QRCode from 'react-native-qrcode-svg'
import { RootState } from '../../model/reducers.interfaces'
import styles from './styles'

const CreditP2P: React.FC = () => {
  const navigator = useNavigation<StackNavigator>()
  const userEmail = useSelector<RootState, string|undefined>(state => state.auth.userData?.email)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Recibe dinero compartiendo tu código QR</Text>
        <View style={styles.qrContainer}>
          <QRCode
            size={330}
            value={userEmail}
          />
        </View>
        <Text style={styles.title}>O usando tu correo electrónico</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>
    </ScrollView>
  )
}

export default CreditP2P
