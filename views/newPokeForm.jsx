var React = require('react');
var LayoutContainer = require('./layout.jsx');

class newPokemon extends React.Component {
  render() {
    return (
            <LayoutContainer>
                <div>
                    <form method="POST" action="/pokemon/new">
                        <h1>Create Your Pokemon</h1>
                        <div>
                            <label className="formLabel">ID</label>
    						<input type="text" name="id" placeholder="id"/>
                        </div>
                        <div>
                            <label className="formLabel">NUM</label>
    						<input type="text" name="num" placeholder="num"/>
                        </div>
                        <div>
                            <label className="formLabel">NAME</label>
    						<input type="text" name="name" placeholder="name"/>
                        </div>
                        <div>
                            <label className="formLabel">IMG</label>
    						<input type="text" name="img" placeholder="img"/>
                        </div>
                        <div>
                            <label className="formLabel">HEIGHT</label>
    						<input type="text" name="height" placeholder="height"/>
                        </div>
                        <div>
                            <label className="formLabel">weight</label>
    						<input type="text" name="weight" placeholder="weight"/>
                        </div>
                        <div>
                            <input className="submitButton" type="submit" value="Create"/>
                        </div>
                    </form>
                </div>
            </LayoutContainer>
    );

  }
}

module.exports = newPokemon;
