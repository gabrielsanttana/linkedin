import React from 'react';
import {
  Container,
  Wrapper,
  LeftComponent,
  LinkedinIcon,
  SearchInput,
  RightComponent,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftComponent>
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </LeftComponent>

        <RightComponent>
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircle src="https://github.com/gabrielsanttana.png" />
              <span>
                Eu
                <CaretDownIcon />
              </span>
            </button>
          </nav>
        </RightComponent>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
