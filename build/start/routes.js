import router from '@adonisjs/core/services/router';
import { middleware } from './kernel.js';
import AuthController from '#controllers/auth/auth_controller';
import PostsController from '#controllers/posts_controller';
router.get('/', () => {
    return 'Hello world from the home page.';
});
router.post('/login', [AuthController, 'login']);
router.post('/register', [AuthController, 'register']);
router.get('/about', () => {
    return 'This is the about page.';
}).use(middleware.auth());
router.resource('posts', PostsController).only(['index', 'show']);
router.resource('posts', PostsController).use(['create', 'destroy', 'store', 'update'], middleware.auth()).except(['index', 'show']);
router.get('/db', async ({ response }) => {
    response.download("./tmp/db.sqlite3");
}).use(middleware.auth());
//# sourceMappingURL=routes.js.map