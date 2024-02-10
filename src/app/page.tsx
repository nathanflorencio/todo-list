'use client'

import { AddArea } from '@/components/add-area'
import { ListItem } from '@/components/list-item'
import { Item } from '@/types/item'
import { useState } from 'react'

export default function Home() {
  const [list, setList] = useState<Item[]>([])

  function handleAddTask(taskName: string) {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  return (
    <div className="bg-zinc-950 text-zinc-500 min-h-[100vh]">
      <div className="m-auto max-w-[980px] p-2.5">
        <h1 className="text-3xl font-bold m-0 p-0 text-white text-center border-b border-stone-700 border-solid pb-5">
          Lista de Tarefas
        </h1>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
