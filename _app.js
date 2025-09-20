import '../styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('lirux_demo_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  function loginDemo(email) {
    const demo = { name: email.split('@')[0]||'Creator', email, plan: 'Free', credits: 10 }
    localStorage.setItem('lirux_demo_user', JSON.stringify(demo))
    setUser(demo)
  }

  function logout() {
    localStorage.removeItem('lirux_demo_user')
    setUser(null)
  }

  function setPlan(plan) {
    const updated = { ...user }
    if (plan === 'pro') { updated.plan = 'Pro'; updated.credits = 500 }
    if (plan === 'agency') { updated.plan = 'Agency'; updated.credits = Infinity }
    localStorage.setItem('lirux_demo_user', JSON.stringify(updated))
    setUser(updated)
  }

  function useCredits(cost=1) {
    if (!user) return { ok: true, user: null } // allow guests
    if (user.plan === 'Agency') return { ok: true, user }
    if (user.credits >= cost) {
      const updated = { ...user, credits: user.credits - cost }
      localStorage.setItem('lirux_demo_user', JSON.stringify(updated))
      setUser(updated)
      return { ok: true, user: updated }
    }
    return { ok: false, user }
  }

  return <Component {...pageProps} demoAuth={{ user, loginDemo, logout, setPlan, useCredits }} />
}
