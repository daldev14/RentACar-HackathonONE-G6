import { auth } from '@/auth'

export default async function page() {
  const session = await auth()

  return (
    <div>
      <h1>Admin</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
