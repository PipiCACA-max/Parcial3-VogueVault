import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default function ProductDetailScreen({
  route,
  navigation,
  cart,
  setCart,
}) {
  const { name, price, image, description } = route.params

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.descriptionTitle}>Descripción</Text>
        <Text style={styles.descriptionText}>{description}</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            setCart((prevCart) => {
              // 1. Verificamos si el producto ya está en el carrito
              const exists = prevCart.some((item) => item.name === name)

              if (exists) {
                // 2. Si ya existe, regresamos el carrito tal cual (no agregamos nada)
                alert('Este producto ya está en tu carrito')
                return prevCart
              } else {
                // 3. Si no existe, lo agregamos por primera y única vez [cite: 18, 21]
                alert('Producto agregado a Vogue Vault')
                return [...prevCart, { name, price, image, quantity: 1 }]
              }
            })
          }}
        >
          <Text style={styles.cartButtonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#000',
  },
  descriptionText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  cartButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // Sombra para Android
    elevation: 8,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
})
