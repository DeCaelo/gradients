import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import allGradients from './gradients.json';
import sampleSize from 'lodash/sampleSize';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  state = {
    gradients: sampleSize(allGradients, 10),
  };

  render() {
    const { gradients } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.h1, styles.white]}>
            Web Gradients
          </Text>
          <Text style={[styles.text, styles.white]}>
            Linear Gradients from webgradients.com
          </Text>
        </View>
        <FlatList
          data={gradients}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) =>
            <LinearGradient
              colors={item.colors}
              style={[styles.gradientWrapper]}
            >
              <Text style={[styles.text, styles.gradientName]}>
                {item.name}
              </Text>
              <View style={[styles.colorsStringContainer]}>
                <Text style={[styles.text]}>
                  {item.colors[0]}
                </Text>
                <Text style={[styles.text, { marginLeft: 10 }]}>
                  {item.colors[1]}
                </Text>
              </View>
            </LinearGradient>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273142',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    backgroundColor: 'transparent',
  },
  gradientWrapper: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  separator: {
    height: 10,
  },
  colorsStringContainer: {
    flexDirection: 'row',
  },
  gradientName: {
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 30,
  },
  white: {
    color: '#fff',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
