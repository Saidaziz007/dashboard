import Dashboard from "@/components/dashboard/dashboard";

export default function Home() {
  return (
    <main>
      <section className="admin-panel">
        <div className="container">
          <div className="admin-panel-all">
            <Dashboard />
          </div>
        </div>
      </section>
    </main>
  );
}
