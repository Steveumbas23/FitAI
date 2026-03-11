import { useState } from "react";
import "../assets/style.css";

const stats = [
  {
    title: "Total Workouts",
    value: "142",
    tone: "total",
  },
  {
    title: "Workouts This Week",
    value: "12",
    tone: "weekly",
  },
  {
    title: "Calories Burned",
    value: "3,260",
    tone: "calories",
  },
  {
    title: "Workout Streak",
    value: "8 days",
    tone: "streak",
  },
];

const sidebarNav = [
  {
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="5" rx="2" />
        <rect x="13" y="10" width="8" height="11" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    label: "Programs",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16" />
        <path d="M4 12h10" />
        <path d="M4 17h7" />
        <circle cx="17" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Workouts",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 9v6" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M20 9v6" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    label: "AI Planner",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    label: "Progress",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 16V8" />
        <path d="M12 16V5" />
        <path d="M17 16v-6" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.53V21a2 2 0 1 1-4 0v-.08a1.7 1.7 0 0 0-1-1.53 1.7 1.7 0 0 0-1.87.34l-.06.06A2 2 0 1 1 3.1 17l.06-.06A1.7 1.7 0 0 0 3.5 15a1.7 1.7 0 0 0-1.53-1H2a2 2 0 1 1 0-4h.08a1.7 1.7 0 0 0 1.53-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06A2 2 0 1 1 5.1 3.1l.06.06A1.7 1.7 0 0 0 7 3.5a1.7 1.7 0 0 0 1-1.53V2a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 1.53 1.7 1.7 0 0 0 1.87-.34l.06-.06A2 2 0 1 1 20.9 5.1l-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.53 1H22a2 2 0 1 1 0 4h-.08a1.7 1.7 0 0 0-1.53 1Z" />
      </svg>
    ),
  },
];

const favourites = [
  {
    label: "Workout",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 9v6" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M20 9v6" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <aside
        className={`dashboard-sidebar ${!isSidebarOpen ? "is-collapsed" : ""}`}
      >
        <div className="sidebar-top">
          <div className="sidebar-profile">
            <div className="sidebar-avatar" />
            {isSidebarOpen && (
              <div>
                <p className="sidebar-name">Stefeee</p>
                <p className="sidebar-email">umbasteve10@gmail.com</p>
              </div>
            )}
          </div>
          <button
            type="button"
            className="sidebar-toggle"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {isSidebarOpen && (
          <button type="button" className="sidebar-primary">
            + Create Task
          </button>
        )}

        <nav className="sidebar-nav">
          {sidebarNav.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`sidebar-nav-item ${index === 0 ? "is-active" : ""}`}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {isSidebarOpen && (
          <>
            <div className="sidebar-divider" />

            <div className="sidebar-favourite">
              <p className="sidebar-section-title">Favourite</p>
              {favourites.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="sidebar-nav-item"
                >
                  <span className="sidebar-nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="breadcrumb-divider">›</span>
            <button type="button" className="breadcrumb-pill">
              Workout
            </button>
          </div>

          <div className="header-actions">
            {!isSearchOpen && (
              <button
                type="button"
                className="search-button"
                aria-label="Open search"
                onClick={() => setIsSearchOpen(true)}
              >
                ⌕
              </button>
            )}
            {isSearchOpen && (
              <div className="header-search">
                <span className="header-search-icon">⌕</span>
                <input type="text" placeholder="Search..." />
                <button
                  type="button"
                  className="header-search-button"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Search
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="dashboard-content">
          <section className="dashboard-top-grid">
            <div className="stats-grid">
              {stats.map((item) => (
                <article
                  key={item.title}
                  className={`stat-card stat-card-${item.tone}`}
                >
                  <p className="stat-title">{item.title}</p>
                  <p className="stat-value">{item.value}</p>
                </article>
              ))}
            </div>

            <section className="chart-card">
              <div className="chart-head">
                <h3 className="chart-title">Weekly Progress</h3>
                <span className="chart-badge">TPFx</span>
              </div>
              <div className="chart-placeholder" />
            </section>
          </section>

          <section className="members-card">
            <header className="members-header">
              <span>Member Name</span>
              <span>Age</span>
              <span>Status</span>
              <span>Last Visited</span>
            </header>
            <div className="members-row">
              <div className="members-name">
                <div className="members-avatar" />
                <div>
                  <p className="members-title">Stefeee</p>
                  <p className="members-subtitle">umbasteve10@gmail.com</p>
                </div>
              </div>
              <span>21</span>
              <span className="members-status">Active</span>
              <span>Yesterday</span>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
