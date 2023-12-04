import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

const ViewMoments = () => {
  const greetingCard = {
    images: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'],
    videos: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'],
    audio: ['https://tinyurl.com/42evm3m3'],
    qrCode: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={_styles.TgMFTsRB}>
      <ScrollView style={_styles.WRzoCvpN}>
        <Text style={_styles.TBUXjnbm}>Your Greeting Card</Text>
        {greetingCard.images.map((image, index) => <Image key={index} source={{
        uri: image
      }} style={_styles.SKbucjTA} />)}
        {greetingCard.videos.map((video, index) => <View key={index} style={_styles.XlDKDtXw} />)}
        {greetingCard.audio.map((audio, index) => <View key={index} style={_styles.KZFyYTSo} />)}
        <Text style={_styles.HDgUxFvS}>Your QR Code:</Text>
        <Image source={{
        uri: greetingCard.qrCode
      }} style={_styles.ZBilSovf} />
      </ScrollView>
    </SafeAreaView>;
};

export default ViewMoments;

const _styles = StyleSheet.create({
  TgMFTsRB: {
    flex: 1,
    backgroundColor: "#fff"
  },
  WRzoCvpN: {
    padding: 20
  },
  TBUXjnbm: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  SKbucjTA: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  XlDKDtXw: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    marginBottom: 20
  },
  KZFyYTSo: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    marginBottom: 20
  },
  HDgUxFvS: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  ZBilSovf: {
    width: 200,
    height: 200
  }
});