import React from 'react';
import { ColorChangeHandler, SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { getMainColor, setColor } from '@store/Settings';

const Palette = () => {
  const dispatch = useDispatch();
  const color = useSelector(getMainColor);

  const handleChangeColor: ColorChangeHandler = color => {
    dispatch(setColor(color.rgb));
  };

  return <SketchPicker color={color} onChange={handleChangeColor} />;
};

export default Palette;
