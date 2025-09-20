import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  function submit(e) {
    e.preventDefault()
    const demo = { name: email.split('@')[0]||'Creator', email, plan: 'Free', credits: 10 }
    localStorage.setItem('lirux_demo_user', JSON.stringify(demo))
    alert('Demo account created!')
    router.push('/dashboard')
  }

  return (
    <main className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Create Demo Account</h3>
      <form onSubmit={submit}>
        <label className="block text-sm">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={email} onChange={e => setEmail(e.target.value)} required />
        <button className="px-4 py-2 rounded bg-indigo-600 text-white">Create Account</button>
      </form>
    </main>
  )
}
