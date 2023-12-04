import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TextInput } from 'react-native';

const CRMSection = () => {
  const [contacts, setContacts] = useState([{
    id: '1',
    name: 'John Doe',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Jane Doe',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more contacts as needed
  ]);
  const [events, setEvents] = useState([{
    id: '1',
    title: 'Meeting with John',
    date: '2021-09-20',
    contacts: ['1']
  }, {
    id: '2',
    title: 'Lunch with Jane',
    date: '2021-09-21',
    contacts: ['2']
  } // Add more events as needed
  ]);

  const renderContact = ({
    item
  }) => <View style={_styles.duHpmdmt}>
      <Image source={{
      uri: item.image
    }} style={_styles.HrPeVsrd} />
      <Text style={_styles.QBqwyfrR}>{item.name}</Text>
    </View>;

  const renderEvent = ({
    item
  }) => <View style={_styles.rmDcVbve}>
      <Text style={_styles.TLlkoidU}>{item.title}</Text>
      <Text style={_styles.RlYXRQSr}>{item.date}</Text>
      <View style={_styles.fJUCGTnO}>
        {item.contacts.map(contactId => {
        const contact = contacts.find(c => c.id === contactId);
        return <Image key={contactId} source={{
          uri: contact.image
        }} style={_styles.CiiiQMbj} />;
      })}
      </View>
    </View>;

  return <SafeAreaView style={_styles.tudYnBkI}>
      <View style={_styles.rnmNKeRE}>
        <Text style={_styles.DIblQwjq}>CRM Section</Text>
        <TextInput placeholder="Search contacts..." style={_styles.QlLCUPGC} />
        <FlatList data={contacts} renderItem={renderContact} keyExtractor={item => item.id} horizontal style={_styles.iUZTXJey} />
        <Text style={_styles.yOxagUEx}>Events</Text>
        <FlatList data={events} renderItem={renderEvent} keyExtractor={item => item.id} style={_styles.xRTqPWAq} />
      </View>
    </SafeAreaView>;
};

export default CRMSection;

const _styles = StyleSheet.create({
  duHpmdmt: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  HrPeVsrd: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  QBqwyfrR: {
    marginLeft: 10
  },
  rmDcVbve: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  TLlkoidU: {
    fontSize: 18,
    fontWeight: "bold"
  },
  RlYXRQSr: {
    color: "#888"
  },
  fJUCGTnO: {
    flexDirection: "row",
    marginTop: 10
  },
  CiiiQMbj: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  tudYnBkI: {
    flex: 1
  },
  rnmNKeRE: {
    padding: 20
  },
  DIblQwjq: {
    fontSize: 24,
    fontWeight: "bold"
  },
  QlLCUPGC: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5
  },
  iUZTXJey: {
    marginTop: 20
  },
  yOxagUEx: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  xRTqPWAq: {
    marginTop: 20
  }
});