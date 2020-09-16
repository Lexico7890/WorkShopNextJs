import Head from 'next/head'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
      <nav>
          <Link href="/timeLine">
            <a>
              time Line
            </a>
          </Link>
        </nav>
      </AppLayout>
    </div>
  )
}
