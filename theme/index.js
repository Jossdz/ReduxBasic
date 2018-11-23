// example theme.js
import theme from 'mdx-deck/themes'

// export default {
//   // extends the default theme
//   ...theme,
//   // add a custom font
//   font: 'Kaushan Script, sans-serif',
//   // custom colors
//   colors: {
//     text: '#EDEDED',
//     background: '#232323',
//     link: '#0ff',
//   }
// }

export default {
  ...theme,
  font: 'Comfortaa, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  monospace: '"Dank Mono", Josefin Sans, Sans Serif',
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Ranga","Verdana"'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  colors: {
    text: '#232323',
    background: '#EDEDED',
    link: '#7747BC',
    pre: '#FFBF40',
    preBackground: '#051626',
    code: '#fff'
  }
}