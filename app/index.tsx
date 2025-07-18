// ImageGrid.tsx
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

type PhotoProps = {
  sourceA: string;
  sourceB: string;
};

const ImageTile: React.FC<PhotoProps> = ({ sourceA, sourceB }) => {
  const [toggle, setToggle] = useState(false);
  const [magnify, setMagnify] = useState(1);

  const handleTap = () => {
    setMagnify((prev) => {
      const next = prev + 0.25;
      return next > 2.2 ? 1 : next;
    });
    setToggle(!toggle);
  };

  const imageError = () => {
    Alert.alert('Error Memuat', 'Cek koneksi atau tautan gambar.');
  };

  return (
    <Pressable onPress={handleTap} style={[styles.tile, { zIndex: magnify > 1 ? 5 : 0 }]}>
      <Image
        source={{ uri: toggle ? sourceB : sourceA }}
        style={[styles.pic, { transform: [{ scale: magnify }] }]}
        onError={imageError}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const photoData = [
  { id: '01', sourceA: 'https://picsum.photos/id/10/200', sourceB: 'https://picsum.photos/id/1/200' },
  { id: '02', sourceA: 'https://picsum.photos/id/2/200', sourceB: 'https://picsum.photos/id/99/200' },
  { id: '03', sourceA: 'https://picsum.photos/id/12/200', sourceB: 'https://picsum.photos/id/98/200' },
  { id: '04', sourceA: 'https://picsum.photos/id/65/200', sourceB: 'https://picsum.photos/id/96/200' },
  { id: '05', sourceA: 'https://picsum.photos/id/95/200', sourceB: 'https://picsum.photos/id/94/200' },
  { id: '06', sourceA: 'https://picsum.photos/id/93/200', sourceB: 'https://picsum.photos/id/92/200' },
  { id: '07', sourceA: 'https://picsum.photos/id/91/200', sourceB: 'https://picsum.photos/id/90/200' },
  { id: '08', sourceA: 'https://picsum.photos/id/89/200', sourceB: 'https://picsum.photos/id/88/200' },
  { id: '09', sourceA: 'https://picsum.photos/id/87/200', sourceB: 'https://picsum.photos/id/86/200' },
];

const columns = 3;
const spacing = 6;
const screenW = Dimensions.get('window').width;
const tileDimension = (screenW - spacing * (columns + 1)) / columns;

const ImageGrid = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <FlatList
        data={photoData}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: spacing / 2 }}>
            <ImageTile sourceA={item.sourceA} sourceB={item.sourceB} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  tile: {
    width: tileDimension,
    height: tileDimension,
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    overflow: 'hidden',
  },
  pic: {
    width: '100%',
    height: '100%',
  },
});
