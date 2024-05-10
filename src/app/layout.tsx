import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import { AppProvider } from '@/components/Context';
import {Nunito_Sans} from 'next/font/google';
import '../globals.css';

const nunito_sans = Nunito_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Country',
  description: 'Countries of the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito_sans.className}>
        <AppProvider>
          <Provider>
            <div className="w-full h-[100%] min-h-[100vh] bg-very-light-gray text-very-dark-blue-text dark:bg-very-dark-blue dark:text-white">
              <Navbar/>
              {children}
            </div>
          </Provider>
        </AppProvider>
      </body>
    </html>
  )
}
