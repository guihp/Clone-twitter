import React from 'react';

import StickyBox from 'react-sticky-box';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no twitter" />
            <SearchIcon />
        </SearchWrapper>
        <StickyBox>
        <Body>
            <List 
            title='Talvez você curta'
            elements={[
            <FollowSuggestion 
              name="Izadora Carreiro"
              nickname="@izadoracarreiro"
            />,
            <FollowSuggestion 
            name="Pedro Neto"
            nickname="@pedroneto"
          />,
          <FollowSuggestion 
          name="Padaria Ideal"
          nickname="@Padaria Ideal"
        />,
            ]}/>
            <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
              <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
              <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
              <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
              <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
        </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;