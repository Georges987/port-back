import vine from '@vinejs/vine'

export const loginValidator = vine.compile(vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
}));

export const registerValidator = vine.compile(vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
    fullName: vine.string().minLength(3).maxLength(50),
}));