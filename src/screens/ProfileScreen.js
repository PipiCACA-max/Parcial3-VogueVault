import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.jpg')} // Ajusta a tu logo
          style={styles.image}
        />
        <Text style={styles.name}>Solomeo Paredes</Text>
        <Text style={styles.email}>solomeo.paredes@voguevault.com</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Mis Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Direcciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={[styles.menuText, { color: 'red' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 40,
  },
  menu: {
    width: '90%',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
})
