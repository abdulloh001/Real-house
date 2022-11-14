import React from 'react'
import styled from 'styled-components'
import img from '../photo/mebel.png'
const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  background-image: url(${img}) ;
};
`
const Proper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`
function Propertice() {
  return (
    <Container>
      <Proper>
        <h1>Propertice</h1>
        <p>Home / Properties</p>
      </Proper>
    </Container>
  )
}
export default Propertice
