import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@radix-ui/themes/styles.css";
import { Theme,ThemePanel } from "@radix-ui/themes";
import NavBar from './NavBar';
import "@/app/theme-config.css"
import AuthProvider from './component/AuthProvider';
// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
   subsets: ['latin'],
  variable: '--font-inter',
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={inter.variable}>
      <Theme accentColor="yellow">
        <AuthProvider>
          <NavBar/>
            <main>
            {children}
            </main>
            <ThemePanel/>
            </AuthProvider>
        </Theme>
        </body>
    </html>
  )
}
