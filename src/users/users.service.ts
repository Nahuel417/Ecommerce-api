import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.entity';
import { EditUserDto } from 'src/dto/editUser.dto';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUsers(
        page: number,
        limit: number,
    ): Promise<Omit<User, 'password'>[]> {
        const allUsers = await this.usersRepository.getUsers(page, limit);

        return allUsers.map(({ password, ...rest }) => rest);
    }

    async getUserById(id: string) {
        const user = await this.usersRepository.getUserById(id);
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }

        const { password, ...rest } = user;

        return rest;
    }

    async createUser(user: Partial<User>): Promise<Partial<User>> {
        const usuario = await this.usersRepository.createUser(user);
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        const { password, ...rest } = usuario;

        return rest;
    }

    async updateUser(
        id: string,
        updateUser: EditUserDto,
    ): Promise<string | User> {
        const user = await this.usersRepository.updateUser(id, updateUser);

        return user;
    }

    async deleteUser(id: string): Promise<String> {
        return await this.usersRepository.deleteUser(id);
    }
}
