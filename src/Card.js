import React from 'react';
import ReactDom from 'react-dom';
import NumberFormat from 'react-number-format';
import InputMask from 'react-input-mask';
import card from './card.jpg'
import logo from './mastercard.png'
class Card extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {name: '',num:'',date: '',numCarte:''};

      this.handleChange = this.handleChange.bind(this);
      this.handleChangeNumCarte = this.handleChangeNumCarte.bind(this);
  }

  inputChangedHandlerNum = (event) => { 
    if(event.target.value.length <20){
      //Update your state
      this.setState({num: event.target.value});
   }
   else{alert("your num is to long")
     }
  }
inputChangedHandlerDate = (ev) => { 
      if((ev.target.value.length<6)&&(ev.target.value.slice(0,2)<13))
        this.setState({date: ev.target.value})
        else alert("Please enter a valid date")
}
handleChange(event) {
    if(event.target.value.length<=20)
  { this.setState({name: event.target.value});} 
  else return
}
handleChangeNumCarte(e) {
  if (/^\d+$/.test(e.target.value)&&(e.target.value.length<=16))
{ this.setState({numCarte: e.target.value});} 
else return
}
test(str) {
  var tab=[]
  for(var i=0;i<str.length;i+=4)
    {
      var test=str.slice(i,i+4)
     tab.push(test)
      
    }
  return tab.join(' ')
 }
 testDate(st) {
  var t=[]
  for(var i=0;i<st.length;i++)
    {
      var testDate=st.slice(i,i+2).concat("/")
     t.push(testDate)
    }
  return t
 }
  render() {
    return (
 <div className="container">
  <div className="cardForm">
    <div >
      <label>Name</label>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
    </div>
  <div>
     <label>Num Carte js</label>
        <input type="text" value={this.state.numCarte} onChange={this.handleChangeNumCarte} />
          <p>{this.test(this.state.numCarte.padEnd(16,"*"))}</p>
  </div>
  <div className="cardDynamic">
  <label>Card Num : </label>
        <InputMask  mask="9999 9999 9999 9999" maskChar={null}  onChange={this.inputChangedHandlerNum}  />
       
  </div>
  <div className="dateCard">
      <label>Valid Date : </label>
     <InputMask  mask="99/99" maskChar={null}  onChange={this.inputChangedHandlerDate}  placeholder='mm/yy'  />    
</div>
</div>
  <div className="creditCardDynamic">
      <h1>Company Name</h1>
     <img className="puce" src={card}/>
   <NumberFormat format="#### #### #### ####" mask="*" className="cardNum" placeholder="**** **** **** ****" onChange={this.inputChangedHandlerNum} value={this.state.num}/>
   <NumberFormat format="##/##" mask="*" className="cardDate" placeholder="**/**" value={this.state.date}/>  
   <img className="logo" src={logo}/>
   <p>{this.state.name.toUpperCase()}</p>
  </div>  
</div>
    )
  }
}

export default Card;




