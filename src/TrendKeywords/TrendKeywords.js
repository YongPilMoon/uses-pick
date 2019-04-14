import React from 'react';
import ReactWordcloud from "react-wordcloud";

const TrendKeywords = ({fontFamily, trendKeywords, fontSizes, size}) => {
  return (
      <ReactWordcloud
        words={trendKeywords.map(trendKeyword => ({ text: trendKeyword.name, value: trendKeyword.value }))}
        size={[size, size]}
        minSize={[size, size]}
        options={{
          colors: ['#000000'],
          fontSizes: fontSizes,
          fontFamily: fontFamily,
          fontWeight: 'bold',
          rotations: 1,
          rotationAngles: [0]
        }}
      />
  );
};

export default TrendKeywords;
