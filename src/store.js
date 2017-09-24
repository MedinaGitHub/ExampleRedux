import {createStore , applyMiddleware , combineReducers} from 'redux';//combineReducers cada funcion se encarga de cierta parte dle estado

import thunk from 'redux-thunk';//para llamadas asincronas

const products = (state=[] , action) => {//Combine reducer solo manda parte del estaod segun la configuracion que le hagamos abajo

  if(action.type === "REPLACE_PRODUCTS"){
    return action.products;
  }

  /*es posible que con al ejecucion de add to cart tengamos que trabajar products  y ponemos
    else if(action.type === "ADD_TO_CART"){} como sacar algo del invenetario etc.
  */

  return state;
}

const cart = (state=[] , action) => {

  if(action.type === "ADD_TO_CART"){
      console.log('add');
      return  state.concat(action.product);
    }
  else if(action.type === "REMOVE_FROM_CART"){
    console.log('remove');
    return  state.filter( c => c.id !== action.product.id);
  }

  return state;
}


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
}

//combineReducers RECIBE UN OBJETO EN LA QUE CADA LLAVE DEFINE LA FUNCION QUE MANEJARA EL ESTADO SEGUN LA LLAVE QUE LE PONGAMOS,
//por ejemplo todo lo relacionado con cart, lo maneja el const cart. entonces en state=[] ya no recibe todo el state sino lo que venga como llave
//ya sea cart o products luego retorna lo que venga en product o cart
// cpmbone reducer ignora el segundo parametro ({cart : [] , products: [] }) por eso ponermos un parametro opcional o por defecto

export default createStore(combineReducers({cart, products}) , {cart : [] , products: [] } , applyMiddleware(logger,thunk));
