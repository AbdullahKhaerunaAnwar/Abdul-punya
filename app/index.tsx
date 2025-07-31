import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="home" size={40} color="#007aff" />
        <FontAwesome name="user" size={40} color="#ff9500" />
        <MaterialIcons name="email" size={40} color="#34c759" />
        <Entypo name="camera" size={40} color="#af52de" />
        <Feather name="heart" size={40} color="#ff3b30" />
        <AntDesign name="star" size={40} color="#ffd700" />
        <EvilIcons name="location" size={40} color="#5ac8fa" />
        <Fontisto name="bell" size={40} color="#5856d6" />
        <Foundation name="calendar" size={40} color="#ff2d55" />
        <Octicons name="mark-github" size={40} color="#000000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 25, // Jika error di sini, hapus baris ini dan ganti pakai margin di setiap ikon
  },
});
