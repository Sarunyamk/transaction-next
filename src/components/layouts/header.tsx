import { APP_NAME } from '@/config/env.config'
import { fredoka } from '@/styles/font'
import Image from 'next/image'
import React from 'react'
import { ClipboardList, Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className="px-4 py-2 sticky border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Logo"
          className="w-10 h-10"
        />
        <h3 className={`${fredoka.className} text-primary text-2xl font-bold`}>
         {APP_NAME}
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <a><ClipboardList /></a>
        <a><Plus /></a>
        {/* <SearchButton /> */}
        {/* <ThemeToggle /> */}
        {/* <UserMenu /> */}
      </div>
    </header>
  )
}
