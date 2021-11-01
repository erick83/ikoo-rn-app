import React, { useState } from 'react'
import { Text, Modal, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Button } from 'react-native-elements/dist/buttons/Button'

import styles from './styles'
import colors from '../../global-styles/colors'

const Notification: React.FC = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon
            name="check-circle"
            type="material-comunity"
            color={colors.green} />
          <Text style={styles.title}>Recarga Completada</Text>
          <Text style={styles.descrption}>Se ha completado el proceso de recarga por <Text style={styles.descrptionSpan}>$20</Text></Text>
          <Text style={styles.newBalance}>Nuevo saldo <Text style={styles.newBalanceAmount}> $135</Text></Text>
            
          <Button
            title="CERRAR"
            raised
            containerStyle={styles.buttonsClose}
            buttonStyle={styles.buttonDefault}
            onPress={() => { setModalVisible(false) }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default Notification
