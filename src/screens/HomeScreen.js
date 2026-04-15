import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import ProductCard from '../components/ProductCard'
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.shopName}>Vogue Vault</Text>
      <Image
        source={{
          uri: 'https://tse4.mm.bing.net/th/id/OIP.jIToFIDoPoru45AOLkKT8gHaLF?rs=1&pid=ImgDetMain&o=7&rm=3',
        }}
        style={styles.banner}
      />
      <Text style={styles.sectionTitle}> Productos destacados </Text>
      <View style={styles.productsPreview}>
        <ProductCard
          name="Number (N)ine Hoodie"
          price="20,000"
          image="https://media-assets.grailed.com/prd/listing/temp/47f3c9e1f49a4648ae5110deff07cd5f?w=1000"
          description="Sudadera de archivo de la colección 'School of Visual Comedy'. Pieza histórica con detalles desgastados originales." // <--- ¡TE FALTABA ESTO AQUÍ!
          navigation={navigation}
        />

        <ProductCard
          name="Beauty Beast Tee"
          price="50,000"
          image="https://media-assets.grailed.com/prd/listing/temp/1d28835a04734f61940c902e888361ae?w=1000"
          description="Camiseta icónica de 1998. Estampado de alta calidad y corte vintage japonés." // <--- Y ESTO AQUÍ
          navigation={navigation}
        />
      </View>
      <Image
        source={{
          uri: 'https://tse2.mm.bing.net/th/id/OIP.3vsttBqeSLciKNi-nxuLUAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        }}
        style={styles.secondaryBanner}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.buttonText}> Ver Cátalogo </Text>
      </TouchableOpacity>
      {/* Botón para ir al Carrito (Reto) */}
      <TouchableOpacity
        style={styles.cartAccessButton}
        onPress={() => navigation.navigate('Cart')} // Asegúrate de que el nombre coincida con tu Stack en App.js
      >
        <Text style={styles.cartAccessText}>🛒 Ir a mi Carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Un fondo más limpio
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 50,
  },
  shopName: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
    letterSpacing: 1,
  },
  banner: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  secondaryBanner: {
    width: '90%',
    height: 120,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: 30,
    color: '#333',
  },
  productsPreview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    paddingHorizontal: 5,
    alignItems: 'flex-start', // <--- Agrega esto para que no se estiren raro
  },
  productCard: {
    width: 140,
    height: 140,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  button: {
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginVertical: 30,
    padding: 18,
    borderRadius: 30, // Botón más moderno (redondeado)
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cartAccessButton: {
    backgroundColor: '#fff', // Fondo blanco para que contraste con el negro del otro botón
    marginHorizontal: '5%',
    marginBottom: 20,
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000', // Borde negro grueso (estilo minimalista)
  },
  cartAccessText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
})
