import styled from "styled-components"

export default function Item({get, children}:any) {
  return (
    <Sld onClick={get}>{children}</Sld>
  )
}

const Sld = styled.div `
    font-size: 15px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`