'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (resolvedTheme === 'dark') {
    return <Sun className=' hover:text-neutral-300' onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Moon className='hover:text-neutral-700' onClick={() => setTheme('dark')} />
  }

}