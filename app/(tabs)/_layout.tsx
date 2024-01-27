import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3, marginLeft: -90 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerLeftLabelVisible: false,
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'aaaaTab Two',
          tabBarIcon: ({ color }) => <Pressable style={styles.buttonCoupon}>
            <Text style={styles.text}>CUPONS</Text>
          </Pressable>,
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginVertical: 1,
    borderRadius: 25,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#656149',
  },
  buttonCoupon: {
    backgroundColor: Colors.light.tint,
    width: 90,
    height: 40,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});