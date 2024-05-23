import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre-nosotros/')({
  component: () => <div>Hello /sobre-nosotros/!</div>
})