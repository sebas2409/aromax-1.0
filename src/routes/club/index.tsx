import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/club/')({
  component: () => <div>Hello /club/!</div>
})