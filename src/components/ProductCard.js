import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function ProductCard({
  name,
  price,
  image,
  description,
  navigation,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('ProductDetail', {
          name,
          price,
          image,
          description,
        })
      }
    >
      {/* Contenedor de imagen con altura fija */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      {/* Contenedor de info para que el texto no se pierda */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 160, // Ajusta según el ancho de tu pantalla
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  imageContainer: {
    width: '100%',
    height: 150, // <--- ESTO ES CLAVE: Altura fija para la foto
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 8,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
    fontWeight: '700',
  },
})
