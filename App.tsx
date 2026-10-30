
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
export default function App() {
const produits = [
    { id: 1, nom: "Clavier", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", prix: 240, stock: 3 }
  ];

  const produitsDisponibles = produits.filter(p => p.stock > 0);
  const nombreDisponibles = produitsDisponibles.length;
  const valeurStockTotal = produits.reduce((somme, p) => somme + (p.prix * p.stock), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalogue des Produits</Text>

      <Text style={styles.text}>
        Nombre de produits disponibles : {nombreDisponibles}
      </Text>

      <Text style={styles.text}>
        somme totale du stock : {valeurStockTotal} MAD
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
    color: '#555',
  },
});
