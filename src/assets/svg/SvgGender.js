import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGender({width, height}) {
  return (
    <Svg
      width={width ? width : 25}
      height={height ? height : 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.768 6.64c0-3.632 2.959-6.64 6.591-6.64C21.992 0 25 3.008 25 6.64c0 3.384-2.627 6.153-5.908 6.52v4.467h2.197c.41 0 .732.322.732.732s-.322.733-.732.733h-2.197v2.197c0 .41-.322.732-.733.732a.725.725 0 01-.732-.732v-2.197H15.43a.725.725 0 01-.733-.733c0-.41.323-.732.733-.732h2.197v-4.468c-3.281-.366-5.86-3.135-5.86-6.518zm6.591 5.128c2.827 0 5.176-2.3 5.176-5.127 0-2.828-2.349-5.176-5.176-5.176s-5.127 2.348-5.127 5.176c0 2.827 2.3 5.127 5.127 5.127zM5.908 11.84V5.484l-1.684 1.67a.708.708 0 01-1.026 0 .708.708 0 010-1.025l2.93-2.93a.708.708 0 011.025 0l2.93 2.93a.708.708 0 010 1.025.708.708 0 01-1.025 0l-1.685-1.67v6.358c3.281.366 5.86 3.135 5.86 6.518 0 3.633-2.96 6.641-6.592 6.641C3.008 25 0 21.992 0 18.36c0-3.384 2.627-6.153 5.908-6.52zm.733 11.695c2.827 0 5.127-2.349 5.127-5.176s-2.3-5.127-5.127-5.127c-2.828 0-5.176 2.3-5.176 5.127s2.348 5.176 5.176 5.176z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgGender;
