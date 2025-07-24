import { ScrollView, StyleSheet, Text, View } from "react-native";

type MahasiswaItem = {
  namaLengkap: string;
  nomorStambuk: number;
  jenisFont?: string;
};

const mahasiswaList: MahasiswaItem[] = [
  { namaLengkap: "Abdul Naim", nomorStambuk: 105841114100, jenisFont: "ubuntu" },
  { namaLengkap: "Syahrul Ramadhan", nomorStambuk: 105841114110, jenisFont: "barlowCondensed" },
  { namaLengkap: "Suriadin", nomorStambuk: 105841114123, jenisFont: "raleway" },
  { namaLengkap: "Siti Maemunah", nomorStambuk: 105841114112, jenisFont: "rubik" },
  { namaLengkap: "Hasnawati", nomorStambuk: 105841114117, jenisFont: "ptsans" },
  { namaLengkap: "Ermawati", nomorStambuk: 105841114115, jenisFont: "roboto" },
  { namaLengkap: "Ahmad Khalid", nomorStambuk: 105841114128, jenisFont: "merriweather" },
  { namaLengkap: "Nurdin", nomorStambuk: 105841114113, jenisFont: "tiktoksans" },
  { namaLengkap: "Abdul Khaeruna Anwar", nomorStambuk: 105841114124, jenisFont: "tilitium" },
];

const bagiKelompok = (list: MahasiswaItem[]) => {
  const hasil = {
    grupA: list.slice(0, 3),
    grupB: list.slice(3, 6),
    grupC: list.slice(6),
  };
  return hasil;
};

const KartuKelompok = ({
  judul,
  isi,
}: {
  judul: string;
  isi: MahasiswaItem[];
}) => (
  <View style={gaya.kotakKelompok}>
    <Text style={gaya.judulKelompok}>{judul}</Text>
    {isi.map((orang, idx) => (
      <View key={idx} style={gaya.kotakIndividu}>
        <Text style={[gaya.namaOrang, { fontFamily: orang.jenisFont ?? "roboto" }]}>
          {orang.namaLengkap}
        </Text>
        <Text style={gaya.stambukText}>Stambuk: {orang.nomorStambuk}</Text>
      </View>
    ))}
  </View>
);

export default function Beranda() {
  const { grupA, grupB, grupC } = bagiKelompok(mahasiswaList);

  return (
    <ScrollView contentContainerStyle={gaya.halaman}>
      <KartuKelompok judul="Grup A" isi={grupA} />
      <KartuKelompok judul="Grup B" isi={grupB} />
      <KartuKelompok judul="Grup C" isi={grupC} />
    </ScrollView>
  );
}

const gaya = StyleSheet.create({
  halaman: {
    padding: 20,
    backgroundColor: "#ececec",
  },
  kotakKelompok: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },
  judulKelompok: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 14,
  },
  kotakIndividu: {
    marginBottom: 12,
  },
  namaOrang: {
    fontSize: 16,
    color: "#111",
  },
  stambukText: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
});
