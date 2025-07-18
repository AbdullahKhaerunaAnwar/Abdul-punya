// index.tsx
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

type GridItemProps = {
  mainUrl: string;
  altUrl: string;
};

const GridItem: React.FC<GridItemProps> = ({ mainUrl, altUrl }) => {
  const [showAlt, setShowAlt] = useState(false);
  const [zoom, setZoom] = useState(1);

  const toggleImage = () => {
    const updatedZoom = zoom * 1.2;
    setZoom(updatedZoom > 2 ? 2 : updatedZoom);
    setShowAlt(prev => !prev);
  };

  const onImageFail = () => {
    Alert.alert('Gambar gagal dimuat', 'Periksa koneksi atau URL.');
  };

  return (
    <Pressable onPress={toggleImage} style={[styles.box, { zIndex: zoom > 1 ? 1 : 0 }]}>
      <Image
        source={{ uri: showAlt ? altUrl : mainUrl }}
        style={[styles.picture, { transform: [{ scale: zoom }] }]}
        resizeMode="cover"
        onError={onImageFail}
      />
    </Pressable>
  );
};

const galleryData = [
  { id: 'a1', main: 'https://picsum.photos/id/10/200', alt: 'https://picsum.photos/id/1/200' },
  { id: 'a2', main: 'https://picsum.photos/id/2/200', alt: 'https://picsum.photos/id/99/200' },
  { id: 'a3', main: 'https://picsum.photos/id/12/200', alt: 'https://picsum.photos/id/98/200' },
  { id: 'a4', main: 'https://picsum.photos/id/65/200', alt: 'https://picsum.photos/id/96/200' },
  { id: 'a5', main: 'https://picsum.photos/id/95/200', alt: 'https://picsum.photos/id/94/200' },
  { id: 'a6', main: 'https://picsum.photos/id/93/200', alt: 'https://picsum.photos/id/92/200' },
  { id: 'a7', main: 'https://picsum.photos/id/91/200', alt: 'https://picsum.photos/id/90/200' },
  { id: 'a8', main: 'https://picsum.photos/id/89/200', alt: 'https://picsum.photos/id/88/200' },
  { id: 'a9', main: 'https://picsum.photos/id/87/200', alt: 'https://picsum.photos/id/86/200' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={galleryData}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GridItem mainUrl={item.main} altUrl={item.alt} />
        )}
      />
    </SafeAreaView>
  );
}

const cols = 3;
const margin = 8;
const screen = Dimensions.get('window').width;
const itemSize = (screen - margin * (cols + 1)) / cols;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingHorizontal: margin / 2,
  },
  box: {
    width: itemSize,
    height: itemSize,
    margin: margin / 2,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});
