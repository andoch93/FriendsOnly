import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Alert } from 'react-native';
import Category from './CategoryComponent/Category';

export default class CategoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Select a Category</Text>
          <View style={styles.row}>
              <View style={styles.tile1}>
                  <Category title="Music" />
              </View>
              <View style={styles.tile2}>
                  <Category title="Arts" />
              </View>
          </View>
          <View style={styles.row}>
              <View style={styles.tile3}>
                  <Category title="Nightlife" />
              </View>
              <View style={styles.tile4}>
                  <Category title="Food & Drink" />
              </View>
          </View>
          <View style={styles.row}>
              <View style={styles.tile5}>
                  <Category title="Sports & Wellness" />
              </View>
              <View style={styles.tile6}>
                  <Category title="Classes" />
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#032053',
      height: 900
    },
    header: {
        paddingTop:25,
        paddingBottom: 7,
        textAlign:'center',
        color:'#aeddcb',
        fontSize:30
    },
    row: {
        flexDirection: 'row',
        height:100
    },
    tile1: {
        flex:1,
        backgroundColor: '#34495e',
        padding:10,
    },
    tile2: {
        flex:1,
        backgroundColor: '#27ae60',
        padding:10
    },
    tile3: {
        flex:1,
        backgroundColor: '#d35400',
        padding:10
    },
    tile4: {
        flex:1,
        backgroundColor: '#2980b9',
        padding:10
    },
    tile5: {
        flex:1,
        backgroundColor: '#c0392b',
        padding:10
    },
    tile6: {
        flex:1,
        backgroundColor: '#8e44ad',
        padding:10
    },
    tile7: {
        flex:1,
        backgroundColor: '#f1c40f',
        padding:10
    },
    tile8: {
        flex:1,
        backgroundColor: '#7f8c8d',
        padding:10
    }
});

AppRegistry.registerComponent('CategoryScreen', () => CategoryScreen);
