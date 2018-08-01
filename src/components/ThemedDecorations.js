// Code ThemedDecoration Component Here
import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render(){
    const childrenWithNewTheme = React.Children.map(this.props.children, child => { return React.cloneElement(child, { className: this.props.theme }) });

    //const childrenDivs = React.Children.map(childrenWithNewTheme, child => return <div className={child.props.theme}>{child}</div>)

    return(
      <div>
        {childrenWithNewTheme}
=======
import PropTypes from 'prop-types'

export default ThemedDecoration extends React.Component {
  render(){
    const childrenWithNewTheme = React.Children.map(child =>  return (this.props.children, child =>
      return React.cloneElement(child, { theme: this.props.theme })));

    const childrenDivs = React.Children.map(child => return <div className={theme}>{child}</div>)

    return(
      <div>
        {childrenDivs}
>>>>>>> 3cb1348c6077a6dc951f4f7e338b80125ffc2028
      </div>
    )
  }
}
