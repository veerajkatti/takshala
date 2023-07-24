import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';
import { BsChatDotsFill} from 'react-icons/bs';

export const SidebarData = [
 {
    title: '',
    path: '/dashboard',
    icon: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'30px',marginTop:'30px' }}>
      <RiDashboardLine style={{ width: '100px', height: '50px' }} />
      <span style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>Dashboard</span>
    </div>
    ),
  },
  {
    title: '',
    path: '/Profile',
    icon: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'10px' }}>
     <IoIcons.IoMdPeople style={{ marginLeft: '25px',marginTop:'25px',width:'100px',height:'50px' }} />
      <span style={{ marginTop: '1px', fontSize: '16px', fontWeight: 'bold',marginLeft:'15px' }}>Profile</span>
    </div>
     
    ),
  },
    
  {
    title: '',
    path: '',
    icon: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'10px' }}>
    <AiIcons.AiOutlineSchedule style={{ marginLeft: '25px',marginTop:'50px',width:'100px',height:'50px' }} />
        <span style={{ marginTop: '3px', fontSize: '16px', fontWeight: 'bold',marginLeft:'15px' }}>Task</span>
    </div>
     
     
    ),
    subNav: [
      {
        title: 'Assign Task',
        path: '/Lead',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Lead',
        path: '/Task',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
 
  
  {
    title: '',
    path: '/Chatbox',
    icon: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'30px',marginTop:'30px' }}>
      <BsChatDotsFill style={{ width: '100px', height: '50px' }} />
      <span style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>Chat Area</span>
    </div>
    ),
  },
  {
    title: '',
    path: '/',
    icon: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'10px' }}>
     <IoMdLogOut style={{ marginLeft: '25px',marginTop:'25px',width:'100px',height:'50px' ,transform:'rotate(180deg)' }} />
      <span style={{ marginTop: '1px', fontSize: '16px', fontWeight: 'bold',marginLeft:'15px' }}>logout</span>
    </div>
     
    ),
  },
    
];