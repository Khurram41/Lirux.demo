import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const saved = localStorage.getItem('lirux_demo_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  if (!user) return (
    <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow text-center">
      <h3 className="text-xl font-semibold mb-2">You’re not logged in</h3>
      <p className="text-slate-600 mb-4">Go to <a href="/signup" className="text-indigo-600">Sign up</a> to create a demo account.</p>
    </main>
  )

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Welcome back, {user.name}</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Plan</h4>
          <p className="text-sm">{user.plan}</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Credits</h4>
          <p className="text-sm">{user.credits === Infinity ? 'Unlimited' : user.credits}</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Saved Results</h4>
          <p className="text-sm text-slate-500">Use tools to generate outputs and download them.</p>
        </div>
      </div>
    </main>
  )
}
