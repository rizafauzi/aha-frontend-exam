import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
import Color from '@styles/color'

export const MuiTabs = styled(Tabs)`
  && {
    display: grid;
    flex-direction: row;

    button {
      width: 50%;
      font-size: 16px;
      text-transform: none;
      color: ${Color.black50};
      font-family: 'Ubuntu', sans-serif;
    }

    button.Mui-selected {
      font-weight: 700;
      font-size: 16px;
      text-transform: none;
      color: ${Color.white};
      font-family: 'Ubuntu', sans-serif;
    }
  }
`

export default MuiTabs
