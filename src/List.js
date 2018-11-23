import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  li{
    list-style: none;
  }
`

export default ({children}) => <List>{children}</List>