import type { HttpContext } from '@adonisjs/core/http'
import UsersController from './users_controller.js'

export default class AuthController {
  /**
   * Register a new user
   * POST /register
   *
   * @param {HttpContext} ctx
   * @return {Promise<void>}
   * @public
   * @example
   * ```
   */

  register({ request }: HttpContext): unknown {
    const { firstName, lastName, email, password } = request.body()

    const newUser = new UsersController()
    return newUser.store({ first_name: firstName, last_name: lastName, email, password })
  }
}
