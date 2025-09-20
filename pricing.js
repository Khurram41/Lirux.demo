export default function Pricing({ demoAuth }) {
  // demoAuth is not available on static render; pages can access demo via window.localStorage if needed
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Pro</h4>
          <div className="text-3xl font-bold my-4">$9 / month</div>
          <p className="text-sm text-slate-500">500 credits / month</p>
          <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white" onClick={() => {
            const saved = JSON.parse(localStorage.getItem('lirux_demo_user')||'null') || null;
            if (!saved) { alert('Please sign up first on /signup to save a demo account.'); return; }
            saved.plan = 'Pro'; saved.credits = 500; localStorage.setItem('lirux_demo_user', JSON.stringify(saved)); alert('Upgraded to Pro in demo!'); location.href='/dashboard';
          }}>Get Pro</button>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Agency</h4>
          <div className="text-3xl font-bold my-4">$19 / month</div>
          <p className="text-sm text-slate-500">Unlimited credits + team features</p>
          <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white" onClick={() => {
            const saved = JSON.parse(localStorage.getItem('lirux_demo_user')||'null') || null;
            if (!saved) { alert('Please sign up first on /signup to save a demo account.'); return; }
            saved.plan = 'Agency'; saved.credits = Infinity; localStorage.setItem('lirux_demo_user', JSON.stringify(saved)); alert('Upgraded to Agency in demo!'); location.href='/dashboard';
          }}>Get Agency</button>
        </div>
      </div>
    </main>
  )
}
