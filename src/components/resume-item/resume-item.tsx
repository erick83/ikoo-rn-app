import React from 'react'
import { Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import styles from './styles'

const ResumeItem: React.FC<{email: string, code: string, comment: string, amount: number}> = ({ email, code, comment, amount }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.email}>Email: {email}</Text>
          <Text style={styles.number}>Code: {code}</Text>
          <Text style={styles.description}>{comment}</Text>
        </View>
        <Text style={styles.cant}>$ {amount}</Text>
      </View>
      <Divider />
    </View>
  )
}

export default ResumeItem
