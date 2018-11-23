import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'

const Footer = styled.footer`
  font-size: 14px;
  color: #232323;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 2px solid #7747BC;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }
`

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const times = kids.length

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%',
          padding: '0 5%'
        }}
      >
        {kids.map(k => (
          <Half key={k} width={1 / times}>
            {k}
          </Half>
        ))}
      </Flex>
      <Footer>
      <span><b>Ironhack</b></span>
      <img src="https://i.postimg.cc/W1nZMpZ7/Redux-B-2x.png" alt="redux_white" width='20px' height='20px'/>
      <span>@JossDz</span>
    </Footer>
    </Root>
  )
}

export default Split