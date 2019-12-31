// TODO
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemMouseEnter.bind(this)}>{this.props.grocery}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.grocery.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList grocery={['Spinach', 'Turkey']}/>
  </div>
);

ReactDOM.render(<App  />, document.getElementById("app"));



