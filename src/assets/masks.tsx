import { mask } from 'remask'

export function CpfMask(text: string) {
  return mask(text, ['999.999.999-99'])
}

export function CnpjMask(text:string) {
  return mask(text, ['99.999.999/9999-99'])
}

export function PhoneNumberMask(text: string) {
  return mask(text, ['(99)99999-9999'])
}
