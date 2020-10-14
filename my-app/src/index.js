import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Grid, Icon, Image, Form, Button, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">

          <Menu.Item fitted>
            <Icon name="facebook f"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name="twitter"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name="pinterest"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name="instagram"/>
          </Menu.Item>
          <Menu.Item fitted position="right">
            <Icon name="home"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name="Search"/>
          </Menu.Item>
          <Dropdown.Item item text="MY CART 0" icon="shop">
            <Dropdown.Menu>
              <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>

        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="http://courses.ics.hawaii.edu/ics314f20/morea/ui-frameworks/experience-islandsnow-logo.png"
               alt="logo"
               centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">

          <Grid container centered>
            <Dropdown item text='MEN'>
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                <Dropdown.Item>BOTTOMS</Dropdown.Item>
                <Dropdown.Item>SLIPPERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='WOMEN'>
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                <Dropdown.Item>SLIPPERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='KIDS'>
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIES</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='ACCESSORIES'>
              <Dropdown.Menu>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>STICKERS</Dropdown.Item>
                <Dropdown.Item>TOWELS</Dropdown.Item>
                <Dropdown.Item>HOME GOODS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='BRANDS'>
              <Dropdown.Menu>
                <Dropdown.Item>TOO MANY</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Grid>

        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image
            src="http://courses.ics.hawaii.edu/ics314f20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png"
            alt="" fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='footer-background'>
          <Grid container columns={3}>
            <Grid.Column>
              <List>
                <List.Item>ABOUT US</List.Item>
                <List.Item>STORE LOCATIONS</List.Item>
                <List.Item>EMPLOYMENT</List.Item>
                <List.Item>SHIPPING & RETURNS</List.Item>
                <List.Item>VIDEOS</List.Item>
                <List.Item>TERMS & CONDITIONS</List.Item>
                <List.Item>PRIVACY POLICY</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>MEN</List.Item>
                <List.Item>WOMEN</List.Item>
                <List.Item>KIDS</List.Item>
                <List.Item>ACCESSORIES</List.Item>
                <List.Item>BRANDS</List.Item>
                <List.Item>SALE</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>'Join our mailing list for updates'</List.Item>
                <List.Item>'Sign up to receive our email updates!'</List.Item>
                <Form>
                  <Form.Input>
                    <input placeholder='Enter email address'/>
                    <Button color='black' attached='right'>Join</Button>
                  </Form.Input>
                </Form>
              </List>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <IslandSnow/>
    , document.getElementById('root'));
