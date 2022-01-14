import * as React from 'react'
import { Stack } from '~/stack'
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps
} from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'

const CustomButtonRoot = styled('button')`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`

function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}

function UnstyledButtonsSimple_() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>Button</CustomButton>
      <CustomButton disabled>Disabled</CustomButton>
    </Stack>
  )
}

export const UnstyledButtonsSimple = () => <UnstyledButtonsSimple_ />
