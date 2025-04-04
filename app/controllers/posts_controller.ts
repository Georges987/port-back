import Post from '#models/post'
import auth from '@adonisjs/auth/services/main';
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
    console.log(request.all());
    
    return await Post.create({
      title: request.input('title'),
      tag: request.input('tag'),
      content: request.input('content'),
      image: request.input('image'),
      assets: request.input('assets'),
      assets_type: request.input('assetsType'),
      category: request.input('category'),
      author: request.input('author') ?? "Georges AYENI",
    })
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