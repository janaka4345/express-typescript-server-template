import { userModel } from '../dbModals/userSchema'

export const getUsers = () => userModel.find()

export const getUserByEmail = (email: string) => userModel.findOne({ email })

export const getUserBySessionToken = (token: string) =>
    userModel.findOne({
        'authentication.sessionToken': token,
    })

export const getUserById = (id: string) => userModel.findById(id)

export const createUser = (payload: Record<string, any>) =>
    new userModel(payload).save().then((user) => user.toObject())

export const deleteUserById = (id: string) =>
    userModel.findOneAndDelete({ _id: id })

export const updateUserById = (id: string, payload: Record<string, any>) =>
    userModel.findByIdAndUpdate(id, payload)
