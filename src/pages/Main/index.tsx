import styled from "styled-components";
import Block from "../../components/Block";
import Title from "../../components/Title";
import Item from "../../components/Item";
import useIBGE from "../../hooks/useIBGE";

export default function Main() {
  const { regioes, ufs, cidades, ufLoading, mesoLoading, getUfs, getCidades } = useIBGE();
  return (
    <WrapperSld>
      {regioes.length === 0 ?(
        <Block>
        <Title>Regiões</Title>
        <Title>Carregnado...</Title>
        </Block>
      ):(
        <Block>
          <Title>Regiões</Title>
          <ItemsSld>
          {regioes.map((regiao) => (
            <Item key={regiao.id} get={() => getUfs(regiao.id)}>
              {regiao.nome}
            </Item>
          ))}
        </ItemsSld>
        </Block>
      )}

      {ufLoading ? (
        <Block>
          < Title>Estado</Title>
          <Title>Carregando...</Title>
        </Block>
      ) : (
        <Block>
        <Title>Estados</Title>
          <ItemsSld>
            {ufs.map((uf) => (
              <Item key={uf.id} get={() => getCidades(uf.sigla)}>
                {uf.nome}
              </Item>
            ))}
          </ItemsSld>
        </Block>
        )}
      {mesoLoading ? (
      <Block>
        <Title>Mesorregiões</Title>
        <Title>Carregando...</Title>
      </Block>
    ) : (
      <Block>
          <Title>Mesorregiões</Title>
          <ItemsSld>
            {cidades.map((cidade) => (
              <Item key={cidade.id}>{cidade.nome}</Item>
            ))}
          </ItemsSld>
      </Block>
    )}
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemsSld = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
