'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS } from '@/constants/navItems'

export function NavItems() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.path)

        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant={'ghost'}
              className={cn(
                'w-full gap-2 justify-start',
                isActive && 'bg-accent'
              )}
            >
              <item.icon /> {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
