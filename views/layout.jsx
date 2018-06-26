var React = require('react');

class LayoutContainer extends React.Component {
  render() {
    return ( 
      <html>
        <head>
          <title>Welcome to My Pokedex!</title>         
      </head>
      <body>
        <h1>HELLO AKIRA, SCOTT AND CHEE KEAN</h1>
        {this.props.children}
      </body>
    </html> );

  }
}

module.exports = LayoutContainer;