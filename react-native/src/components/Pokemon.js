import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { height: 112, padding: 5 },
  caught: { opacity: 1, alignItems: 'center', },
  uncaught: { opacity: .3, alignItems: 'center', },
  image: { width: 96, height: 96 }
})

class Pokemon extends Component {
  onSelect = () => this.props.onSelect(this.props.id)

  render() {
    const { caught, id, identifier, name } = this.props
    return (
      <View
        style={styles.container}
        key={identifier}
      >
        <TouchableWithoutFeedback onPress={this.onSelect}>
          <View style={styles[caught ? 'caught' : 'uncaught']}>
            <Image
              source={{
                uri: `https://codeheroics.github.io/pokemon-sprites/${id}.png`
              }}
              style={styles.image}
            />
            <Text>{name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default Pokemon
