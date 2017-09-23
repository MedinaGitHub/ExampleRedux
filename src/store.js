import {createStore} from 'redux';

const reduce = (state , action) => {

  if(action.type === "ADD_TO_CART"){
    console.log('add');
    return  {
      ...state,
      cart:state.cart.concat(action.product)
    }
  }

  else if(action.type === "REMOVE_FROM_CART"){
  console.log('remove');
/*
  this.setState({people: this.state.people.filter(function(person) {
       return person !== e.target.value
   })};
  */
  return {
    ...state,
    cart :state.cart.filter( c => c.id != action.product.id)
  }
  }

  return state;
}

export default createStore(reduce , {cart : [] });
