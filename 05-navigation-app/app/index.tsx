import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
  return <Redirect href='/(stack)/home' />
  // return (
  //   <SafeAreaView>
  //     <View className='mt-5 mx-2.5'>
  //       <Text className='text-4xl text-center font-work-black text-primary'>Hola Mundo!</Text>
  //       <Text className='text-3xl text-center font-work-medium text-secondary'>Hola Mundo!</Text>
  //       <Text className='text-2xl text-center font-work-light text-secondary-100'>Hola Mundo!</Text>
  //       <Text className='text-1xl text-center text-tertiary'>Hola Mundo!</Text>

  //       <Link href='/products'>Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // )
}

export default index