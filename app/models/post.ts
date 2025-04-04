import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare tag: string

  @column()
  declare content: string

  @column()
  declare image: string

  @column()
  declare assets: string | null

  @column()
  declare assets_type: string

  @column()
  declare author: string

  @column()
  declare category: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}