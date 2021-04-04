import React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  title: string
  subtitle?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1`
  color: ${(props) => props.theme.color.primary};
`

const Subtitle = styled.p``

export default (props: IHeadingProps) => {
  const { title, subtitle } = props

  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}
