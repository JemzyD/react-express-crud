var React = require('react');
var LayoutContainer = require('./layout.jsx');

class DelPokemon extends React.Component {
  render() {

    // let url = "/pokemon/"+this.props.pokemon.id+"?_method=delete"
    return (
      
	    		<LayoutContainer>
	    			<div>
			    			
	    		<form method="POST" action={"/pokemon/" + this.props.pokemon.id}>
          <input type="hidden" name="_method" defaultValue="delete" />
    					
             <h1> {this.props.pokemon.name} </h1>
             <img src={this.props.pokemon.img} />
    					<input name="id" type="hidden" value={this.props.pokemon.id}/>
    					
    					<input type="submit" value="Delete!"/>
					
					</form>

				  	</div>	

			    </LayoutContainer>


    );

  }
}

module.exports = DelPokemon;