import { metadata } from './layout'

export default function Home() {
  return (
    <div>
      <main>Olá, {metadata.title?.toString()}</main>
    </div>
  )
}
