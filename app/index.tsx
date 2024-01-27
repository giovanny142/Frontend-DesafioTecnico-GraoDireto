import { StyleSheet, Pressable, ListRenderItemInfo } from 'react-native';
import { NativeBaseProvider, Box, VStack, Center, FlatList } from 'native-base';
import AppNavigator from '../components/AppNavigator';
import { ApolloProvider } from '@apollo/client';
import { client } from '../resources/apollo';

export default () => {

  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#b4835f97'
  }
});
