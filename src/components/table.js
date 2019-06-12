import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {UPDATE_PRODUCTS } from '../actions/type'
import { browserHistory } from 'react-router'
import  {Redirect} from 'react-router-dom'
import { runInThisContext } from 'vm';



class Table extends React.Component{
    constructor(props) {
    super()
    this.state = {
        editProd:false,
        prodId:''
    }
}
    
onEdit = (e) =>{
    this.setState({editProd:true ,prodId:e.path[1].id});
}
    componentDidMount() {
        var ele = document.getElementsByTagName("td");
        let counter = 0;
        for(let i =0;i<ele.length;i++){
          
            if(ele[i].textContent =="true"){
                
                let id =  document.getElementById(counter+'i');
                console.log(ele[i].textContent)
                ele[i].bgColor ="green";
                let node = document.createElement('th');
                node.textContent = "Edit";
                node.style.fontSize="16px"
                node.style.cursor="pointer";
                node.style.background="#000080";
                node.style.color="white";
                node.style.borderRadius="3px";
                node.addEventListener("click", this.onEdit);
                id.appendChild(node);
                counter++;
            }
    }
 
    }
    
    render(){
        if(this.state.editProd==true){
            return(
            <Redirect to={{
                      pathname:'/edit-products',
                      state:parseInt(this.state.prodId.slice(0,1))
            }}/>)
        }
        console.log("props",this.props);
        
        const headers = Object.keys(this.props.products[0]);
        const clm = headers.map((number) => <th>{number}</th>)
        const row = this.props.products.map((i ,index) => <tr id = {index +"i"}>
        {Object.values(i).map((values, index) => 
            <td>{values.toString()}</td>)}
       </tr>)
          
        return(
        <div>
            <table>
                <tr>
                { clm }
                </tr>
                {row }
            </table>

        </div>
            )
        }
        }
        



const mapStatetoProps = state => ({
    products:state.prod.prodData
});
 

export default connect(mapStatetoProps)(Table);