import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen
 = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomButton 
          className='mt-2'          
          onPress={() => router.push('/tabs/(stack)/products')}>
          Productos
        </CustomButton>
        
        {/* se puede omitir (stack) ya que es el stack por defecto */}
        <CustomButton 
          className='mt-2'
          color='secondary'
          onPress={() => router.push('/tabs/profile')}>
          Profile
        </CustomButton>

        <CustomButton 
          className='mt-2'
          color='tertiary'
          onPress={() => router.push('/tabs/settings')}>  
          Settings
        </CustomButton>

        {/* <Text className='mb-5 mt-5 text-center'>Home</Text>
        <Link className='mb-5' href='/products'>Products</Link>
        <Link className='mb-5' href='/profile'>Profile</Link>
        <Link className='mb-5' href='/settings'>Settings</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
