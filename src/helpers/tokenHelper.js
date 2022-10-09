import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class TokenHelper {
  execute(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET)
  }
}

export const tokenHelper = new TokenHelper()
