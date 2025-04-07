import Post from '#models/post';
export default class PostsController {
    async index({}) {
        return await Post.all();
    }
    async store({ request }) {
        return await Post.create({
            title: request.input('title'),
            tag: request.input('tag'),
            content: request.input('content'),
            image: request.input('image'),
            assets: request.input('assets'),
            assets_type: request.input('assetsType'),
            github: request.input('github'),
            category: request.input('category'),
            author: request.input('author'),
        });
    }
    async show({ params }) {
        return Post.findOrFail(params.id);
    }
    async destroy({ params }) {
        return (await Post.findOrFail(params.id)).delete();
    }
}
//# sourceMappingURL=posts_controller.js.map