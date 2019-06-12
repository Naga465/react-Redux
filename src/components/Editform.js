import React from 'react'
import '../App.css';
import {connect} from 'react-redux'
import {updateProd} from '../actions/index'
import  {Redirect} from 'react-router-dom'
import {pricingInfo} from '../product-list'
import PropTypes from 'prop-types';


var val =  document.getElementById('Price Tier');

class Editform extends React.Component {
    constructor(props){
        super(props);
        this.state = {pTier:"",
                      move:false
                     }
        this.prodDet = {
            availability: "",
            isEditable: true,
            name: "",
            priceRange: "",
            pricingTier: "",
            productUrl: "",
            weight: 200
          };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
}
    onChange(e) {
        console.log(e.target.checked);
        if(e.target.name =="Price Tier"){
        let budget = e.target.value =="r1" ? "budget" :"primium";
        this.setState({pTier:budget}); 
        }
        else
        this.prodDet[e.target.name] = e.target.value;
      }

    onSubmit(e) {
    
        let checked = document.getElementById('isEditable').checked;
        this.prodDet['isEditable'] = checked;

        this.prodDet['pricingTier']= this.state.pTier;
     
        e.preventDefault();
        this.props.updateProd(this.prodDet,this.props.location.state);
        this.setState({move:true});
       
        
    }

   
    
    render(){
        let priceinfo = this.state.pTier == "budget" ? pricingInfo.budget : pricingInfo.premier;
        const form_text = ["name","weight","availability","productUrl"];
        console.log(this.props);

        if(this.state.move==true){
            return(
            <Redirect to={{
                      pathname:'/',
            }}/>)
        }
   
        return(
            <div className="App">
                <header className="App-header"> Edit Deatils
                </header>
                <div className = "form_cont">
                <h2>Product Details</h2>
                <form onSubmit={this.onSubmit}>
                {form_text.map((name) => 
                <div className="placehold_cont">
                <label>{name}</label>
                <input required="true" onChange={this.onChange} type = {name =='availability' ?"number" : "text"} name = {name} />
                </div>)}

                <div className="placehold_cont">
                <label>isEditable</label>
                <input required="true" id ="isEditable" type = 'checkbox' name ="isEditable"/>
                </div>
                <div className="placehold_cont">
                <label>priceTier</label>
                <input onChange={this.onChange} value = "r1" id ="budget" type = 'radio' name ="Price Tier"/> budget
                <input onChange={this.onChange} value ="r2" id ="premier" type = 'radio' name ="Price Tier"/> premier
                </div>
                <div className="placehold_cont">
                <label>priceRange</label>
                <select>
                    {priceinfo.map((name) =>
                    <option value= {name}>{name}</option>
                    )}
                </select>
                </div>
                <button className="small_but">Submit</button>
                </form> 
                </div>

            </div>
        )
    }
}

const mapStatetoProps = state => ({
    products:state.prod.prodData
});

Editform.propTypes = {
    updateProd: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};   

 

export default connect(mapStatetoProps,{updateProd})(Editform)