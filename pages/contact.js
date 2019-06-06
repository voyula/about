import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <main>
    <Header />
    <p>Email: jesus@example.com</p>
    <section>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </section>
  </main>
)
