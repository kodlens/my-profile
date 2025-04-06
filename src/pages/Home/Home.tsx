import MainLayout from '../../Layouts/MainLayout'
import Hero from './components/Hero'
import Services from './components/Services'

export default function Home() {
  return (
    <MainLayout>
        <Hero />

        <Services />
    </MainLayout>
  )
}
