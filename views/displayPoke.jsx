var React = require('react');
var LayoutContainer = require('./layout.jsx');

class home extends React.Component {
  render() {

  	let selectEdit = '/' + this.props.id + '/edit?_method=PUT';
  	let selectDel = '/' + this.props.id + '/delete?_method=DELETE';


    return (
    	<LayoutContainer>
 			<div className="container">
 				<div>
		      	<img src ={this.props.img}/>
		      	</div>
		      	<div>
		      	<h1>{this.props.name}</h1>
		      	<ul>
		      	<li>Id : {this.props.id} </li>
		      	<li>Num : {this.props.num} </li>
		      	<li>Height : {this.props.height} </li>
		      	<li>Weight : {this.props.weight} </li>
		      	</ul>
		      	</div>
		      	<div>
		      	<form method="GET" action={selectEdit}>
		      	<button type="submit">EDIT</button>
		      	</form>
		      	<p></p>
		      	<form method="POST" action={selectDel}>
		      	<button type="submit">DELETE</button>
		      	</form>
		      	</div>
	      	</div>
	    </LayoutContainer>
     
    );
  }
}

module.exports = home;