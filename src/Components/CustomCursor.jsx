import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  return (
    <div className="App">
    <AnimatedCursor
  innerSize={15}
  outerSize={40}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: '#FFA588'
  }}
  showSystemCursor={false}
  outerStyle={{
    border: '3px solid white',
  }}
/>
    </div>
  );
}