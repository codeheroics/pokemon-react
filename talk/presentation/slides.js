import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';

const slides = [`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
`,

<Slide transition={['fade']} bgColor="secondary" textColor="primary">
  <List>
    <Appear><ListItem>Inline style based theme system</ListItem></Appear>
    <Appear><ListItem>Autofit text</ListItem></Appear>
    <Appear><ListItem>Flexbox layout system</ListItem></Appear>
    <Appear><ListItem>React-Router navigation</ListItem></Appear>
    <Appear><ListItem>PDF export</ListItem></Appear>
    <Appear><ListItem>And...</ListItem></Appear>
  </List>
</Slide>
];

export default slides;
