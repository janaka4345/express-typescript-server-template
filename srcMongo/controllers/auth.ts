import express from 'express'
import { createUser, getUserByEmail } from './authActions'
import { authentication, random } from '../helpers'

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body
        if (!email || !password || !username) {
            return res.sendStatus(400)
        }
        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            return res.status(400).json({ error: 'user already exists' })
        }

        const salt = random()
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password),
            },
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}
