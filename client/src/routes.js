import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


// College mangement imports
const TeacherScores = React.lazy(() => import('./views/aicte/TeacherScores'));
const UploadCsv = React.lazy(() => import('./views/aicte/UploadCsv'));
const Logout = React.lazy(()=> import('./views/logout'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  // College management routes

  { path: '/aicte-score', name: 'aicte score', component: TeacherScores, exact: true },
  { path: '/aicte-score/teacher-scores', name: 'Teacher\'s Scores', component: TeacherScores },
  { path: '/aicte-score/upload-csv', name: 'Upload Csv', component: UploadCsv },

  { path: '/logout', name: 'logout', component: Logout, exact: true },
];

export default routes;
