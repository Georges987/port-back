import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'posts';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.string('tag', 255).notNullable();
            table.string('content', 255).notNullable();
            table.string('image', 255).notNullable();
            table.string('assets', 255).nullable();
            table.string('assets_type', 255).notNullable();
            table.string('author', 255).notNullable();
            table.string('category', 255).notNullable();
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1743694295843_create_posts_table.js.map