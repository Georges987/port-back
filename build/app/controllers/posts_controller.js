import Post from '#models/post';
import app from '@adonisjs/core/services/app';
export default class PostsController {
    async index({}) {
        return await Post.all();
    }
    async store({ request }) {
        const data = request.only(['title', 'tag', 'content', 'image', 'assets', 'assets_type', 'author', 'category']);
        const image = request.file('image');
        const assets = request.file('assets');
        if (image)
            await image.move(app.makePath('storage/uploads/images'));
        if (assets)
            await assets.move(app.makePath('storage/uploads/assets'));
        if (image && image.isValid) {
            data.image = image.fileName;
        }
        if (assets) {
            data.assets = assets.fieldName;
        }
        return await Post.create(data);
    }
    async show({ params }) {
        return Post.findOrFail(params.id);
    }
    async destroy({ params }) {
        return (await Post.findOrFail(params.id)).delete();
    }
}
//# sourceMappingURL=posts_controller.js.map