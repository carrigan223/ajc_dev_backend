/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

//Base Test Route
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

/////////Auth Routes/////////
router
  .group(() => {
    router.post('/register', [AuthController, 'register'])
  })
  .prefix('auth')

/////////User Routes/////////

router
  .group(() => {
    router.delete('/delete/:id', [UsersController, 'destroy'])
  })
  .prefix('users')
