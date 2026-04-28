import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  ShieldCheck, LayoutDashboard, ScanSearch, FileText,
  Award, Bell, Settings, Search, LogOut
} from 'lucide-react'

export default function AppLayout() {
  const navigate = useNavigate()

  const sidebarLinks = [
    { to: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/app/verify', icon: ScanSearch, label: 'Verify Media' },
    { to: '/app/reports', icon: FileText, label: 'Reports' },
    { to: '/app/certificates', icon: Award, label: 'Certificates' },
    { to: '/app/alerts', icon: Bell, label: 'Alerts' },
    { to: '/app/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <NavLink to="/app/dashboard" className="navbar-logo">
            <div className="navbar-logo-icon" style={{ width: 22, height: 22 }}>
              <ShieldCheck size={12} color="#fff" />
            </div>
            SpoProof
          </NavLink>
        </div>
        <nav className="sidebar-nav">
          {sidebarLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
          <div style={{ flex: 1 }} />
          <button
            className="sidebar-link"
            onClick={() => navigate('/')}
          >
            <LogOut size={16} />
            Log Out
          </button>
        </nav>
      </aside>

      <main className="app-main">
        <div className="topbar">
          <div className="topbar-search">
            <Search size={14} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="topbar-right">
            <button className="btn-icon">
              <Bell size={16} />
            </button>
            <div className="topbar-avatar">A</div>
          </div>
        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
