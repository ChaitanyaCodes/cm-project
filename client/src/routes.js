import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/profile/Profile'))


// College mangement imports
const Logout = React.lazy(()=> import('./views/logout'));

//aicte-score imports
const AicteScoreDescription = React.lazy(() => import('./views/aicte/AicteScoreDescription'));
const TeacherScores = React.lazy(() => import('./views/aicte/TeacherScores'));
const UploadCsv = React.lazy(() => import('./views/aicte/UploadCsv'));

//student imports
const EnrollStudent = React.lazy(() => import('./views/student/EnrollStudent'));
const StudentDataEntry = React.lazy(() => import('./views/student/StudentDataEntry'));
const StudentData = React.lazy(() => import('./views/student/StudentData'));
const PromoteStudent = React.lazy(() => import('./views/student/PromoteStudent'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },

  // College management routes

  // AICTE-SCORE routes
  { path: '/aicte-score', name: 'AICTE Score', component: TeacherScores, exact: true },
  { path: '/aicte-score/description', name: 'What\'s AICTE Score?', component: AicteScoreDescription },
  { path: '/aicte-score/teacher-scores', name: 'Teacher\'s Scores', component: TeacherScores },
  { path: '/aicte-score/upload-csv', name: 'Upload Response CSV', component: UploadCsv },

  //Student-Academics routes
  { path: '/student', name: 'Student', component: EnrollStudent, exact: true },
  { path: '/student/enroll-student', name: 'Enroll Student', component: EnrollStudent },
  { path: '/student/student-data-entry', name: 'Student\'s Data Entry', component: StudentDataEntry},
  { path: '/student/student-data-view', name: 'Student\'s Academic data', component: StudentData },
  { path: '/student/promote-student', name: 'Promote Student', component: PromoteStudent },


  { path: '/logout', name: 'logout', component: Logout, exact: true },
];

export default routes;
