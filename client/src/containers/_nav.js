import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'AICTE Score',
    route: '/aicte-score',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Teacher\'s Score',
        to: '/aicte-score/teacher-scores',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Upload Response CSV',
        to: '/aicte-score/upload-csv',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/logout',
    icon: 'cil-chevron-left'
  },
  
]

export default _nav
