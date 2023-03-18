import { Hono } from 'hono'

const app = new Hono()

app.get('/user', (c) => {
  return c.json({
    data: { name: 'John Doe' }
  })
})

app.get('/', (c) => c.text('Hello Hono!'))

export default app
