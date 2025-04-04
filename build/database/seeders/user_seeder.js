import User from '#models/user';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class extends BaseSeeder {
    async run() {
        await User.createMany([
            {
                email: 'georges.ayeni@epitech.eu',
                password: 'Password@777',
            },
            {
                email: 'ayenigeorgepierre@gmail.com',
                password: 'Developpeur@777',
            }
        ]);
    }
}
//# sourceMappingURL=user_seeder.js.map