var React = require('react');
var LayoutContainer = require('./layout.jsx');

class editPokeForm extends React.Component {
    render() {
        return (
            <LayoutContainer>
                <div>
                    <form method="POST" action={"/pokemon/" + this.props.id}>
                        <input type="hidden" name="_method" defaultValue="PUT" />
                        <h1>Edit Pokemon</h1>
                         <div>
                            <img src ={this.props.img}/>
                        </div>
                        <div>
                            <label>ID</label>
                            <input type="text" name="id" placeholder="id" value={this.props.id}/>
                        </div>
                        <div>
                            <label>NUM</label>
                            <input type="text" name="num" placeholder="num" value={this.props.num}/>
                        </div>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" placeholder="name" value={this.props.name}/>
                        </div>
                        <div>
                            <label>IMG</label>
                            <input type="text" name="img" placeholder="img" value={this.props.img}/>
                        </div>
                        <div>
                            <label>Height</label>
                            <input type="text" name="height" placeholder="height" value={this.props.height}/>
                        </div>
                        <div>
                            <label>Weight</label>
                            <input type="text" name="weight" placeholder="weight" value={this.props.weight}/>
                        </div>
                        <div>
                            <input className="submitButton" type="submit" value="Edit" />
                        </div>
                    </form>
                </div>
            </LayoutContainer>
        )
    }
}
module.exports = editPokeForm;