export default async function DashboardPage() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Dashboard Overview</h1>
      <p>
        Welcome to the dashboard! Here you can monitor your activity, view
        reports, and manage your account settings.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-blue-500 p-4 text-white shadow-md">
          <h2 className="text-lg font-semibold">Activity</h2>
          <p>Track your recent activity across the platform.</p>
        </div>
        <div className="rounded-lg bg-green-500 p-4 text-white shadow-md">
          <h2 className="text-lg font-semibold">Reports</h2>
          <p>Generate and view detailed reports.</p>
        </div>
        <div className="rounded-lg bg-red-500 p-4 text-white shadow-md">
          <h2 className="text-lg font-semibold">Settings</h2>
          <p>Manage your account settings and preferences.</p>
        </div>
      </div>
    </div>
  );
}
