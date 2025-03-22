import React from "react";
import { Routes, Route } from "react-router-dom";
import RolePage from "./features/role/page/RolesPage";
import TopicsPage from "./features/topics/pages/TopicsPage";
import CouseProgrammingPage from "./features/course_programming/pages/CouseProgrammingPage";
import ScheduledCoursesPage from "./features/scheduled_courses/pages/ScheduledCoursesPage";
import Menu from "./shared/components/Menu";
import DashboardPage from "./features/dashboard/pages/dashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Menu/>}>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/temas" element={<TopicsPage/>}/>
        <Route path="/programacionCursos" element={<CouseProgrammingPage/>}/>
        <Route path="/cursosProgramados" element={<ScheduledCoursesPage/>}/>
        <Route path="/roles" element={<RolePage/>}/>
        </Route>
    </Routes>
  );
}

export default AppRoutes;