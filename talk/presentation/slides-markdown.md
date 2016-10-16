--

# React : From Web to Native and back

--

# Oh, hi! I'm Hugo

* TL1
* SFR > TF1 > Le Monde > Vente-Privée > Voyages-SNCF
* Freelance

--

### Previously on TakeOff:

* You've heard about ES2016
* You've heard about sharing code between native platforms.

--

### We're gonna talk about React.
* An Open-Source "JavaScript library for building user interfaces", pushed by Facebook

--

### Core Philosophies
![React Website Screenshot](images/homepage.jpg)


--

### What this means (to me)

#### A library to build, architecture, create web apps in a way I can understand.

--

### In React, you work with a single concept:

#### The Component

It is re-usable, and has :
* **Props** (the attributes which are given to him)
* An internal **State**
* A **lifecycle** (Creation, update, suppression)

--

### JSX

React uses JSX, an HTML-like syntax to get recognizable user interfaces.

```js
class HelloTakeOff extends React.Component {
  render() {
    return (
      <div>Hello TakeOff!</div>
    )
  }
}

ReactDOM.render(<HelloTakeOff />, document.getElementById('root'));
```

--

# Let's write a basic app: a Pokédex.

--

### First, we need a Pokemon component


```js
import React from 'react'

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} /> <span>{this.props.name}</span>
      </div>
    )
  }
)

```
--

Let's make Pikachu!

```js
import React from 'react'

const pikachuImage = 'https://codeheroics.github.io/pokemon-sprites/25.png'

class Pikachu extends React.Component {
  render() {
    return (
        <Pokemon name="Pikachu" image={pikachuImage} />
      )
  }
}
```

--

Now let's display multiple Pokémons

```js
import React from 'react'

const pikachuData = { name: "Pikachu", image: pikachuImage }
const pichuData = { name: "Pichu", image: pichuImage}
const pokemons = [pikachuData, pichuDatas]

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
```
--

### Finally, let's search & filter

--

### We can now build React apps!

#### We know the main concepts.

--

We've covered the "learn once" part of the philosophy

Wouldn't it be great to start working on the "write anywhere"? part?

--

### I wish I knew how to write mobile apps.

I mean, REAL native apps, not embedded webviews.

--

Here's what I know about the native world:

* No HTML
* No CSS
* C#, Objective-C or Swift
* Views

--

Views. Which kinda do work like CSS3's flexboxes.

--

### So... If we add some constraints to React...

* no HTML... But equivalents: Views, which are flexbox containers
* no CSS, but elements we can style individually

If we can use JSX, our HTML-like syntax, to compile to something other that HTML...

--

### Then we get React-Native

A way to write native apps for Android, iOS, the Universal Windows Platform, and even Ubuntu.

--

# So. remember our Pokedex?

--

```js
import React from 'react'
import { View, Text, Image } from 'react-native'

class Pokemon extends React.Component {
  render() {
    return (
      <View>
        <Image source={this.props.image} /> <Text>{this.props.name}</Text>
      </View>
    )
  }
)
```
--

```js
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
```

--

### React-Native

* We've learned once, and we can write everywhere!
* Now remember, the philosophy here is "learn once, write everywhere", NOT "write once, everywhere"

--

* To follow the OS' patterns, you may need to split some components between their Android and iOS versions for example
* Or you may choose to try using common components all the way. It's up to you.
* But the core of the app is the same.

--

### By the way

Our React-Native code looks a lot like our React code
With just an extra set of constraints
So we could just apply these constraints to webapps too, right?

--

### React-Native-Web

* An exciting project, with some interesting use cases
* Down the road, may be the way to "write once, everywhere"

--

### Testing

Jest & snapshot testing

--

### Visual Testing

React-Storybook

--

Now, let's have some fun.

--

Also, more stuff.

--

### What I don't like about React

* JSX is ugly, and the community is fine with it.
  * {/* This is a comment in JSX */}
* Is it functional? Is it Object-Oriented? Is it stuck between the two with no way forward?
* The JS Fatigue Phenomenon

--

## JS Fatigue

React is simple, but the React ecosystem is huge and made of small pieces.

Webpack Flux Redux MobX Storybook Jest Sagas React-Router npm ES2015+...

It makes me kinda sad to think developers are tired, when we've never solved problems so well.


--

# We have not "solved" front-end development.

But we're doing our very best to find a good, easy to reason about solution.

--

# For now, React is the best one I have.

--

Thanks.
