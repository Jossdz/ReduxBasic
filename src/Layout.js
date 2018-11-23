import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 10%;
`

const Footer = styled.footer`
  font-size: 14px;
  color: #232323;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 2px solid #7747BC;
  display: flex;
  justify-content: space-between;
`



const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span><b>Ironhack</b></span>
      <img src="https://i.postimg.cc/W1nZMpZ7/Redux-B-2x.png" alt="redux_white" width='20px' height='20px'/>
      <span>@JossDz</span>
    </Footer>
  </Fragment>
)

export default Layout