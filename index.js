import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Lirux Creator Tools — AI tools for creators</h1>
        <p className="text-lg text-slate-700 mb-6">Create captions, scripts, voiceovers, images and a content calendar — all in one place (demo).</p>
        <div className="flex gap-3">
          <Link href="/tools"><a className="px-4 py-2 rounded bg-indigo-600 text-white">Try Tools</a></Link>
          <Link href="/pricing"><a className="px-4 py-2 rounded border">See Pricing</a></Link>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Included in demo</h3>
        <ul className="space-y-2 text-sm">
          <li>• Caption & Hashtag Generator</li>
          <li>• Video Ideas Generator</li>
          <li>• Post/Image Generator (placeholder)</li>
          <li>• Voiceover Generator (placeholder)</li>
          <li>• Script Writer</li>
          <li>• Content Calendar Planner</li>
          <li>• Engagement Optimizer</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">This demo uses mock AI responses and localStorage to simulate accounts & credits.</p>
      </div>
    </main>
  )
}
