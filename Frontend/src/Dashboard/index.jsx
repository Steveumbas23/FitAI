import { useState } from "react";
import "../assets/style.css";

const stats = [
  { title: "Users", value: "1,245" },
  { title: "Projects", value: "86" },
  { title: "Tasks", value: "324" },
  { title: "Completed", value: "278" },
];

const sidebarNav = [
  "Dashboard",
  "Users",
  "Projects",
  "Tasks",
  "Analytics",
  "Settings",
];

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">
      <aside className={`dashboard-sidebar ${!isSidebarOpen ? "is-collapsed" : ""}`}>
        <div className="sidebar-top">
          {isSidebarOpen && <h1 className="sidebar-logo">ASTM</h1>}
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
          <nav className="sidebar-nav">
            {sidebarNav.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`sidebar-nav-item ${index === 0 ? "is-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <h2 className="dashboard-greeting">Hello, Stefeee</h2>

          <div className="header-actions">
            <div className="header-search-placeholder" />
            <div className="header-avatar" />
          </div>
        </header>

        <main className="dashboard-content">
          <section className="stats-container">
            <div className="stats-grid">
              {stats.map((item) => (
                <article key={item.title} className="stat-card">
                  <p className="stat-title">{item.title}</p>
                  <p className="stat-value">{item.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="chart-card">
            <h3 className="chart-title">Weekly User Activity</h3>
            <div className="chart-placeholder" />
          </section>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
