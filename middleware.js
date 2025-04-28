export function middleware(req) {
    const basicAuth = req.headers.get('authorization')
  
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')
  
      if (user === 'user' && pwd === 'password') {
        return
      }
    }
  
    return new Response('Autenticazione richiesta', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Accesso Limitato"',
      },
    })
  }
  