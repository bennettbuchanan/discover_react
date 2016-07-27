import React from 'react';
import Image from './Image.js'
import PrimaryButton from './PrimaryButton.js';

const styles = {
  name: {
    textDecoration: 'underline'
  },

  item: {
    width: '200px',
    border: '1px solid lightgray',
    padding: '10px',
    borderRadius: '3px'
  },

  button: {
    borderRadius: '3px',
    textAlign: 'center',
    padding: '10px',
    color: 'white',
    backgroundColor: 'lightblue'
  }
}

const Product = (props) => (
  <div style={styles.item}>
    <h3 style={styles.name}>{props.name}</h3>
    <Image
      imageUrl={props.imageUrl}
      height={120}
      width={120} />
    <p>Quantity available: {props.quantityAvailable}</p>
    <p>Price: {props.price}</p>
    <PrimaryButton
      text="Buy now" />
  </div>
);

Product.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.string,
  quantityAvailable: React.PropTypes.number,
};

Product.defaultProps = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
  price: "0.99$",
  quantityAvailable: 0,
};

export default Product;
