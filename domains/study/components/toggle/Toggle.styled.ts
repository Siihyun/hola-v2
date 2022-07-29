import styled from '@emotion/styled';

export const ToggleWrapper = styled.label<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  background-color: ${({ checked }) => (checked ? '#ffcd00' : '#c1cbd8')};
  border-radius: 50px;
  cursor: pointer;
`;

export const ToggleCheckbox = styled.input`
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

export const Ball = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background-color: #ffffff;
  border-radius: 50%;
  transform: ${({ checked }) => (checked ? 'translateX(24px)' : '')};
  transition: transform 0.2s linear;
`;
