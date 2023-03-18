import { Hono } from 'hono'

type Bindings = {
  USER_SERVICE: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()

app.all('/user/*', async (c) => {
  const response = await c.env.USER_SERVICE.fetch(c.req.raw.clone())

  const { data, error } = (await response.json()) as {
    error: { message: string } | undefined
    data: unknown
  }

  return c.json(data)
})

app.get('/', (c) => c.text('Hello Hono!'))

export default app
