// Code ThemedDecoration Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render(){
    const childrenWithNewTheme = React.Children.map(this.props.children, child => { return React.cloneElement(child, { className: this.props.theme }) });

    //const childrenDivs = React.Children.map(childrenWithNewTheme, child => return <div className={child.props.theme}>{child}</div>)

    return(
      <div>
        {childrenWithNewTheme}
      </div>
    )
  }
}
