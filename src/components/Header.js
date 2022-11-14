import { Navbar, NavbarBrand } from 'reactstrap'
import styled from 'styled-components'
import { Home } from 'react-feather'
// import { useNavigate } from 'react-router-dom'

const Container = styled('div')``
const NavbarIcon = styled('div')``
const BrandNavbar = styled(NavbarBrand)`
  display: flex;
  width: 100%;
`
const List = styled('li')`
  list-style-type: none;
`
const Brand = styled('div')``
const Brand2 = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 3rem;
  width: 100%;
`
const Header = () => {
  // const navigate = useNavigate()
  const cllickFn = (e, props) => {
    // navigate(props)
    console.log(props)
  }
  return (
    <Container>
      <Navbar className="my-2" color="dark" dark>
        <BrandNavbar href="/">
          <NavbarIcon>
            <Home size={70} />
          </NavbarIcon>
          <Brand>
            <h3>Reis</h3>
            <p>Real State</p>
          </Brand>
          <Brand2>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>OUR AGENTS</p>
            <List onclick={(e) => cllickFn(e, '/hello')}>Properties</List>
            <List onclick={() => cllickFn('/gallery')}>GALLERY</List>
            <List onclick={() => cllickFn('/blog')}>BLOG</List>
            <p>CONTACT US</p>
            <p>SEARCH</p>
          </Brand2>
        </BrandNavbar>
      </Navbar>
    </Container>
  )
}

export default Header
