import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getFood} from '../actions/actions'
import '../App.css'

const FoodData = (props) => {

    useEffect(() => {
        props.getFood()
    }, [])
    
    return(
    <div>
    {props.isLoading === true ?  <p>Loading Food photos...</p> : null}
    {props.error ? <p>{props.error}</p> : null}
    <div className = 'images'>
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    <img src = {`${props.foods}`} alt = 'food' />
    </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
      isLoading: state.isLoading,
      foods: state.data,
      error: state.error
    }
  }

  export default connect(mapStateToProps,{getFood})(FoodData);
