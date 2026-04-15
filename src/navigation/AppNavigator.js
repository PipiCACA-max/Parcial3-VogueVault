// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { useState } from 'react'

// import HomeScreen from '../screens/HomeScreen'
// import ProductListScreen from '../screens/ProductListScreen'
// import ProductDetailScreen from '../screens/ProductDetailScreen'
// import CartScreen from '../screens/CartScreen'
// import ProfileScreen from '../screens/ProfileScreen'

// const Stack = createNativeStackNavigator()

// export default function AppNavigator() {
//   const [cart, setCart] = useState([])
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Inicio' }}
//         />
//         <Stack.Screen
//           name="ProductList"
//           component={ProductListScreen}
//           options={{ title: 'Productos' }}
//         />
//         <Stack.Screen
//           name="ProductDetail"
//           options={{ title: 'Detalle del producto' }}
//         >
//           {(props) => (
//             <ProductDetailScreen {...props} cart={cart} setCart={setCart} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Cart" options={{ title: 'Carrito' }}>
//           {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
//         </Stack.Screen>
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{ title: 'Perfil' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons' // Iconos [cite: 152]

// Pantallas
import HomeScreen from '../screens/HomeScreen'
import ProductListScreen from '../screens/ProductListScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import CartScreen from '../screens/CartScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// Stack para la sección de Inicio (Navegación interna de productos) [cite: 70, 101]
function HomeStack({ cart, setCart }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: '900', textTransform: 'uppercase' },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Vogue Vault' }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Catálogo' }}
      />
      <Stack.Screen name="ProductDetail">
        {(props) => (
          <ProductDetailScreen {...props} cart={cart} setCart={setCart} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]) // Estado global del carrito [cite: 110]

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name === 'Inicio') iconName = 'home'
            else if (route.name === 'Carrito') iconName = 'cart'
            else if (route.name === 'Perfil') iconName = 'person'
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Ocultamos el header del Tab para usar el del Stack
        })}
      >
        <Tab.Screen name="Inicio">
          {() => <HomeStack cart={cart} setCart={setCart} />}
        </Tab.Screen>

        <Tab.Screen name="Carrito" options={{ headerShown: true }}>
          {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
        </Tab.Screen>

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
