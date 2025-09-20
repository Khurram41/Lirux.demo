import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  function submit(e) {
    e.preventDefault()
    const saved = JSON.parse(localStorage.getItem('lirux_demo_user')||'null') || null
    if (saved && saved.email === email) {
      alert('Logged in (demo)')
      router.push('/dashboard')
    } else {
      alert('No demo account found. Please sign up first.')
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Login (Demo)</h3>
      <form onSubmit={submit}>
        <label className="block text-sm">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={email} onChange={e => setEmail(e.target.value)} required />
        <button className="px-4 py-2 rounded bg-indigo-600 text-white">Login</button>
      </form>
    </main>
  )
}
