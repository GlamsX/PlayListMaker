import Head from "next/head"
import Header from '@/components/header'
import Footer from "./footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Head>
            <title>Playlist Maker</title>
            <meta name="description" content="Platlist Maker" />
        </Head>
        <main className="flex flex-col items-center">
            <Header />
            {children}
            <Footer />
        </main>
    </div>
  )
}