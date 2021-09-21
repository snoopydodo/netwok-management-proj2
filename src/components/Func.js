import "./Func.css";

function Func() {
  return (
    <func className="all-func">
      <div className="func-flex">
        <div>
          <h3 className="set-h3">Comprehensive IT Infrastructure Monitoring</h3>
          <p>All mission-critical infrastructure components are monitored.</p>
          <div>
            <h3 className="set-h3">Performance</h3>
            <p>
              High-efficiency worker procedures provide almost infinite
              scalability and effectiveness monitoring.
            </p>
          </div>
        </div>

        <div>
          <h3 className="set-h3">Visibility</h3>
          <p>
            Gives you a unified picture of your complete IT operations network
            and business processes.
          </p>
          <div>
            <h3 className="set-h3">Multi-tenant capabilities</h3>
            <p>
              Stakeholders may see important infrastructure status thanks to
              multi-user access to the web interface.
            </p>
          </div>
        </div>

        <div>
          <h3 className="set-h3">Proactive Planning & Awareness</h3>
          <p>
            Organizations may prepare for infrastructure improvements with
            automated, integrated trending and capacity planning graphs before
            obsolete systems catch them off guard.
          </p>
          <div>
            <h3 className="set-h3">Customizability</h3>
            <p>
              A sophisticated GUI allows for per-user customization of layout,
              design, and preferences.
            </p>
          </div>
        </div>

        <div>
          <h3 className="set-h3">Ease of Use</h3>
          <p>
            The integrated web-based configuration interface allows
            administrators to delegate control of monitoring configuration
            management.
          </p>
          <div>
            <h3 className="set-h3">Extendable Architecture</h3>
            <p>
              Multiple APIs make it easy to integrate with in-house and
              third-party applications.
            </p>
          </div>
        </div>
      </div>

      <div className="arch-flex">
        <h1>Architecture</h1>
        <div>
          <img className="arch-img" src="./imgs/arch.png" />
          <h4>
            Architecture is critical for scalability and endurance, and we did
            not cut corners with the design of Nagios XI. We developed XI to be
            adaptable enough to satisfy a wide range of client requirements,
            with long-term growth and innovation in mind. Nagios System Builders
            may take use of the XI architecture to provide value-added products
            with the license flexibility they demand.
          </h4>
        </div>
      </div>

      <div className="pro-flex">
        <h1>Platforms Supported</h1>
        <div>
          <h4>
            Nagios supports monitoring of Windows, Linux, Unix, Solaris, AIX,
            HP-UX, and macOS/X operating systems., Nagios monitors desktop and
            server operating systems, including system metrics, service
            statuses, process states, performance counters, event logs,
            applications (IIS, Exchange, Apache, MySQL, and so on), and
            services. (Active Directory, DHCP, Sendmail, etc.)
          </h4>
        </div>
      </div>
    </func>
  );
}

export default Func;
