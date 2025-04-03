import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    return await Post.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = request.only(['title', 'tag', 'content', 'image', 'assets', 'assets_type', 'author', 'category'])

    const image = request.file('image')
    const assets = request.file('assets')

    if (image) await image.move(app.makePath('storage/uploads/images'))
    if (assets) await assets.move(app.makePath('storage/uploads/assets'))
    if (image && image.isValid) {
      data.image = image.fileName!
    }

    if (assets) {
      data.assets = assets.fieldName!
    }

    return await Post.create(data)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Post.findOrFail(params.id)
  }

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return (await Post.findOrFail(params.id)).delete()
  }
}