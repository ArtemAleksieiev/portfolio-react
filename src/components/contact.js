import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

const API_PATH = 'http://localhost:1992/portfolio-react/api/contact/index.php';

class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    fname: '',
    lname: '',
    email: '',
    message: '',
    mailSent: false,
    error: null
  }
}
handleFormSubmit = e => {
   e.preventDefault();
   axios({
       method: 'POST',
       url: `${API_PATH}`,
       headers: { 'content-type': 'application/json' },
       data: this.state
     })
   .then(result => {
     this.setState( {
       mailSent: result.data.sent
     })
     console.log(this.state);
   })
   .catch(error => this.setState( { error: error.message } ));
 };


  componentWillMount() {
    document.body.style.background = "linear-gradient(to top, #2B32B2, #1488CC)";
  }
  render() {
    return(
      <div className="contact-body">
       <Grid className="contact-grid">
         <Cell col={6}>
           <h2>Artem Aleksieiev</h2>
           <img
             src={require("../img/photo.jpg")}
             alt="avatar"
             style={{height: '300px'}}
              />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
         </Cell>
         <Cell col={6}>

           <hr/>
           <div className="contact-list">
             <List>
               <ListItem style={{padding: '0px'}}>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <img
                   className="logo-img"
                   src={require("../img/phone-square-solid.svg")}
                   alt="phone"
                   style={{height: '40px'}}
                    />
                     (917) 499-1966
                 </ListItemContent>
               </ListItem>
               <ListItem style={{padding: '0px'}}>
                 <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                 <img
                   className="logo-img"
                   src={require("../img/envelope-square-solid.svg")}
                   alt="e-mail"
                   style={{height: '40px'}}
                   />
                     artem_alexeev@hotmail.com
                 </ListItemContent>
               </ListItem>
               <ListItem style={{padding: '0px'}}>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <img
                   className="logo-img"
                   src={require("../img/skype-brands.svg")}
                   alt="skype"
                   style={{height: '40px'}}
                    />
                     skype_a_artem
                 </ListItemContent>
               </ListItem>
             </List>
             <div>
    <form action="#">
    <label>First Name</label>
    <input type="text" id="fname"
     name="firstname"
     placeholder="Your name.."
     value={this.state.fname }
     onChange={e => this.setState({ fname: e.target.value })}
     />

    <label>Last Name</label>
    <input type="text" id="lname"
    name="lastname"
    placeholder="Your last name.."
    value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}
    />

    <label>Email</label>
    <input type="email" id="email"
    name="email" placeholder="Your email"
    value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}
    />
    <label>Message</label>
    <textarea id="message" name="message" placeholder="Write something.."
    onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}>
    </textarea>

    <input type="submit"
    onClick = {e => this.handleFormSubmit(e)}
    value="Submit" />
    <div>
    {this.state.mailSent  &&
            <div className="sucsess">Thank you for contcting me.</div>
    }
    {this.state.error  &&
            <div className="error">Sorry we had some problems.</div>
    }
    </div>
    <div>
  {this.state.mailSent &&
    <div>Thank you for contacting me.</div>
  }
</div>
    </form>
    </div>

           </div>
         </Cell>
       </Grid>
     </div>
    )
  }
}

export default Contact;
