// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class UsersController {
  //controller to handle are crud db functions for users

  //get all users
  // async index({ request, response }) {
  //   return 'get all users'
  // }

  // //get a single user
  // async show({ request, response }) {
  //   return 'get a single user'
  // }

  //create a new user

  async store(new_user: {
    first_name: string
    last_name: string
    email: string
    password: string
  }) {
    const fullName = `${new_user.first_name} ${new_user.last_name}`
    let UserWithFullName = { ...new_user, fullName: fullName }
    const newUser = db.table('users').insert(UserWithFullName)
    return newUser
  }

  // //update a user
  // async update({ request, response }) {
  //   return 'update a user'
  // }

  //delete a user
  async destroy(request: HttpContext) {
    const id = request.params.id as number
    const user = db.from('users').where('id', id).delete()
    return user
  }
}
