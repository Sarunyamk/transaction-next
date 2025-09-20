'use client'
import { Button } from '@/components/ui/button'
import { THEME } from '@/constants/theme.constant'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <Skeleton className="w-10 h-9" />

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT.NAME ? THEME.DARK.NAME : THEME.LIGHT.NAME)
  }

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === THEME.LIGHT.NAME ? <THEME.DARK.ICON /> : <THEME.LIGHT.ICON />}
    </Button>
  )
}
