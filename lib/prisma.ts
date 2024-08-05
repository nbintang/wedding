import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
// declare global {
//   var prisma: PrismaClient | undefined;
// }

// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== 'production') {
//   global.prisma = prisma;
// } 
dotenv.config({path: ".env.local"})

const prisma = new PrismaClient();

export default prisma;