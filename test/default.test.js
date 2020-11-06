require('module-alias/register')

const fetch = require('node-fetch');
const baseUrl = "http://ms-devices";

const id = 4;

describe('default test', () => {

  it('index from default', async (done) => {
    let response = await fetch(`${baseUrl}/devices/default/`);

    expect(response.status).toBe(200)
    done()
  })

  it('view from default', async (done) => {
    let response = await fetch(`${baseUrl}/devices/default/${id}`);

    expect(response.status).toBe(200)
    done()
  })

  it('add from default', async (done) => {
    let response = await fetch(`${baseUrl}/devices/default/${id}`, {
      method: 'POST',
    });

    expect(response.status).toBe(200)
    done()
  })

  it('update from default', async (done) => {
    let response = await fetch(`${baseUrl}/devices/default/${id}`, {
      method: 'PUT',
    });

    expect(response.status).toBe(200)
    done()
  })

  it('delete from default', async (done) => {
    let response = await fetch(`${baseUrl}/devices/default/${id}`, {
      method: 'DELETE',
    });

    expect(response.status).toBe(200)
    done()
  })

})
