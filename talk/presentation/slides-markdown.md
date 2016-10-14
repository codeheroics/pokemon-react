# React : From Web to Native and back

--

Oh, hi! I'm Hugo

--

We're gonna talk about React.
An Open-Source "JavaScript library for building user interfaces", pushed by Facebook

--

Core Philosophies (screenshot from the website)

--

What this means to me: A library to build, architecture, create web apps in a way I can understand.

--

Let's get started. Let's build a Pokedex.

--

React uses JSX, an HTML-like syntax to get recognizable user interfaces.

const Pokemon = ({ image, name }) => (
  <div>
    <img src={pokemon.image} /> {pokemon.name}
  </div>
)

--

Let's make Pikachu!

const Pikachu = () => (
    <Pokemon name="Pikachu" image="https://codeheroics.github.io/pokemon-sprites/25.png" />
)
