import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt";
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}

    //Register User / User Signup
    async register(registerDto: RegisterDto){
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: registerDto.email
            },
        });

        if (existingUser) {
            throw new BadRequestException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(registerDto.password, 10);

        const user = await this.prisma.user.create({
            data: {
                email: registerDto.email,
                password: hashedPassword
            },
        });

        return {
            message: 'User registered successfully',
            userId: user.id
        };
    }

}
