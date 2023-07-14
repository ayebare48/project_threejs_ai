import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';
// import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#000000', '#ca2028', '#ff0000', '#0000ff', '#ffff00', '#00ffff', '#ff00ff' 
        ]}
        onChange={(color)=> state.color = color.hex}
      
      />

    </div>
  )
}

export default ColorPicker