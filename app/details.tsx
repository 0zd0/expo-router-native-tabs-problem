import { Text, View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

export default function Details() {
  return (
    <>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: 'default',
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Header transparent={true} />
      <Stack.Title>{'Details'}</Stack.Title>
      <View style={styles.container}>
        <Text>{'Even when setting `headerBackButtonDisplayMode` to `\'minimal\'`, if you long-press the button, you will see `(tabs)`—that is, the general title for the tabs, rather than the title of the specific tab you are actually returning to'}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
})
