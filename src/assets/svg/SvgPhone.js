import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPhone({height, width, fill}) {
  return (
    <Svg
      width={width ? width : 25}
      height={height ? height : 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.967 25a6.966 6.966 0 01-2.39-.427 25.482 25.482 0 01-9.252-5.898A25.48 25.48 0 01.427 9.422a6.915 6.915 0 01-.353-3.399 7.078 7.078 0 011.204-3.018A7.107 7.107 0 013.718.833 6.961 6.961 0 017.052 0c.368 0 .686.257.763.618L9.042 6.34a.781.781 0 01-.212.716L6.735 9.151a20.564 20.564 0 009.114 9.114l2.095-2.095a.782.782 0 01.716-.212l5.722 1.226c.36.078.618.396.618.764 0 1.185-.28 2.306-.833 3.334a7.106 7.106 0 01-2.173 2.44 7.076 7.076 0 01-3.017 1.204c-.337.05-.674.074-1.01.074zM6.427 1.597a5.411 5.411 0 00-3.87 2.305 5.382 5.382 0 00-.662 4.987 23.695 23.695 0 0014.216 14.216 5.382 5.382 0 004.987-.663 5.411 5.411 0 002.305-3.87l-4.655-.997-2.188 2.188a.78.78 0 01-.884.155A22.12 22.12 0 015.082 9.325a.781.781 0 01.155-.885l2.188-2.188-.998-4.655z"
        fill={fill || '#fff'}
      />
    </Svg>
  );
}

export default SvgPhone;
