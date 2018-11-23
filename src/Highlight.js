import theme from '../theme'
import React from 'react'
import styled from 'styled-components'

const Highlight = styled.span`
  color:${ 
    props => props.imp ? 
      theme.colors.link : //link: #7747BC
      theme.colors.pre    //pre: #FFBF40
    }
`;


export default ({children, imp}) => 
<Highlight imp={imp}>
  {children}
</Highlight>