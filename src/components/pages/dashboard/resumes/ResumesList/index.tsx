import { Plus } from 'lucide-react'
import { ResumeCard, ResumeCardButton } from '../ResumeCard'

export function ResumesList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-4 lg:gap-5 flex-1">
      <ResumeCardButton
        title="Criar novo currículo"
        description="Comece do zero"
        icon={<Plus />}
      />

      <ResumeCard />
    </section>
  )
}
