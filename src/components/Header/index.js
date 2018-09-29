import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MenuAction } from '../../store/ducks/menu';
import { HeaderContainer } from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    const { toogleMenu } = this.props;
    const { menu } = this.props;
    toogleMenu(!menu);
  }

  render() {
    return (
      <HeaderContainer>
        <button onClick={this.handleClickButton} >
          menu
        </button>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});
const mapDispatchToProps = dispatch => bindActionCreators(MenuAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
