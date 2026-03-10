'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState('')

  const addFavorite = async () => {
    if (!url) {
      setMessage('Please enter a URL')
      return
    }

    const { error } = await supabase.from('favorites').insert([{ url }])

    if (error) {
      setMessage(`Error: ${error.message}`)
      console.error(error)
    } else {
      setMessage('Saved successfully!')
      setUrl('')
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">URFAVE Test</h1>

      <input
        className="w-80 rounded border p-2"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={addFavorite}
        className="rounded bg-purple-600 px-4 py-2 text-white"
      >
        Save
      </button>

      {message && <p>{message}</p>}
    </div>
  )
}
