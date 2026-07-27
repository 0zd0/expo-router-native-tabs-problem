import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'

export default function Index() {
  return (
    <>
      <Stack.Title>{'Settings'}</Stack.Title>
      <View style={styles.container}>
        <Link href="/details">{'Open details'}</Link>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
})
