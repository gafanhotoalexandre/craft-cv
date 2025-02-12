import { Plus } from 'lucide-react'
import { ResumeCardButton } from './ResumeCard'

export function AddResumeButton() {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  )
}
