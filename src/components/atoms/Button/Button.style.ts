import styled from 'styled-components'
import Button from '@mui/material/Button'
import Color from '@styles/color'

const StyledButton = styled(Button)`
  && {
    height: 40px;
    font-weight: 700;
    color: ${Color.black90};
    background: ${Color.white};
    border: solid 1px ${Color.white};
    font-family: 'Ubuntu', sans-serif;

    &:hover {
      display: 'flex';
      color: ${Color.white};
      background: ${Color.black90};
    }
  }
`

export default StyledButton
