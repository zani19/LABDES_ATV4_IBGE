import styled from "styled-components";

export default function Block({children}:any) {
  return (
    <WrapperSld>
      {children}
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 10px;
  width: 300px;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
`;
