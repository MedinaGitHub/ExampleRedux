import React  from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import {addToCart} from '../actionCreators';
import {connect} from 'react-redux';//de redux

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export const  ProductList = ({products,addToCart}) => { //le añadi el export al principio para testear este componente

    return (
      <div style={styles.products}>
        {products.map(product =>
          <div id={"product-" + product.id} className="thumbnail product" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );



}


const mapStateToProps = state => {
  return {//este objeto se entrega como props Representacional
    products: state.products//cart como estado compartido de redux
  };
}

const mapDistpachtToProps = dispatch => {
  return {
    addToCart(product){
      dispatch(addToCart(product))
    }
  }
}

// el connect devuelve un nuevo componente,
//por eso ya no necesita la palabra export si la tiene es por el tema del testing
export default connect(mapStateToProps,mapDistpachtToProps) (ProductList);
