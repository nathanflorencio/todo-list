'use client'

import { useState } from 'react'

interface AddAreaProps {
  onEnter: (taskName: string) => void
}

export function AddArea({ onEnter }: AddAreaProps) {
  const [inputText, setInputText] = useState('')

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter' && inputText.trim() !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <div className="border border-solid border-gray-600 rounded-[15px] p-2.5 my-5 flex items-center">
      <div className="mr-[5px]">➕</div>
      <input
        className="border-0 bg-transparent outline-0 text-white text-lg flex-1"
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}
