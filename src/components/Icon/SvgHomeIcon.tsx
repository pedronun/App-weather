import Svg, {
  G,
  Path,
  Circle,
  Mask,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SVGComponent = () => (
  <Svg
    width={266}
    height={100}
    viewBox="0 0 266 100"
    fill="none"
    style={{ position: "absolute", bottom: 0 }}
  >
    <G filter="url(#a)">
      <Path
        d="M112 0h42c32 0 41.501 24.14 51.732 48.699C216.325 74.124 227 100 262 100H4c35 0 45.675-25.875 56.268-51.301C70.498 24.139 80 0 112 0Z"
        fill="url(#b)"
      />
      <Path
        d="M112 .25h42c15.923 0 26.229 6 33.838 15.05 7.372 8.77 12.215 20.404 17.156 32.275l.508 1.22.102.247c5.259 12.623 10.576 25.385 18.921 35.006 7.047 8.125 16.252 14.007 29.384 15.702H12.091c13.133-1.695 22.337-7.577 29.385-15.702 8.345-9.62 13.661-22.383 18.92-35.006l.103-.247.507-1.22c4.941-11.87 9.784-23.505 17.156-32.274C85.77 6.25 96.077.25 112 .25Z"
        stroke="#7582F4"
        strokeOpacity={0.5}
        strokeWidth={0.5}
      />
    </G>
    <G filter="url(#c)">
      <Circle cx={133} cy={44} r={32} fill="url(#d)" fillOpacity={0.4} />
    </G>
    <G filter="url(#e)">
      <Circle cx={133} cy={44} r={29} fill="url(#f)" />
      <Circle cx={133} cy={44} r={28.9} stroke="url(#g)" strokeWidth={0.2} />
    </G>
    <Mask
      id="i"
      maskUnits="userSpaceOnUse"
      x={104}
      y={15}
      width={58}
      height={58}
    >
      <Circle cx={133} cy={44} r={29} fill="url(#h)" />
    </Mask>
    <G mask="url(#i)">
      <G filter="url(#j)">
        <Path
          d="M162 44c0 16.016-12.984 29-29 29s-29-12.984-29-29 12.984-29 29-29 29 12.984 29 29Zm-55.1 0c0 14.415 11.685 26.1 26.1 26.1 14.415 0 26.1-11.685 26.1-26.1 0-14.415-11.685-26.1-26.1-26.1-14.415 0-26.1 11.685-26.1 26.1Z"
          fill="url(#k)"
        />
      </G>
      <Path
        d="M121.269 44.129c0 1.148.93 2.078 2.078 2.078h7.588v7.588c0 1.135.916 2.078 2.065 2.078a2.086 2.086 0 0 0 2.078-2.078v-7.588h7.588a2.071 2.071 0 0 0 0-4.142h-7.588v-7.588c0-1.135-.93-2.079-2.078-2.079a2.074 2.074 0 0 0-2.065 2.079v7.588h-7.588c-1.148 0-2.078.93-2.078 2.064Z"
        fill="#48319D"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={183.615}
        y1={100}
        x2={183.615}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#262C51" />
        <Stop offset={1} stopColor="#3E3F74" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={112.5}
        y1={25}
        x2={151.5}
        y2={71}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.76} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={118}
        y1={23}
        x2={149.5}
        y2={67.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5F5F9" />
        <Stop offset={1} stopColor="#DADFE7" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={112.833}
        y1={24.833}
        x2={147.167}
        y2={70.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#AEAEAE" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={118}
        y1={23}
        x2={149.5}
        y2={67.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5F5F9" />
        <Stop offset={1} stopColor="#DADFE7" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={108.791}
        y1={25.201}
        x2={133}
        y2={73}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={1} stopColor="#BBBFC7" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
