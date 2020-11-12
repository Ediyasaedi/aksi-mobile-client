import React from "react";
import { Button, Image, Text, View } from "react-native";

export default function ArticleContent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text>Judul Artikel</Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 300, height: 300, padding: 10, margin: 10 }}
      />
      <Text style={{ textAlign: "justify" }}>
        Hujan masih belum sepenuhnya meninggalkan bulan Mei. Buktinya, burung
        gereja masih sering tampak bertengger di atas rumah-rumah. Mereka sibuk
        mengibas-ngibaskan sayapnya demi mengusir butiran air yang masih
        menempel. Paruh mungilnya menelusuri bulu-bulunya yang berwarna serupa
        dengan warna-warna kain batik klasik dari Solo. Kain batik klasik
        warnanya lekat dengan warna tanah, kayu, daun dan rumput kering. Burung
        gereja berbeda dari parkit, tentu saja. Bulu-bulu parkit mengingatkan
        kita pada batik cirebonan yang cerah dan ceria. Bulu-bulu emprit juga
        berwarna batik klasik. Burung kecil itu suka hinggap di kawat-kawat
        telepon yang ruwet membentang dari satu tiang ke tiang lainnya di
        sepanjang jalan. Sayangnya, kini emprit sudah jarang terlihat. Dan
        ketapel jelas bukan penyebabnya, mungkin karena di sini sudah terlalu
        bising dengan suara yel, teriakan, dan senapan. Dan lihatlah, got-got
        mulai kering dan berbau. Baunya kadang-kadang hampir tak tertahankan
        karena tak ada air deras yang mengalirinya. Got di depan rumahnya itu
        melemparkan ingatan Soekram pada masa kecilnya di kampung. Saat kecil ia
        suka ikut pamannya menyeser wader kalen yang berkembang biak di kalen
        depan rumah kakeknya saat kalen itu dialiri air. Kalen itu lebih lebar
        sekitar dua kali lipat daripada got di depan rumahnya sekarang.
      </Text>
      <View
        style={{
          justifyContent: "space-around",
          padding: 10,
          flexDirection: "row",
        }}
      >
        <Button title="Sebelumnya" />
        <Button title="Selanjutnya" />
      </View>
    </View>
  );
}
