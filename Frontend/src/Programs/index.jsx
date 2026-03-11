import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/style.css";

const sidebarNav = [
  {
    label: "Dashboard",
    path: "/",
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
    path: "/programs",
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

const programDetails = [
  { label: "Goal", value: "" },
  { label: "Level", value: "" },
  { label: "Workout Days", value: "" },
  { label: "Exercises", value: "" },
];

function Programs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavouriteOpen, setIsFavouriteOpen] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
            + Add Workout
          </button>
        )}

        <nav className="sidebar-nav">
          {sidebarNav.map((item) => {
            const isActive = item.path ? pathname === item.path : false;
            return (
            <button
              key={item.label}
              type="button"
              className={`sidebar-nav-item ${isActive ? "is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
              }}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
            );
          })}
        </nav>

        {isSidebarOpen && (
          <>
            <div className="sidebar-divider" />

            <div className="sidebar-favourite">
              <button
                type="button"
                className="sidebar-section-toggle"
                aria-expanded={isFavouriteOpen}
                onClick={() => setIsFavouriteOpen((prev) => !prev)}
              >
                <span
                  className={`sidebar-section-arrow ${
                    isFavouriteOpen ? "is-open" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <span className="sidebar-section-title">Favourite</span>
              </button>
              {isFavouriteOpen && (
                <div className="sidebar-favourite-items">
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
              )}
            </div>
          </>
        )}
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div className="breadcrumb">
            <span>Programs</span>
            <span className="breadcrumb-divider">›</span>
            <button type="button" className="breadcrumb-pill">
              <span className="breadcrumb-pill-icon">☰</span>
              Programs
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

        <main className="programs-content">
          <h2 className="programs-title">Workout Programs</h2>
          <section className="programs-card">
            <h3 className="programs-card-title">Muscle Gain Program</h3>
            <div className="programs-detail">
              {programDetails.map((detail) => (
                <div key={detail.label} className="programs-detail-row">
                  <span className="programs-detail-label">{detail.label}</span>
                  <span className="programs-detail-colon">:</span>
                  <span className="programs-detail-value">
                    {detail.value || "\u00A0"}
                  </span>
                </div>
              ))}
            </div>
            <div className="programs-actions">
              <button type="button" className="programs-action">
                View
              </button>
              <button type="button" className="programs-action">
                Edit
              </button>
              <button type="button" className="programs-action">
                Delete
              </button>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Programs;
