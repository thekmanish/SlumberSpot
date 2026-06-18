import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('me')
    @UseGuards(JwtAuthGuard)
    getProfile(@Req() req:any){
        return this.usersService.getProfile(req.user.userId);
    }

    @Patch('me')
    @UseGuards(JwtAuthGuard)
    updateProfile(
        @Req() req: any,
        @Body() updateProfileDto: UpdateProfileDto
    ){
        console.log("req is ",req)
        return this.usersService.updateProfile(
            req.user.userId,
            updateProfileDto
        )

    }
    
}
