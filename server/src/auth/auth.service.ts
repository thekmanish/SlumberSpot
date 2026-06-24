import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt";
import { BadRequestException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';

@Injectable()
export class AuthService{
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ){}

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

    // User Login / SignIn
    async login(loginDto: LoginDto){
        const existingUser = await this.prisma.user.findUnique({
            where :{
                email: loginDto.email,
            },
        });

        if(!existingUser){
            throw new BadRequestException(`User doesn't exist`);
        };

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            existingUser.password
        );

        if(!isPasswordValid){
            throw new BadRequestException(`Invalid Password`);
        };

        const token = await this.jwtService.signAsync({
            sub: existingUser.id,
            email: existingUser.email
        });

        return {
            accessToken: token
        }
    }

}
