import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import {
    LayoutDashboard,
    GraduationCap,
    Calendar,
    BarChart3,
    Settings,
    Shield,
    ChevronDown,
    ChevronUp,
    BookOpen,
    FileText,
    BookMarked,
    Users,
    Layers,
    FileCode,
    Award,
    Scale,
    UserCheck,
    TrendingUp,
    MessageSquare,
    User,
} from "lucide-react"

const Menu = () => {
    const [openMenus, setOpenMenus] = useState({
        formacion: true,
        programacion: false,
        progreso: true,
        configuracion: false,
    })

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }))
    }

    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-[#1a2c42] text-white flex flex-col h-screen">
                {/* Header */}
                <div className="p-4 flex items-center gap-2 border-b border-[#2a3c52]">
                    <div className=" rounded-full p-1">
                        <img src="../../public/images/icono.jpeg" alt="avatar" className="w-10 h-10 rounded-full" />
                    </div>
                    <h1 className="font-bold text-lg pl-2">WORDZY</h1>
                </div>

                {/* Menu */}
                <div className="flex-1 overflow-y-auto">
                    <div className="px-4 py-2 text-xs text-gray-400">MENU</div>

                    {/* Dashboard */}
                    <Link to="/" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </Link>

                    {/* Formación */}
                    <div>
                        <button
                            onClick={() => toggleMenu("formacion")}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#2a3c52] text-sm"
                        >
                            <div className="flex items-center gap-3">
                                <GraduationCap size={18} />
                                <span>Formación</span>
                            </div>
                            {openMenus.formacion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {openMenus.formacion && (
                            <div className="pl-10 bg-[#15253a]">
                                <Link to="/programas" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <BookOpen size={16} />
                                    <span>Programas</span>
                                </Link>
                                <Link to="/fichas" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <FileText size={16} />
                                    <span>Fichas</span>
                                </Link>
                                <Link to="/instrucciones" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <BookMarked size={16} />
                                    <span>Instrucciones</span>
                                </Link>
                                <Link to="/aprendices" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Users size={16} />
                                    <span>Aprendices</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Programación */}
                    <div>
                        <button
                            onClick={() => toggleMenu("programacion")}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#2a3c52] text-sm"
                        >
                            <div className="flex items-center gap-3">
                                <Calendar size={18} />
                                <span>Programación</span>
                            </div>
                            {openMenus.programacion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {openMenus.programacion && (
                            <div className="pl-10 bg-[#15253a]">
                                <Link to="/temas" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Layers size={16} />
                                    <span>Temas</span>
                                </Link>
                                <Link to="/materiales" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <FileCode size={16} />
                                    <span>Materiales de Apoyo</span>
                                </Link>
                                <Link to="/evaluaciones" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Award size={16} />
                                    <span>Evaluaciones</span>
                                </Link>
                                <Link to="/programacionCursos" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Calendar size={16} />
                                    <span>Programación Cursos</span>
                                </Link>
                                <Link to="/escalaValoracion" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Scale size={16} />
                                    <span>Escala de valoración</span>
                                </Link>
                                <Link to="/insigneas" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <UserCheck size={16} />
                                    <span>Insigneas</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Progreso */}
                    <div>
                        <button
                            onClick={() => toggleMenu("progreso")}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#2a3c52] text-sm"
                        >
                            <div className="flex items-center gap-3">
                                <BarChart3 size={18} />
                                <span>Progreso</span>
                            </div>
                            {openMenus.progreso ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {openMenus.progreso && (
                            <div className="pl-10 bg-[#15253a]">
                                <Link to="/cursosProgramados" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Calendar size={16} />
                                    <span>Cursos Programados</span>
                                </Link>
                                <Link to="/ranking" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <TrendingUp size={16} />
                                    <span>Ranking</span>
                                </Link>
                                <Link to="/retroalimentacion" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <MessageSquare size={16} />
                                    <span>Retroalimentación</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/usuarios" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                        <User size={16} />
                        <span>Usuarios</span>
                    </Link>

                    {/* Configuración */}
                    <div>
                        <button
                            onClick={() => toggleMenu("configuracion")}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#2a3c52] text-sm"
                        >
                            <div className="flex items-center gap-3">
                                <Settings size={18} />
                                <span>Configuración</span>
                            </div>
                            {openMenus.configuracion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {openMenus.configuracion && (
                            <div className="pl-10 bg-[#15253a]">
                                {/* Roles */}
                                <Link to="/roles" className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a3c52] text-sm">
                                    <Shield size={18} />
                                    <span>Roles</span>
                                </Link>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </div>
        </div>
    )
}

export default Menu