import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SvgJob = ({fill}) => {
  return (
    <Svg
      width={28}
      height={22}
      viewBox="0 0 39 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M35.284 4.533H28.47L27.217.775A1.133 1.133 0 0026.142 0h-13.6c-.488 0-.92.312-1.075.775l-1.253 3.758H3.4a3.404 3.404 0 00-3.4 3.4v6.8c0 .43.244.824.629 1.015l.504.251V30.6c0 1.875 1.526 3.4 3.4 3.4h29.618c1.875 0 3.4-1.525 3.4-3.4V15.999l.505-.25c.385-.192.628-.585.628-1.016v-6.8c0-1.874-1.525-3.4-3.4-3.4zM13.36 2.267h11.966l.756 2.266H12.604l.755-2.266zM35.284 30.6c0 .625-.508 1.133-1.133 1.133H4.533A1.135 1.135 0 013.4 30.6V17.126l10.358 5.15a3.405 3.405 0 003.318 2.657h4.533a3.405 3.405 0 003.317-2.656l10.358-5.15V30.6zm-19.342-9.067c0-.625.509-1.133 1.134-1.133h4.533a1.135 1.135 0 010 2.267h-4.533a1.135 1.135 0 01-1.134-1.134zm20.476-7.502L24.595 19.91a3.403 3.403 0 00-2.986-1.777h-4.533c-1.287 0-2.41.72-2.987 1.777L2.267 14.03V7.933c0-.625.508-1.133 1.133-1.133h31.884c.625 0 1.134.508 1.134 1.133v6.098z"
        fill={fill ? fill : '#fff'}
      />
    </Svg>
  );
};