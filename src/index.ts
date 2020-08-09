import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'

const PORT = 8080

const app = createExpressServer({
  routePrefix: '/api/v1',
   controllers: [__dirname + '/controllers/*.ts']
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
