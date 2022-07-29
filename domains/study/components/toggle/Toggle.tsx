import React, { ChangeEvent } from 'react';

import * as S from './Toggle.styled';

interface Props {
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const Toggle = ({ checked, handleChange, id }: Props) => {
  return (
    <S.ToggleWrapper checked={checked} htmlFor={id}>
      <S.ToggleCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={id}
      />
      <S.Ball checked={checked} />
    </S.ToggleWrapper>
  );
};

export default Toggle;
