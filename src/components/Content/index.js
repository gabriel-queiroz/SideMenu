import React from 'react';
import { ContentContainer } from './styles';
import Header from '../Header';
import Photos from '../Photos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MenuAction } from '../../store/ducks/menu';

const Content = (props) => {
  return (
    <ContentContainer open={props.menu} >
      <Header />
      <Photos/>
    </ContentContainer>
  )
}
const mapStateToProps = state => ({
  menu: state.menu
});
const mapDispatchToProps = dispatch => bindActionCreators(MenuAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Content);