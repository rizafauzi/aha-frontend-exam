import styled from 'styled-components'
import Color from '@styles/color'

export const FollowWrapper = styled.div`
  width: 375px;
  display: grid;
  column-gap: 24px;
  min-height: 100vh;
  grid-template-columns: 100%;
  background: ${Color.black70};
  /* @media only screen and (max-width: 1439px) {
    display: none;
  } */
`

export default FollowWrapper
