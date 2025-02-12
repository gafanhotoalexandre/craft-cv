'use client'

import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import InputField from '@/components/ui/input/field'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  title: z.string().min(3, {
    message: 'O título precisa ter ao menos 3 caracteres.',
  }),
})
export function NewResumeDialog(props: BaseDialogProps) {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo."
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Título" name="title" />

            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
