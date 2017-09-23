import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {removeFromCart} from '../actionCreators';
import {connect} from 'react-redux';//de redux

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}
//Esto quedo como un componente Representacional o funcional no tiene ni logica ni estado todo se lo pasamos a tra ves de prorps
 const ShoppingCart = ({cart,removeFromCart}) =>{ //destructurar un argumento en ecma2015 es propr pero descompuesta en sus diferentes llaves
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
}


const mapStateToProps = state => {
  return {//este objeto se entrega como props Representacional
    cart: state.cart//cart como estado compartido de redux
  };
}

const mapDistpachtToProps = dispatch => {
  return {
    removeFromCart(product){//recivimos un product
      dispatch(removeFromCart(product))
    }
  }
}

export default connect(mapStateToProps,mapDistpachtToProps)(ShoppingCart);//recibe 2 funciones la primera es mapStateToProps que retorna un objeto que es el qeu le pasaremos como proprs
