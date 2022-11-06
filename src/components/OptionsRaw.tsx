import React from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { flexBox } from '../styles/mixin';

type OptionRawProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  onClick?: () => void;
};

function OptionRaw({ children, isSelected, customStyle, onClick }: OptionRawProps) {
  if (isSelected)
    return (
      <SelectedOption customStyle={customStyle} onClick={onClick}>
        {children}
      </SelectedOption>
    );

  return (
    <Option className="trigger-dropdown" customStyle={customStyle} onClick={onClick}>
      {children}
    </Option>
  );
}

export default OptionRaw;

const Option = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined }>`
  ${flexBox('row', 'space-between')};
  border-radius: 10px;
  cursor: pointer;
  ${({ customStyle }) => customStyle};
`;

const SelectedOption = styled(Option)`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.grey_50};
  ${({ customStyle }) => customStyle};
`;
