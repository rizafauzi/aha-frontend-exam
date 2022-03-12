import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput'
import Color from '@styles/color'

const StyledInput = styled(OutlinedInput)`
  && {
    height: 60px;
    border: none !important;
    outline: none !important;

    fieldset {
      border: none !important;
      outline: none !important;
    }

    input {
      color: white;
      height: 60px;
      border-radius: 6px;
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
      border: 3px solid rgba(255, 255, 255, 0.5);
      font-family: important 'Ubuntu', sans-serif;

      &:focus {
        border-radius: 6px;
        box-sizing: border-box;
        border: 3px solid ${Color.orange50};
      }
    }
  }
`

export default StyledInput
