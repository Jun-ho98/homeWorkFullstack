import React from 'react';
import Header from '../../shared/layouts/header/Header';
import Nav from '../../shared/layouts/nav/Nav';
import Footer from '../../shared/layouts/footer/Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
`;

const Main = styled.main`
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
`;

export default function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}
