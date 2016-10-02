import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 10
  }
})

import Pokemon from './Pokemon'

const Pokemons = ({ pokemons, onSelect }) => (
  <View style={styles.container}>
    {pokemons.map(({ caught, id, identifier, name }) => (
      <Pokemon
        caught={caught}
        id={id}
        key={identifier}
        onSelect={onSelect}
        name={name}
      />
    ))}
  </View>
)

export default Pokemons
