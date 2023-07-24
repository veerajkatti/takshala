import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { FaUserCircle } from 'react-icons/fa'; 
import takshashila  from './takshashila.jpg';

const Nav = styled.div`
  background: #754c24;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin:0;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:black;
`;

const WelcomeText = styled.span`
  color: white;
  margin-left: 25px;
  width:20%;
  font-size:large;
`;

const SideText = styled.span`
  color: white;
  margin-left: 5px;
  width:10%;
  font-size:x-small;
 
`;

const ProfileIconWrapper = styled.div`
  font-size: 3rem;
  color: white;
  background:#754c24;
  display: flex;
  justify-content: left;
  align-items: left;
  height: 60px;
  margin-left:12px;
 
`;

const SidebarNav = styled.nav`
  background: #754c24;
  width: 150px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  width: ${({ sidebar }) => (sidebar ? '250px' : '0')};
  transition: 350ms;
  z-index: 10;
  overflow-y: auto;
`;

const SidebarWrap = styled.div`
  width: 200px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
              <WelcomeText></WelcomeText>
            </NavIcon>
            <ProfileIconWrapper>
            <img src={takshashila} id="profile-pic" className="matricalimg" alt="" />
             
            </ProfileIconWrapper>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      
    </>
  );
};

export default Sidebar;




