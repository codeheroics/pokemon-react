import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

import Pokemon from './Pokemon'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class Pokemons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(props.pokemons)
    }
  }

  componentWillReceiveProps({ pokemons }) {
    this.setState({ dataSource: ds.cloneWithRows(pokemons) })
  }

  renderRow = (data) => (
    <Pokemon {...data} onSelect={this.props.onSelect} />
  )

  render() {
    const { pokemons, onSelect } = this.props
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.list}
      />
    )
  }
}

export default Pokemons
