import crypto from 'crypto'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    // console.log({secret:process.env.AUTH_SECRET});

    return crypto
        .createHmac('sha256', [salt, password].join('/'))
        .update(process.env.AUTH_SECRET!)
        .digest('hex')
}
