import React from 'react';

import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import Pikachu from './demoComponents/Pikachu';
import Pokemons from './demoComponents/Pokemons';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  jest: require('../assets/jest.png'),
  pokedex1: require('../assets/pokedex1.gif'),
  pokedex2: require('../assets/pokedex2.gif'),
  puzzled: require('../assets/pikachu-puzzled.gif'),
  react: require('../assets/react_logo.png'),
  storybook: require('../assets/storybook.png'),
  takeoff: require('../assets/take-off-logo.png'),
  victory1: require('../assets/victory1.gif'),
  victory2: require('../assets/victory2.gif'),
  victory3: require('../assets/victory3.gif'),
};

preloader(images);

const theme = createTheme();
theme.screen.components.codePane.pre.fontSize = '.75em';

const basicSlide = (title, content, notes) => (
  <Slide notes={notes}>
    <Heading size={1} caps fit>
      {title}
    </Heading>
    {Array.isArray(content) ? (
      <List>
        {content.map((el, key) => (<ListItem key={key}>{el}</ListItem>))}
      </List>
    ) : content}
  </Slide>
);

export default class Presentation extends React.Component { // eslint-disable-line react/no-multi-comp
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide', 'fade', 'zoom']} transitionDuration={500}>
          <Slide>
            <Image src={images.takeoff} />
            <br />
            <Link href="https://twitter.com/codeheroics">
              Talk by @codeheroics
            </Link>
            <br />
            <Link href="https://github.com/codeheroics/pokemon-react">
              Demos on Github
            </Link>

          </Slide>
          {basicSlide(
            `Oh hi! I'm Hugo`,
            [
              'Telecom Lille graduate',
              'SFR > TF1 > Le Monde > Vente-Privée > Voyages-SNCF',
              'Freelance JS developer',
              'Back-end > Full-Stack > Front-end dev',
              'Just a dev (not an advocate, not a contributor)',
            ],
            `I wanna come back to Lille!`
          )}
          {basicSlide(
            'Previously on TakeOff:',
            [
              `... Tons of cool stuff`,
              `ES2016`,
              `Sharing code between native platforms with Angular2 & NativeScript`,
              `Functional Webapps`,
            ]
          )}
          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              React
            </Heading>
            <Heading size={1} fit caps>
              From the web to native
            </Heading>
            <Heading size={1} fit caps>
              ... and back
            </Heading>
          </Slide>
          {basicSlide(
            `We're gonna talk about React`,
            <div>
              <Image src={images.react} />
              <Text>An Open-Source "JavaScript library for building user interfaces", pushed by Facebook</Text>
            </div>
          )}
          {basicSlide(
            'Core Philosophies',
            [
              'Declarative',
              'Component-Based',
              'Learn Once, Write Anywhere',
            ]
          )}
          {basicSlide(
            'What this means (to me)',
            <Heading size={3}>A library to build, architecture, create web apps in a way I can understand</Heading>
          )}
          {basicSlide(
            'In React, you work with a single concept',
            <Heading size={3}>The Component</Heading>
          )}
          <Slide>
            <Heading size={1} caps fit>The Component</Heading>
            It is re-usable and has
            <List>
              <Appear><ListItem><b>Props</b>, the attributes which are given to him</ListItem></Appear>
              <Appear><ListItem>An internal <b>State</b></ListItem></Appear>
              <Appear><ListItem>A <b>lifecycle</b> (creation, update, destruction)</ListItem></Appear>
            </List>
          </Slide>
          {basicSlide(
            'About JSX',
            [
              `HTML-like syntax to describe components rendering`,
              `Optional, but used by most of the community`,
              `Ugly... but practical and easy to read.`,
            ]
          )}
          {basicSlide(
            'Our first Component',
              <CodePane
                lang="jsx"
                source={
`class HelloTakeOff extends React.Component {
  render() {
    return (
      <div>Hello TakeOff!</div>
    )
  }
}

ReactDOM.render(<HelloTakeOff />, document.getElementById('root'));`
                  }
              />
          )}
          {basicSlide(
            `Let's write a basic React app: A Pokedex`,
            <Image src={images.pokedex1} />
          )}
          {basicSlide(
            `First, let's create a "Pokemon" Component`
          )}
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React from 'react'

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
        <span>{this.props.name}</span>
      </div>
    )
  }
)`
            }
            ranges={[
              { loc: [0, 1], title: 'Loading React' },
              { loc: [2, 3], title: 'Creating a React Component' },
              { loc: [3, 11], title: 'Rendering some JSX' },
              { loc: [6, 8], title: 'We read data from the props' },
            ]}
          />
          {basicSlide(
            `Then, we can create Pikachu`,
            'We give to the `Pokemon` Component its name and image as props'
          )}
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React from 'react'

const pikachuImage = 'https://codeheroics.github.io/pokemon-sprites/25.png'

class Pikachu extends React.Component {
  render() {
    return (
        <Pokemon
          name="Pikachu"
          image={pikachuImage}
        />
      )
  }
}`
            }
            ranges={[
              { loc: [0, 1], title: 'Loading React' },
              { loc: [4, 5], title: 'Creating a Pikachu Component' },
              { loc: [5, 13], title: 'Using our Pokemon Component' },
            ]}
          />
          {basicSlide(
            'Pika Pika!',
            <Pikachu />
          )}
          {basicSlide(
            `Now let's display multiple Pokémons`,
            'Using curly braces switches from JSX to a JS context'
          )}

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React from 'react'

const pikachuData = { name: "Pikachu", image: pikachuImage }
const pichuData = { name: "Pichu", image: pichuImage}
const pokemons = [pikachuData, pichuDatas]

class Pokemons extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map(pokemon => (
          <Pokemon
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    )
  }
}`
            }
            ranges={[
              { loc: [0, 1], title: 'Loading React' },
              { loc: [2, 5], title: 'Preparing an array of data' },
              { loc: [6, 7], title: 'Creating a Pokemons Component' },
              { loc: [9, 17], title: 'Using map to get multiple Pokemon Components' },
            ]}
          />
          {basicSlide(
              'Pika! Pi!',
              <Pokemons />
          )}

          {basicSlide(
            `Finally, let's search & filter`
          )}

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React, { Component } from 'react'

import Pokemons from './Pokemons'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: allPokemons
    }
  }

  search = (event) => {
    const searchTerm = event.target.value
    this.setState({
      pokemons: pokemons.filter(
        ({ identifier }) => (
          identifier.includes(searchTerm)
        )
      )
    })
  }

  render() {
    const { onSelect } = this.props

    return (
      <div className="Search">
        <div>
          <input
            type="text"
            onChange={this.search}
          />
        </div>
        <Pokemons
          pokemons={this.state.pokemons}
          onSelect={onSelect}
        />
      </div>
    )
  }
}`
            }
            ranges={[
              { loc: [5, 11], title: 'Declaring an initial state' },
              { loc: [29, 33], title: 'Setting an event handler' },
              { loc: [12, 22], title: 'Updating the state in the event handler' },
              { loc: [34, 38], title: 'Using the updated info' },
            ]}
          />

          {basicSlide(
            `Demo`,
          )}
          {basicSlide(
            `We can now build React apps!`,
            <Image src={images.victory1} />
          )}
          {basicSlide(
              `We've covered the "learn once" part of the philosophy`,
              `Let's work on the "write anywhere" part`,
          )}
          {basicSlide(
            `I wish I knew how to write mobile apps`,
            `I mean, REAL native apps, not embedded webviews.`
          )}
          {basicSlide(
            `Here's what I know about the native world:`,
            [
              `No HTML`,
              `No CSS`,
              `Java, Objective-C or Swift`,
              `Views`,
            ]
          )}
          {basicSlide(
            `Views`,
            `Don't they kinda work like CSS3's flexboxes?`
          )}
          {basicSlide(
            `So... If we add some constraints to React...`,
            [
              `no HTML... But equivalents: Views, which are flexbox containers`,
              `no CSS, but elements we can style individually`,
              `Use JSX, out HTML-like syntax, to compile to something other than HTML...`,
            ]
          )}
          {basicSlide(
            `Then we get React-Native`,
            `A way to write native apps for Android, iOS, the Universal Windows Platform, and even Ubuntu.`
          )}
          {basicSlide(
            `So. remember our Pokedex?`,
            <Image src={images.pokedex2} />
          )}

          {basicSlide(
            `Our Pokemon Component, ready for React-Native:`,
          )}

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { height: 112, flexDirection: 'column', alignItems: 'center' },
  image: { width: 96, height: 96 }
})


class Pokemon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
)`
            }
            ranges={[
              { loc: [0, 2], title: 'Load React, Components from React-Native' },
              { loc: [3, 7], title: `Prepare the Component's styles` },
              { loc: [9, 19], title: 'Use View, Image, Text' },
            ]}
          />
          {basicSlide(
            `Here's our Pokemon list, ready for React-Native`,
          )}

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React from 'react'
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
}`
            }
            ranges={[
              { loc: [0, 2], title: 'Load React, Components from React-Native' },
              { loc: [7, 18], title: 'Same as before, but with a ScrollView' },
            ]}
          />
          {basicSlide(
            `And finally, our Search Component`,
          )}

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import Pokemons from './Pokemons'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: allPokemons
    }
  }

  search = (searchTerm) => {
    this.setState({
      pokemons: pokemons.filter(
        ({ identifier }) => (
          identifier.includes(searchTerm)
        )
      )
    })
  }

  render() {
    const { onSelect } = this.props

    return (
      <View>
        <View>
          <TextInput
            onChange={this.search}
          />
      <View>
        <Pokemons
          pokemons={this.state.pokemons}
          onSelect={onSelect}
        />
      </View>
    )
  }
}`
            }
            ranges={[
              { loc: [0, 2], title: 'Load React, Components from React-Native' },
              { loc: [27, 38], title: 'Same logic as before, with a TextInput' },
            ]}
          />
          {basicSlide(
            'Demo'
          )}
          {basicSlide(
            `We've learned once, and we can write anywhere!`,
            <Image src={images.victory2} />
          )}
          {basicSlide(
            'Now remember,',
            [
              `The philosophy here is "learn once, write anywhere", NOT "write once, everywhere"`,
              `To follow OS patterns, you can split code between versions`,
            ]
          )}
          {basicSlide(
            `By the way`,
            'Our React-Native code looks a lot like our previous React code, with extra constraints'
          )}
          {basicSlide(
            `Couldn't we just apply these constraints to webapps too?`,
            <Image src={images.puzzled} />
          )}
          {basicSlide(
            `React-Native-Web`,
            [
              `An exciting project, with some interesting use cases`,
              `Down the road, may be the way to "write once, everywhere", for Web & Native`,
            ]
          )}
          {basicSlide(
            'Demo'
          )}
          {basicSlide(
            `React-Native-Web`,
            <Image src={images.victory3} />
          )}
          {basicSlide(
            `Now to explore a bit the ecosystem.`
          )}
          {basicSlide(
            `Snapshot testing with Jest`,
            [
              `Testing components sucks. They change all the time.`,
              `Snapshot testing is an elegant solution to that.`,
              `Output the component markup, validate it, then compare against that markup next time`,
            ]
          )}
          {basicSlide(
            `Snapshot testing with Jest`,
            <Image src={images.jest} width="600" height="500" />
          )}
          {basicSlide(
            `Visual Testing with React-Storybook`,
            [
              `Automatic testing is cool...`,
              `But automatic testing won't tell me if my component looks terrible`,
            ]
          )}
          {basicSlide(
            `Visual Testing with React-Storybook`,
            <Image src={images.storybook} />
          )}
          {basicSlide(
            `I probably don't have time to talk about this, but great experiments`,
            [
              `React-Music`,
              `React-Game-Kit`,
              `From "Write anywhere" to "write anything"?`,
            ]
          )}
          {basicSlide(
            `And to architecture big React apps, you may need to use those libraries`,
            [
              `Redux`,
              `MobX`,
            ]
          )}
          {basicSlide(
            `What I don't like about React`,
            <List>
              <ListItem>JSX is ugly, and the community is fine with it (there are alternatives, JSX itself is being improved, but still)</ListItem>
                  <CodePane
                    lang="jsx"
                    source={
`<div>
  {/* This is a comment in JSX and I hate it */}
</div>`
                    }
                    margin="20px auto"
                  />
              <ListItem>Functional ideas but lots of classes and "this"</ListItem>
              <ListItem>Facebook, and licensing questions, and Native roadmap</ListItem>
              <ListItem>The JS Fatigue Phenomenon (far from exclusive to React, but still)</ListItem>
            </List>
          )}
          {basicSlide(
            `JS Fatigue`,
            [
              'React is simple and small, so its ecosystem is huge and made of small, quickly moving pieces.',
              'Webpack, Flux, Redux, MobX, Storybook, Jest, Sagas, React-Router, npm, ES2015+...',
              `It makes me kinda sad to think developers are tired, when we've never solved problems so well.`,
              `(note that "JS Fatigue" is far from exclusive to React)`,
            ]
          )}
          {basicSlide(
            'We have not "solved" front-end development (especially not on the Web)',
            `But we're doing our very best to find a good, easy to reason about solution.`
          )}
          {basicSlide(
            'For now, React is the best solution I have.'
          )}
          {basicSlide(
            'Thanks',
            <CodePane
              lang="jsx"
              source={
`<Speaker
  name="Hugo Agbonon"
  twitter="@codeheroics"
  website="https://www.codeheroics.com"
  freelance
  isReadyToAnswerQuestions
/>
{/* No Pokémons were hurt during the creation of this talk */}
`
}
            />
          )}
        </Deck>
      </Spectacle>
    );
  }
}
