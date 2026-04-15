import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => {
    const cleanPrice = String(item.price).replace(/[^0-9.]/g, '')
    const priceNumber = parseFloat(cleanPrice) || 0
    return sum + priceNumber
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>

      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Imagen del producto */}
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                $
                {Number(
                  String(item.price).replace(/[^0-9.]/g, ''),
                ).toLocaleString()}{' '}
                MXN
              </Text>
              <View style={styles.quantityBadge}>
                <Text style={styles.quantityText}>
                  CANTIDAD: {item.quantity || 1}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Tu carrito está vacío</Text>
            <Text style={styles.emptySubtext}>
              Añade piezas de archivo para empezar.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* FOOTER CON EL TOTAL ACTUALIZADO */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL ESTIMADO</Text>
          <Text style={styles.totalAmount}>
            ${total.toLocaleString('es-MX')} MXN
          </Text>
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setCart([])}
        >
          <Text style={styles.clearButtonText}>Vaciar Carrito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.checkoutButton,
            cart.length === 0 && { backgroundColor: '#ccc' },
          ]}
          onPress={() => alert('¡Gracias por tu compra en Vogue Vault!')}
          disabled={cart.length === 0}
        >
          <Text style={styles.checkoutText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
    marginBottom: 25,
    letterSpacing: -1,
    textTransform: 'uppercase',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row', // Imagen a la izquierda, texto a la derecha
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    // Sombra suave
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    textTransform: 'uppercase',
    lineHeight: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    marginTop: 5,
  },
  quantityBadge: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 8,
  },
  quantityText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '700',
    letterSpacing: 1,
  },
  totalAmount: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  clearButton: {
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  clearButtonText: {
    color: '#ff4444',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
})
