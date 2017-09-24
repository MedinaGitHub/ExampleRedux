import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
//Prueba Jest archivo creado solo con una prueba basica que testea que  el componente app.js se renderize correctamente
it('renders without crashing', () => {
  shallow(<App/>);
});
