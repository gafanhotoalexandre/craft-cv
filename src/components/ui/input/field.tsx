'use client'

import { ComponentProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '.'
import FieldWrapper from '../field-wrapper'

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string
  name: string
}
export default function InputField({ label, name, ...props }: InputFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-400">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  )
}
