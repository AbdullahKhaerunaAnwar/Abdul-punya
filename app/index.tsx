// GalleryView.tsx
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet
} from 'react-native';

interface ImageItemProps {
  primary: string;
  secondary: string;
}

const PhotoCard: React.FC<ImageItemProps> = ({ primary, secondary }) => {
  const [altView, setAltView] = useState(false);
  const [scaleLevel, setScaleLevel] = useState(1);

  const switchImage = () => {
    const nextZoom = scaleLevel + 0.3;
    setScaleLevel(nextZoom > 2 ? 1 : nextZoom); // reset zoom to 1 after passing limit
    setAltView((prev) => !prev);
  };

  const handleError = () => {
    Alert.alert('Load Error', 'Unable to display image. Check your network or link.');
  };

  return (
    <Pressable onPress={switchImage} style={[styles.card, { zIndex: scaleLevel > 1 ? 2 : 0 }]}>
      <Image
        source={{ uri: altView ? secondary : primary }}
        style={[styles.image, { transform: [{ scale: scaleLevel }] }]}
        resizeMode="cover"
        onError={handleError}
      />
    </Pressable>
  );
};

const imageCollection = [
  { id: 'img1', primary: 'https://picsum.photos/id/10/200', secondary: 'https://picsum.photos/id/1/200' },
  { id: 'img2', primary: 'https://picsum.photos/id/2/200', secondary: 'https://picsum.photos/id/99/200' },
  { id: 'img3', primary: 'https://picsum.photos/id/12/200', secondary: 'https://picsum.photos/id/98/200' },
  { id: 'img4', primary: 'https://picsum.photos/id/65/200', secondary: 'https://picsum.photos/id/96/200' },
  { id: 'img5', primary: 'https://picsum.photos/id/95/200', secondary: 'https://picsum.photos/id/94/200' },
  { id: 'img6', primary: 'https://picsum.photos/id/93/200', secondary: 'https://picsum.photos/id/92/200' },
  { id: 'img7', primary: 'https://picsum.photos/id/91/200', secondary: 'https://picsum.photos/id/90/200' },
  { id: 'img8', primary: 'https://picsum.photos/id/89/200', secondary: 'https://picsum.photos/id/88/200' },
  { id: 'img9', primary: 'https://picsum.photos/id/87/200', secondary: 'https://picsum.photos/id/86/200' },
];

const GalleryView = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={imageCollection}
        keyExtractor={(item) => item.id}
        numColumns={GRID_COLUMNS}
        renderItem={({ item }) => (
          <PhotoCard primary={item.primary} secondary={item.secondary} />
        )}
      />
    </SafeAreaView>
  );
};

export default GalleryView;

const GRID_COLUMNS = 3;
const GAP = 10;
const WIDTH = Dimensions.get('window').width;
const SIZE = (WIDTH - GAP * (GRID_COLUMNS + 1)) / GRID_COLUMNS;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: GAP / 2,
  },
  card: {
    width: SIZE,
    height: SIZE,
    margin: GAP / 2,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
