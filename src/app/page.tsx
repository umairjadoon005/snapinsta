import Content from '@/app/components/Content'
import { Toaster } from '@/components/ui/toaster'
import { Suspense } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { HowItWorks } from './how-it-works'
import { FrequentlyAsked } from './frequently-asked'
import { Hero } from './hero'
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Suspense>    
          <Hero/>     
        </Suspense>
        <HowItWorks/>
        <FrequentlyAsked/>
      </main>
      <Toaster />
      <Footer />
    </div>
  )
}
