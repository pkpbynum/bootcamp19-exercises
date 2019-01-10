import React from "react";
import { Container, Text } from "./styles";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      gender: '',
      pronoun: '',
      hometown: '',
      favFoods: '',
      birthday: '',
      huid: '',
      concentration: '',
      display: false
    }

    this.inputChange = this.inputChange.bind(this)
  }
  
  submit() {
    this.setState({ display:true })
  }

  inputChange(e) {
    this.setState({ [e.target.name]:e.target.value })
  
  }

  render() {
    return (
      <React.Fragment>
        <input type='text' name='name' placeholder='Name' onChange={this.inputChange}></input><br></br>
        <input type='radio' name='gender' value='male' onChange={this.inputChange}></input>Male
        <input type='radio' name='gender' value='female' onChange={this.inputChange}></input>Female
        <input type='radio' name='gender' value='other' onChange={this.inputChange}></input>Other<br></br>
        <input type='text' name='pronoun' placeholder='Pronoun' onChange={this.inputChange}></input><br></br>
        <input type='text' name='hometown' placeholder='Hometown' onChange={this.inputChange}></input><br></br>
        <input type='text' name='favFoods' placeholder='3 Favorite Foods' onChange={this.inputChange}></input><br></br>
        <input type='date' name='birthday' placeholder='Birthday' onChange={this.inputChange}></input><br></br>
        <input type='text' name='huid' placeholder='HUID' onChange={this.inputChange}></input><br></br>
        <select name='concentration' defaultValue='Concentration' onChange={this.inputChange}>
          <option disabled>Concentration</option>
          <option value='Anthropolgy'>Anthropology</option>
          <option value='Computer Science'>Computer Science</option>
          <option value='Linguistics'>Linguistics</option>
          <option value='Mathematics'>Mathematics</option>
          <option value='Psychology'>Pyschology</option>
        </select><br></br>
        <button onClick={() => this.submit()}>Submit</button>
        {this.state.display && <div>User's name is {this.state.name}, and {this.state.pronoun} is from {this.state.hometown}. 
      {this.state.pronoun} was born on {this.state.birthday}, and {this.state.pronoun} favorite foods are {this.state.favFoods}. At Harvard, {this.state.pronoun} studies {this.state.concentration}.</div>}
      </React.Fragment>
    )
  }
}

export default Form;
