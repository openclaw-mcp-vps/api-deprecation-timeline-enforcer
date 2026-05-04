import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Deprecation Timeline Enforcer',
  description: 'Enforce API deprecation deadlines automatically. Monitor usage and block deprecated endpoints after grace periods.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89ef520a-970a-41e1-9ded-09b614296209"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
