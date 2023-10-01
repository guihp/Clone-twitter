import React from 'react';

import Feed from '../Feed'

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButtom } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
        <ProfileData>
            <EditButtom outlined>Editar Perfil</EditButtom>
            
            <h1>Guilherme Barros</h1>
            <h2>@guilherme_Barros</h2>

            <p>
                Developer At <a href="https://rocketseat.com.br">@Rocketseat</a>
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    São Luis, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 08 de Outubro de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672</strong> seguiores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;