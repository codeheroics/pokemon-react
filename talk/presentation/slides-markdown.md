--

# React : From Web to Native and back

--

Oh, hi! I'm Hugo

--

Previously on TakeOff:

* You've heard about ES2016
* You've heard about sharing code between native platforms.

--

We're gonna talk about React.
An Open-Source "JavaScript library for building user interfaces", pushed by Facebook
For a bit of history, ...

--

Core Philosophies (screenshot from the website)

--

What this means (to me): A library to build, architecture, create web apps in a way I can understand.

--

In React, you work with one concept : The Component.

It is re-usable, and works with :
* Props, the attributes which are given to him
* An internal state
* A lifecycle (Creation, update, suppression)

--

Let's get started. Let's build a Pokedex.

--

React uses JSX, an HTML-like syntax to get recognizable user interfaces.

import React from 'react'

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} /> {this.props.name}
      </div>
    )
  }
)

--

Let's make Pikachu!

import React from 'react'

const pikachuImage = 'https://codeheroics.github.io/pokemon-sprites/25.png'

class Pikachu extends React.Component {
  render() {
    return (
        <Pokemon name="Pikachu" image={pikachuImage} />
      )
  }
}

--

Now let's display multiple pokemons

import React from 'react'

const pikachu = { name: "Pikachu", image: pikachuImage }
const pichu = { name: "Pichu", image: pichuImage}
const pokemons = [pikachu, pichu]

class Pokemons extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map(pokemon => (
            <Pokemon name={pokemon.name} image={pokemon.image}
        ))}
      </div>
    )
  }
}

--

Finally, let's get the ability to search & filter

--

You can now build React apps!

You know the main concepts.

--

Which is cool, you know.

We've covered the "learn once" part of the philosophy

Now, to write anywhere.

--

So. We've mastered React. And its ideas are cool!

Wouldn't it be great if we were able to write native apps way?

--

I mean, REAL native apps, not embedded webviews.

--

It seems like a tough goal.

Here's what I know about the native world:

* No HTML
* No CSS
* C#, Objective-C or Swift
* Views.

--

Views. Which kinda do work like CSS3's flexboxes.

--

So... If we add some constraints to React...

Like saying that instead of divs, we now only have Views, which are flexbox containers
Or saying that since we can't use CSS, we're going to style every component and give up the "Cascading" part

--

We get React-Native

A way to write native apps for Android, iOS, the Universal Windows Platform, and even Ubuntu.

--

So remember our Pokemons?

--

import React from 'react'
import { View, Text, Image } from 'react-native'

class Pokemon extends React.Component {
  render() {
    return (
      <View>
        <Image source={this.props.image} /><Text>{this.props.name}</Text>
      </View>
    )
  }
)

--

Multiple Pokémons

import React from 'react'
import { ScrollView } from 'react-native'

const pikachu = { name: "Pikachu", image: pikachuImage }
const pichu = { name: "Pichu", image: pichuImage}
const pokemons = [pikachu, pichu]

class Pokemons extends React.Component {
  render() {
    return (
      <ScrollView>
        {pokemons.map(pokemon => (
            <Pokemon name={pokemon.name} image={pokemon.image}
        ))}
      </ScrollView>
    )
  }
}

--

So, that's cool, we've learned once, and we can write everywhere!
Now remember, the philosophy here is "learn once, write everywhere", NOT "write once, everywhere"
Which means that sometimes, we've going to have to split some components between their Android and iOS versions for example
To follow the OS' patterns
But the core of the app is the same.

--

By the way

Our React-Native code looks a lot like our React code
With just an extra set of restrictions
So we could just apply these restrictions to webapps too, right?

--

React-Native-Web does this.

--

*demo*

--

It's an exciting project, with some interesting use cases, though I wouldn't call it production-ready yet
Just for this demo I had to ask for a release because the last version available had a bug on a component I wanted to use.

--

So we can build webapps with React.

Let's have some fun.
