import { useRouter } from 'next/router'
import tools from '../../utils/tools-data'
import { useState } from 'react'

export default function ToolPage({ demoAuth }) {
  const router = useRouter()
  const { id } = router.query
  const tool = tools.find(t => t.id === id) || tools[0]
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  function run() {
    // simulate credit deduction and AI response
    const { ok } = demoAuth.useCredits(tool.cost)
    if (!ok) { alert('Not enough credits — upgrade to Pro or Agency'); return }
    setLoading(true)
    setTimeout(() => {
      let res = ''
      if (tool.id === 'caption') {
        res = `Caption ideas for: ${prompt}\n1) Short catchy line #fyp\n2) Story + CTA #viral\nHashtags: #creator #viral #shorts`
      } else if (tool.id === 'video-ideas') {
        res = `Video ideas for: ${prompt}\n- Hook: show problem in 3s, reveal solution.\n- POV trend.\n- Tutorial quick tip.`
      } else if (tool.id === 'post-image') {
        res = `Post image suggestion: Bold headline + central photo + CTA.`
      } else if (tool.id === 'voiceover') {
        res = `Voiceover script (upbeat): ${prompt} — approx 20s.`
      } else if (tool.id === 'script') {
        res = `Short script:\nIntro -> Problem -> Solution -> CTA.\nPrompt: ${prompt}`
      } else if (tool.id === 'calendar') {
        res = `Weekly calendar for: ${prompt}\nMon: Tip\nTue: Reel\nWed: BTS\nThu: Tutorial\nFri: Recap`
      } else if (tool.id === 'engage') {
        res = `Optimized: Hook in first line, 3 emojis, ask a question.`
      } else {
        res = `Result for: ${prompt}`
      }
      setOutput(res)
      setLoading(false)
    }, 700)
  }

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
      <p className="text-slate-600 mb-3">{tool.description}</p>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="w-full p-3 border rounded h-28" placeholder="Describe your topic..."></textarea>
      <div className="flex gap-3 mt-3">
        <button onClick={run} className="px-4 py-2 rounded bg-indigo-600 text-white">{loading ? 'Working...' : `Generate — ${tool.cost} credit(s)`}</button>
        <button onClick={() => { navigator.clipboard.writeText(output) }} className="px-4 py-2 rounded border">Copy</button>
      </div>
      <pre className="mt-4 bg-slate-50 p-4 rounded border text-sm whitespace-pre-wrap">{output || 'Your output will appear here.'}</pre>
    </main>
  )
}
