import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Text, Icon, HStack, Center, Pressable, VStack, } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export function FooterClient() {
  const [selected, setSelected] = React.useState(0);
  const navigation: any = useNavigation();

  function goToHomePage(value: number) {
    setSelected(value)
    navigation.navigate('listRestaurants')
  }

  function goToLoginPage(value: number) {
    setSelected(value)
    navigation.navigate('login')
  }

  return <VStack>
    <Box>

      <HStack bg="#e8e8dc" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => goToHomePage(0)}>
          <Center>
            <Icon as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="#263A29" size="7" />
          </Center>
        </Pressable>
        <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => goToLoginPage(1)}>
          <Center>
            <Icon as={<MaterialCommunityIcons name={selected === 1 ? 'account' : 'account-outline'} />} color="#263A29" size="7" />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  </VStack>;
}


const styles = StyleSheet.create({

})