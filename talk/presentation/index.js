// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Markdown,
  Slide,
  Spectacle,
  // Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  homepage: require('../assets/homepage.jpg'),
};

preloader(images);

const theme = createTheme();
theme.screen.components.codePane.pre.fontSize = '.75em';

const markdownSlide = (source) => (
  <Slide><Markdown>{source}</Markdown></Slide>
);

const slidify = slides => slides.map(slide => typeof slide === 'string' ? markdownSlide(slide) : slide);

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

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide', 'fade', 'zoom']} transitionDuration={500}>
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
            `Oh hi! I'm Hugo`,
            [
              'Telecom Lille graduate',
              'Freelance JS developer',
              'SFR > TF1 > Le Monde > Vente-Privée > Voyages-SNCF',
            ],
            `I wanna come back to Lille!`
          )}
          {basicSlide(
            'Previously on TakeOff:',
            [
              `You've heard about ES2016`,
              `You've heard about sharing code between native platforms.`,
            ]
          )}
          {basicSlide(
            `We're gonna talk about React`,
            `An Open-Source "JavaScript library for building user interfaces", pushed by Facebook`
          )}
          {basicSlide(
            'Core Philosophies',
            <Image src={images.homepage.replace('/', '')} />
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
              <Appear><ListItem>A <b>lifecycle</b> (creation, update, suppression)</ListItem></Appear>
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
            `Let's write a basic React app: A Pokedex`
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
            `Finally, let's search & filter`
          )}

          {basicSlide(
            `We can now build React apps!`,
            [
              `We've covered the "learn once" part of the philosophy`,
              `Let's work on the "write anywhere" part`
            ]
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
              `C#, Objective-C or Swift`,
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
          )}

          {basicSlide(
            `Here's our Pokemon Component, ready for React-Native`,
          )}
          {basicSlide(
            `Here's our Pokemon list, ready for React-Native`,
          )}
          {basicSlide(
            `And finally, our Search Component`,
          )}
          {basicSlide(
            `React-Native`,
            [
              `We've learned once, and we can write everywhere!`,
              `Now remember, the philosophy here is "learn once, write everywhere", NOT "write once, everywhere"`,
              `To follow OS patterns, you can split code between versions`,
            ]
          )}
          {basicSlide(
            `By the way`,
            'Our React-Native code looks a lot like our previous React code, with extra constraints'
          )}
          {basicSlide(
            `Couldn't we just apply these constraints to webapps too?`
          )}
          {basicSlide(
            `React-Native-Web`,
            [
              `An exciting project, with some interesting use cases`,
              `Down the road, may be the way to "write once, everywhere"`,
            ]
          )}
          {basicSlide(
            `Now to explore a bit the ecosystem.`
          )}
          {basicSlide(
            `Testing with Jest`,
            [
              `Testing components sucks. They change all the time.`,
              `Snapshot testing is an elegant solution to that.`,
            ]
          )}
          {basicSlide(
            `Visual Testing with React-Storybook`,
            [
              `Automatic testing is cool...`,
              `But automatic testing won't tell me if my component looks terrible`,
            ]
          )}
          {basicSlide(
            `I probably don't have time to talk about this, but these are great experiments`,
            [
              `React-Music`,
              `React-Game-Kit`,
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
              <ListItem>Is it functional? Is it Object-Oriented? Is it stuck between the two forever?</ListItem>
              <ListItem>Facebook (and licensing questions)</ListItem>
                <ListItem>The JS Fatigue Phenomenon (far from exclusive to React, but still)</ListItem>
            </List>
          )}
          {basicSlide(
            `JS Fatigue`,
            [
              'React is simple and small, so its ecosystem is huge and made of small pieces.',
              'Webpack, Flux, Redux, MobX, Storybook, Jest, Sagas, React-Router, npm, ES2015+...',
              `It makes me kinda sad to think developers are tired, when we've never solved problems so well.`,
              `(note that "JS Fatigue" is far from exclusive to React)`
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
