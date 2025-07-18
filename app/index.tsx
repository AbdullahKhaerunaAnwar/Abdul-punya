// ZoomGallery.tsx
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const columns = 3;
const spacing = 8;
const boxSize = (screenWidth - spacing * (columns + 1)) / columns;

type ImgItem = {
  id: string;
  urls: [string, string];
};

const images: ImgItem[] = [
  { id: '01', urls: ['https://picsum.photos/id/10/200', 'https://picsum.photos/id/1/200'] },
  { id: '02', urls: ['https://picsum.photos/id/2/200', 'https://picsum.photos/id/99/200'] },
  { id: '03', urls: ['https://picsum.photos/id/12/200', 'https://picsum.photos/id/98/200'] },
  { id: '04', urls: ['https://picsum.photos/id/65/200', 'https://picsum.photos/id/96/200'] },
  { id: '05', urls: ['https://picsum.photos/id/95/200', 'https://picsum.photos/id/94/200'] },
  { id: '06', urls: ['https://picsum.photos/id/93/200', 'https://picsum.photos/id/92/200'] },
  { id: '07', urls: ['https://picsum.photos/id/91/200', 'https://picsum.photos/id/90/200'] },
  { id: '08', urls: ['https://picsum.photos/id/89/200', 'https://picsum.photos/id/88/200'] },
  { id: '09', urls: ['https://picsum.photos/id/87/200', 'https://picsum.photos/id/86/200'] },
];

const ZoomGallery = () => {
  const [state, setState] = React.useState<Record<string, { flipped: boolean; zoom: number }>>({});

  const handleTap = (id: string) => {
    setState((prev) => {
      const current = prev[id] || { flipped: false, zoom: 1 };
      const newZoom = current.zoom * 1.3;
      return {
        ...prev,
        [id]: {
          flipped: !current.flipped,
          zoom: newZoom > 2 ? 1 : newZoom,
        },
      };
    });
  };

  const renderGrid = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += columns) {
      const row = images.slice(i, i + columns);
      rows.push(
        <View key={`row-${i}`} style={styles.row}>
          {row.map((img) => {
            const imgState = state[img.id] || { flipped: false, zoom: 1 };
            return (
              <TouchableOpacity
                key={img.id}
                onPress={() => handleTap(img.id)}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: imgState.flipped ? img.urls[1] : img.urls[0] }}
                  style={[
                    styles.imageBox,
                    {
                      transform: [{ scale: imgState.zoom }],
                    },
                  ]}
                  onError={() =>
                    Alert.alert('Error', 'Gagal menampilkan gambar.')
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
    return rows;
  };

  return <ScrollView contentContainerStyle={styles.container}>{renderGrid()}</ScrollView>;
};

export default ZoomGallery;

const styles = StyleSheet.create({
  container: {
    padding: spacing,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: spacing,
  },
  imageBox: {
    width: boxSize,
    height: boxSize,
    marginHorizontal: spacing / 2,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
});
