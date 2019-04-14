import React, {Component} from 'react';
import styles from './App.module.scss';
import images from './images';
import axios from 'axios';
import Product from './Product/Product';
import TrendKeywords from './TrendKeywords/TrendKeywords';
import MediaQuery from 'react-responsive';

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
  top: '77%',
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
    const {products, trendKeywords} = this.state.data;
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
          {trendKeywords && <div className={styles.trendKeywords}>
            <MediaQuery query="(min-device-width: 500px)">
              <TrendKeywords
                size={110}
                fontSizes={[10, 20, 30]}
                fontFamily={'NanumSquare'}
                trendKeywords={trendKeywords}/>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 500px)">
              <TrendKeywords
                size={100}
                fontSizes={[10, 14, 20]}
                fontFamily={'NanumSquare'}
                trendKeywords={trendKeywords}/>
            </MediaQuery>
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
