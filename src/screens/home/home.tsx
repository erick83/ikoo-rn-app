import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'

import Notification from '../../components/notification/notification'
import ResumeItem from '../../components/resume-item/resume-item'
import { IAuthStore } from '../../model/auth.interfaces'
import { ITransactionData, RootState } from '../../model/reducers.interfaces'
import { getTransactions } from '../../redux/transactions/actions'
import { refreshStart } from '../../redux/refreshing/actions'
import styles from './styles'

const Home: React.FC<{navigation: DrawerNavigationHelpers}> = ({ navigation }) => {
  const dispatch = useDispatch()

  const { userData } = useSelector<RootState, IAuthStore>(state => state.auth)
  const transactions = useSelector<RootState, ITransactionData[]>(state => state.transactions)
  const refreshing = useSelector<RootState, boolean>(state => state.refresh.active)

  useEffect(() => {
    dispatch(refreshStart())
    dispatch(getTransactions())
  }, [])

  function onRefresh() {
    dispatch(refreshStart())
    dispatch(getTransactions())
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Notification />
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Hola {userData?.name}</Text>
          <Text style={styles.balanceText}>Tu saldo actual es</Text>
        </View>
        <Text style={styles.balance}>$ {userData?.balance?.toFixed(2)}</Text>
      </View>
      <Divider />
      <View style={styles.buttonsContainer}>
        <Button
          icon={
            <Icon
              size={18}
              name="wallet"
              type="font-awesome-5"
              color="white"
              style={styles.buttonIcon}
            />
          }
          title="RECIBIR"
          buttonStyle={styles.addButton}
          raised
          onPress={() => navigation.navigate('CreditP2P')}
          />
        <Button
          icon={
            <Icon
            name="money-bill-wave"
            type="font-awesome-5"
            size={18}
            color="white"
            style={styles.buttonIcon}
            />
          }
          title="PAGAR"
          buttonStyle={styles.removeButton}
          raised
          onPress={() => navigation.navigate('DebitP2P')}
        />
      </View>
      <View style={styles.resumeContainer}>
        <Text style={styles.resumeTitle}>Últimos movimientos</Text>
        {transactions.map((item, key) => {
          return (
            <ResumeItem key={key} email={userData?.email || ''} {...item} />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Home
