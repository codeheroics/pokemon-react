import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flexDirection: 'column' },
  caught: { opacity: 1 },
  uncaught: { opacity: .3 }
})

class Pokemon extends Component {
  onSelect = () => this.props.onSelect(this.props.id)

  render() {
    const { caught, id, identifier, name } = this.props
    return (
      <View
        style={styles.container}
        key={identifier}
        onClick={this.onSelect}
      >
        <View style={{ styles[caught ? 'caught' : 'uncaught'] }}>
        <Image
          alt={name}
          src={require(`../data/sprites/${id}.png`)}
        />
        </View>
        <Text>{name}</Text>
      </View>
    )
  }
}

export default Pokemon
