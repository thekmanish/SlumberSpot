import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        createdAt: true,
      },
    });
  }

  async updateProfile(
    userId: number,
    updateProfileDto : UpdateProfileDto
  ){
    return this.prisma.user.update({
      where : {
        id : userId,
      },
      data : updateProfileDto,
      select : {
        id : true,
        email : true,
        firstName: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      }
    });

  }
}

