import React, { Component } from 'react';
import './styles';
import Container from './styles/container';
import Content from './styles/content';
import SideMenu from './components/SideMenu';
import Photos from './components/Photos';
import Header from './components/Header';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <SideMenu />
          <Content>
            <Header />
            <Photos />
          </Content>
        </Container>
      </Provider>
    );
  }
}
export default App;
