import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const columns = 3;
const spacing = 8;
const imageSize = (screenWidth - spacing * (columns + 1)) / columns;

type ImageData = {
  id: string;
  main: string;
  alt: string;
};

const imagePairs: ImageData[] = [
  { id: '1', main: 'https://picsum.photos/id/101/200', alt: 'https://picsum.photos/id/201/200' },
  { id: '2', main: 'https://picsum.photos/id/102/200', alt: 'https://picsum.photos/id/202/200' },
  { id: '3', main: 'https://picsum.photos/id/103/200', alt: 'https://picsum.photos/id/203/200' },
  { id: '4', main: 'https://picsum.photos/id/104/200', alt: 'https://picsum.photos/id/204/200' },
  { id: '5', main: 'https://picsum.photos/id/105/200', alt: 'https://picsum.photos/id/205/200' },
  { id: '6', main: 'https://picsum.photos/id/106/200', alt: 'https://picsum.photos/id/206/200' },
  { id: '7', main: 'https://picsum.photos/id/107/200', alt: 'https://picsum.photos/id/207/200' },
  { id: '8', main: 'https://picsum.photos/id/108/200', alt: 'https://picsum.photos/id/208/200' },
  { id: '9', main: 'https://picsum.photos/id/109/200', alt: 'https://picsum.photos/id/209/200' },
];

export default function App() {
  const [states, setStates] = useState<Record<string, { zoom: number; showAlt: boolean }>>({});

  const handlePress = (id: string) => {
    setStates((prev) => {
      const current = prev[id] || { zoom: 1, showAlt: false };
      const newZoom = Math.min(current.zoom * 1.2, 2); // maksimal 2x
      return {
        ...prev,
        [id]: {
          zoom: newZoom,
          showAlt: !current.showAlt,
        },
      };
    });
  };

  const renderGrid = () => {
    return (
      <View style={styles.grid}>
        {imagePairs.map((img) => {
          const state = states[img.id] || { zoom: 1, showAlt: false };
          return (
            <TouchableOpacity
              key={img.id}
              onPress={() => handlePress(img.id)}
              activeOpacity={0.8}
              style={styles.cell}
            >
              <Image
                source={{ uri: state.showAlt ? img.alt : img.main }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: state.zoom }],
                  },
                ]}
                resizeMode="cover"
                onError={() => Alert.alert('Gagal memuat gambar')}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>{renderGrid()}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: spacing,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cell: {
    width: imageSize,
    height: imageSize,
    margin: spacing / 2,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
