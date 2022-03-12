import styled from 'styled-components'
import Color from '@styles/color'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  width: calc(100% - 455px);
  background: ${Color.black90};
  @media only screen and (max-width: 1439px) {
    width: calc(100% - 80px);
  }
`

export default Container
