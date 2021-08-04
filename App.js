const ValidationMassage = (props) => {
  const { txt } = props;
  console.log('This is txt:', txt);
  console.log('This is props.txt:', props.txt);
  return (
    <p>{props.txt}</p>
  )
}

const OrderForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input type="checkbox" id="age" onChange={props.change} checked={props.checked} />
      <label htmlFor="age">I am 16 years old.</label>
      <br />
      <button type="submit">Buy ticket!</button>
    </form>
  )
}

class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  checkBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { isFormSubmitted } = this.state;

    if (!isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    const { isFormSubmitted, isConfirmed } = this.state;
    if (isFormSubmitted) {
      if (isConfirmed) {
        return <ValidationMassage
          txt="You can watch the movie!" />
      }
      else {
        return <ValidationMassage
          txt="You can not watch the movie if you are not 18 years old!" />
      }
    }
  }

  render() {

    const { isConfirmed } = this.state;

    return (
      <React.Fragment>
        <h1>Buy ticket to the cinema!</h1>
        <OrderForm
          submit={this.handleFormSubmit}
          change={this.checkBoxChange}
          checked={isConfirmed}
        />
        {this.displayMessage()}

      </React.Fragment>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));