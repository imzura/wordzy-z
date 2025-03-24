import React from "react";
import { Routes, Route } from "react-router-dom";
import RolePage from "./features/role/page/RolesPage";
import TopicsPage from "./features/topics/pages/TopicsPage";
import CouseProgrammingPage from "./features/course_programming/pages/CouseProgrammingPage";
import ScheduledCoursesPage from "./features/scheduled_courses/pages/ScheduledCoursesPage";
import Menu from "./shared/components/Menu";
import DashboardPage from "./features/dashboard/pages/dashboardPage";
import RegistrarRolPage from "./features/role/page/RegisterRolePage";
import FilePage from "./features/scheduled_courses/pages/FilePage";
import TraineesPage from "./features/scheduled_courses/pages/TraineesPage";

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Menu/>}>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/temas" element={<TopicsPage/>}/>
        <Route path="/programacionCursos" element={<CouseProgrammingPage/>}/>
        <Route path="/cursosProgramados" element={<ScheduledCoursesPage/>}/>
        <Route path="/cursosProgramados/fichas" element={<FilePage/>}/>
        <Route path="/cursosProgramados/fichas/aprendices" element={<TraineesPage/>}/>
        <Route path="/roles" element={<RolePage/>}/>
        <Route path="/roles/registrarRol" element={<RegistrarRolPage />} />
        </Route>
    </Routes>
  );
}

export default AppRoutes;