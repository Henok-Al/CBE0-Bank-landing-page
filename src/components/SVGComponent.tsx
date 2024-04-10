import * as React from "react";
const SVGComponent = (props) => (
  <div>
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 690"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
    {...props}
  >
    <style>
      {
        '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,700 L 0,175 C 155.46666666666664,190.86666666666667 310.9333333333333,206.73333333333335 471,213 C 631.0666666666667,219.26666666666665 795.7333333333333,215.9333333333333 958,208 C 1120.2666666666667,200.0666666666667 1280.1333333333332,187.53333333333336 1440,175 L 1440,700 L 0,700 Z");\n            }\n            25%{\n              d: path("M 0,700 L 0,175 C 105.46666666666664,198.2 210.93333333333328,221.4 400,202 C 589.0666666666667,182.6 861.7333333333333,120.60000000000001 1049,109 C 1236.2666666666667,97.39999999999999 1338.1333333333332,136.2 1440,175 L 1440,700 L 0,700 Z");\n            }\n            50%{\n              d: path("M 0,700 L 0,175 C 137.46666666666664,126.86666666666666 274.9333333333333,78.73333333333332 445,95 C 615.0666666666667,111.26666666666668 817.7333333333333,191.93333333333337 989,216 C 1160.2666666666667,240.06666666666663 1300.1333333333332,207.5333333333333 1440,175 L 1440,700 L 0,700 Z");\n            }\n            75%{\n              d: path("M 0,700 L 0,175 C 129.06666666666666,181.26666666666665 258.1333333333333,187.53333333333333 431,178 C 603.8666666666667,168.46666666666667 820.5333333333333,143.13333333333333 996,140 C 1171.4666666666667,136.86666666666667 1305.7333333333333,155.93333333333334 1440,175 L 1440,700 L 0,700 Z");\n            }\n            100%{\n              d: path("M 0,700 L 0,175 C 155.46666666666664,190.86666666666667 310.9333333333333,206.73333333333335 471,213 C 631.0666666666667,219.26666666666665 795.7333333333333,215.9333333333333 958,208 C 1120.2666666666667,200.0666666666667 1280.1333333333332,187.53333333333336 1440,175 L 1440,700 L 0,700 Z");\n            }\n          }'
      }
    </style>
    <path
      d="M 0,700 L 0,175 C 155.46666666666664,190.86666666666667 310.9333333333333,206.73333333333335 471,213 C 631.0666666666667,219.26666666666665 795.7333333333333,215.9333333333333 958,208 C 1120.2666666666667,200.0666666666667 1280.1333333333332,187.53333333333336 1440,175 L 1440,700 L 0,700 Z"
      stroke="none"
      strokeWidth={0}
      fill="#f8eab6"
      fillOpacity={0.53}
      className="transition-all duration-300 ease-in-out delay-150 path-0"
    />
    <style>
      {
        '\n          .path-1{\n            animation:pathAnim-1 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-1{\n            0%{\n              d: path("M 0,700 L 0,408 C 196.2666666666667,398.79999999999995 392.5333333333334,389.59999999999997 563,376 C 733.4666666666666,362.40000000000003 878.1333333333334,344.4 1020,349 C 1161.8666666666666,353.6 1300.9333333333334,380.8 1440,408 L 1440,700 L 0,700 Z");\n            }\n            25%{\n              d: path("M 0,700 L 0,408 C 130.2666666666667,403.73333333333335 260.5333333333334,399.46666666666664 425,418 C 589.4666666666666,436.53333333333336 788.1333333333334,477.8666666666667 963,480 C 1137.8666666666666,482.1333333333333 1288.9333333333334,445.06666666666666 1440,408 L 1440,700 L 0,700 Z");\n            }\n            50%{\n              d: path("M 0,700 L 0,408 C 210.8,448.66666666666663 421.6,489.3333333333333 562,476 C 702.4,462.6666666666667 772.4000000000001,395.33333333333337 907,375 C 1041.6,354.66666666666663 1240.8,381.3333333333333 1440,408 L 1440,700 L 0,700 Z");\n            }\n            75%{\n              d: path("M 0,700 L 0,408 C 203.2,382.26666666666665 406.4,356.53333333333336 552,364 C 697.6,371.46666666666664 785.5999999999999,412.1333333333333 924,425 C 1062.4,437.8666666666667 1251.2,422.93333333333334 1440,408 L 1440,700 L 0,700 Z");\n            }\n            100%{\n              d: path("M 0,700 L 0,408 C 196.2666666666667,398.79999999999995 392.5333333333334,389.59999999999997 563,376 C 733.4666666666666,362.40000000000003 878.1333333333334,344.4 1020,349 C 1161.8666666666666,353.6 1300.9333333333334,380.8 1440,408 L 1440,700 L 0,700 Z");\n            }\n          }'
      }
    </style>
    <path
      d="M 0,700 L 0,408 C 196.2666666666667,398.79999999999995 392.5333333333334,389.59999999999997 563,376 C 733.4666666666666,362.40000000000003 878.1333333333334,344.4 1020,349 C 1161.8666666666666,353.6 1300.9333333333334,380.8 1440,408 L 1440,700 L 0,700 Z"
      stroke="none"
      strokeWidth={0}
      fill="#f8eab6"
      fillOpacity={1}
      className="transition-all duration-300 ease-in-out delay-150 path-1"
    />
    
  </svg>
  
  </div>
);
export default SVGComponent;
