'use client'

import { Item } from '@/types/item'
import { useState } from 'react'

interface ListItemProps {
  item: Item
}

export function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <div className="flex bg bg-zinc-900 p-2.5 rounded-[10px] mb-2.5 items-center">
      <input
        className="w-[25px] h-[25px] mr-[5px]"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label className={`text-gray-300 ${isChecked ? 'line-through' : null}`}>
        {item.name}
      </label>
    </div>
  )
}
