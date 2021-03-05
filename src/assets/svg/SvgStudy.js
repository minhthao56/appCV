import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStudy({width, height, fill}) {
  return (
    <Svg
      width={width || 42}
      height={height || 30}
      viewBox="0 0 42 30"
      fill="none">
      <Path
        d="M40.952 8.586L21.387.108a1.304 1.304 0 00-1.038 0L.784 8.586c-1.045.453-1.046 1.94 0 2.393l7.04 3.051v8.144c0 4.388 5.73 7.826 13.044 7.826s13.044-3.438 13.044-7.826V14.03l1.304-.565v13.926a1.304 1.304 0 002.609 0V12.335l3.127-1.356c1.045-.452 1.046-1.94 0-2.393zm-20.084-5.86l16.285 7.057-1.292.56L21.03 8.487a1.305 1.305 0 00-.324 2.589l10.447 1.306-10.285 4.456L4.583 9.783l16.285-7.057zm10.435 19.448c0 1.229-1.009 2.494-2.768 3.471-4.188 2.327-11.133 2.334-15.334 0-1.76-.977-2.768-2.242-2.768-3.471v-7.013l9.916 4.297c.33.143.706.143 1.038 0l9.916-4.297v7.013z"
        fill={fill || '#536886'}
      />
    </Svg>
  );
}

export default SvgStudy;
