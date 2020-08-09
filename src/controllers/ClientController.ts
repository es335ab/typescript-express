import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'

// あとでmodels配下に移す
interface Client {
  id: string
  email: string
}

// ダミー
const clients: Client[] = [{ id: 'abc', email: 'hoge@gmail.com'}]

@JsonController('/clients')
export class ClientController {
  @Get('/')
  getAll() {
    return clients
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    const target = clients.find(c => c.id === id)
    return target
  }

  @Post('/')
  post(@Body() client: Client) {
    return 'ok'
  }

  @Put('/:id')
  put(@Param('id') id: string, @Body() client: Client) {
    return 'ok'
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return 'ok'
  }
}
