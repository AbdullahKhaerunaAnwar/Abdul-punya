import { ScrollView, StyleSheet, Text, View } from "react-native";

type DataMahasiswa = {
  nama: string;
  stambuk: number;
  fontFamily?: string;
};

const mahasiswa: DataMahasiswa[] = [
  { nama: "Abdul Naim", stambuk: 105841114100, fontFamily: "ubuntu" },
  { nama: "Syahrul Ramadhan", stambuk: 105841114110, fontFamily: "barlowCondensed" },
  { nama: "Suriadin", stambuk: 105841114123, fontFamily: "raleway" },
  { nama: "Siti Maemunah", stambuk: 105841114112, fontFamily: "rubik" },
  { nama: "Hasnawati", stambuk: 105841114117, fontFamily: "ptsans" },
  { nama: "Ermawati", stambuk: 105841114115, fontFamily: "roboto" },
  { nama: "Ahmad Khalid", stambuk: 105841114128, fontFamily: "merriweather" },
  { nama: "Nurdin", stambuk: 105841114113, fontFamily: "tiktoksans" },
  { nama: "Abdul Khaeruna", stambuk: 105841114124, fontFamily: "tilitium" },
  { nama: "Rizki Abdi", stambuk: 105841114109, fontFamily: "oswald" },
];

const tampilkan10BerdasarkanReferensi = (
  daftar: DataMahasiswa[],
  referensi: number
) => {
  const urut = [...daftar].sort((a, b) => a.stambuk - b.stambuk);
  const indexRef = urut.findIndex((m) => m.stambuk === referensi);
  const mulai = Math.max(0, indexRef - 5);
  const akhir = Math.min(urut.length, indexRef + 5);
  return urut.slice(mulai, akhir);
};

export default function Beranda() {
  const listDitampilkan = tampilkan10BerdasarkanReferensi(mahasiswa, 105841114115);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.judul}>Daftar Mahasiswa (5 Sebelum & 5 Sesudah)</Text>
      {listDitampilkan.map((item, idx) => (
        <View key={idx} style={styles.kotak}>
          <Text style={[styles.nama, { fontFamily: item.fontFamily ?? "roboto" }]}>
            {item.nama}
          </Text>
          <Text style={styles.stambuk}>Stambuk: {item.stambuk}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#f9f9f9",
  },
  judul: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  kotak: {
    marginBottom: 14,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
    elevation: 2,
  },
  nama: {
    fontSize: 16,
    color: "#111",
  },
  stambuk: {
    fontSize: 13,
    color: "#666",
  },
});
