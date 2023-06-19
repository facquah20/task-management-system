import dotenv from 'dotenv';
import dotenv from 'dotenv'

dotenv.config({override:true});
export const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
