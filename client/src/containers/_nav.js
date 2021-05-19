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
    _tag: 'CSidebarNavDropdown',
    name: 'Student Academics',
    route: '/student-academics',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Enroll Student',
        to: '/student/enroll-student',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Data Entry',
        to: '/student/student-data-entry',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Academic Data',
        to: '/student/student-data-view',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Promote Student',
        to: '/student/promote-student',
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
