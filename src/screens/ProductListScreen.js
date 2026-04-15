import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductCard from '../components/ProductCard'

export default function ProductListScreen({ navigation }) {
  const products = [
    {
      id: '1',
      name: 'Number (N)ine Hoodie',
      price: 20000,
      description:
        'Sudadera de archivo de la colección "School of Visual Comedy". Pieza histórica con detalles desgastados originales.',
      image:
        'https://media-assets.grailed.com/prd/listing/temp/47f3c9e1f49a4648ae5110deff07cd5f?w=1000',
    },
    {
      id: '2',
      name: 'Beauty Beast Tee',
      price: 50000,
      description:
        'Camiseta icónica de 1998. Estampado de alta calidad y corte vintage japonés.',
      image:
        'https://media-assets.grailed.com/prd/listing/temp/1d28835a04734f61940c902e888361ae?w=1000',
    },
    {
      id: '3',
      name: 'L.G.B Shark Swim Team Zip-Up Hoodie',
      price: 8000,
      image:
        'https://media-assets.grailed.com/prd/listing/temp/7f43fede43284a7194b20fd5bb1ff5c8?w=1000',
      description:
        'Sudadera icónica de la marca Le Grand Bleu (L.G.B). Presenta el gráfico "Shark Swim Team" con un corte entallado y cremallera completa hasta la capucha. Una pieza esencial de la estética visual kei y archive fashion.',
    },
    {
      id: '4',
      name: 'Alice Auaa Frayed Gothic Blouse',
      price: 12000,
      image:
        'https://media-assets.grailed.com/prd/listing/44494113/209235fa0a1d44a88ea695202609f59f?w=1000',
      description:
        'Blusa gótica de alta costura de Alice Auaa. Destaca por sus acabados deshilachados (frayed) hechos a mano y un corte arquitectónico que define el estilo avant-garde japonés. Material de gasa premium con detalles de encaje.',
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GRAILED ARCHIVE</Text>
        <Text style={styles.subtitle}>
          {products.length} PIEZAS DISPONIBLES
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            navigation={navigation}
          />
        )}
        numColumns={2} // Esto pone los productos en dos columnas
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row} // Espaciado entre columnas
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 3,
    color: '#000',
  },
  subtitle: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
    letterSpacing: 1,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
  },
})
