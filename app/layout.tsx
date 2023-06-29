import '../styles/globals.css'
import { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({
    subsets: ['latin'],
    display: 'block',
    variable: '--font-league-spartan',
})
export const metadata: Metadata = {
    title: 'Jackson Moore',
    description: 'My personal portfolio, built with Next.js and TypeScript.',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${league_spartan.variable}`}>
            <body className='bg-black'>
                {children}
            </body>
        </html>
    )
}