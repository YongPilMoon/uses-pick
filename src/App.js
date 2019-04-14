import React, {Component} from 'react';
import styles from './App.module.scss';
import images from './images';
import axios from 'axios';
import Product from './Product/Product';

const productPositions = [{
  top: '25%',
  left: '6%',
}, {
  top: '25%',
  right: '6%',
  alignRight: true,
}, {
  top: '62%',
  left: '6%',
}, {
  top: '44%',
  right: '6%',
  alignRight: true,
}, {
  bottom: '13%',
  right: '6%',
  alignRight: true,
}];

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    axios.get('https://s3.ap-northeast-2.amazonaws.com/zigzag-infographic/popular-keyword/latest/dat.json')
      .then(res => this.setState({data: res.data}))
  }


  render() {
    const {products} = this.state.data;
    return (
      <div className={styles.app}>
        <div className={styles.imgWrapper}>
          <img src={images.background} alt="background"/>
          {products && products.map((product, i) =>
            <Product
              position={productPositions[i]}
              right={productPositions[i].alignRight}
              key={product.name}
              name={product.name}
              count={product.count}
              description={product.description}
              url={product.url}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
