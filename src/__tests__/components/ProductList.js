//1) probar el componente representacional de forma aislada

import React from 'react';
//import { shallow } from 'enzyme';
import { render , mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import  ConnectedProductList  from '../../components/ProductList';

const mockStore = configureStore();
//prueba de un componente de forma aislada
/*
it('renders no products when store is empty',() =>{

  const wrapper = shallow(<ProductList products={[]}/> );
  expect(wrapper.find(".product").length).toBe(0);

})
*/
//Prueba con mock
it('renders no products when store is empty',() =>{

  const store = mockStore({ products: [] });//usamos un mock en vez de un store verdadero

  const wrapper = render(<ConnectedProductList store={store} /> );
  expect(wrapper.find(".product").length).toBe(0);

})

//provaremos dos cosas mas
// cuando renderizamos productos le pasamos un producto a renderizar. tobe(1)
//agregar el producto a shopinCard Simunlamos un click con mount simulate(click)
it('renders product', () =>{
  const store = mockStore ({
    products : [{ id:1 , name:"Hola Mundo", price:100 , image:"" }]
  });

  const wrapper = render(<ConnectedProductList store = {store} />);
  expect(wrapper.find('.product').length).toBe(1);

});

it('adds a product to the Shopping cart', () => {
  const store = mockStore({
    products: [{id:1 , name:"Hola Mundo",price:100 , image:""}]
  });

  const wrapper = mount(<ConnectedProductList store={store} />);
  wrapper.find('#product-1 button').simulate('click');

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe("ADD_TO_CART");
  expect(actions[0].product).not.toBeNull();

})


//probar el compoente conectado el que retorna connect y usaremos un mock no el store. usaros una libreria llamada redux-mock-store
