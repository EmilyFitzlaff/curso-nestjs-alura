import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { createUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { userList } from "./dto/listUser.dto";
import { updateUserDTO } from "./dto/updateUser.dto";

@Controller('/users')
export class UserController {
    constructor(private userRepository: UserRepository) { }

    @Post()
    async createUser(@Body() userData: createUserDTO) {
        const userEntity = new UserEntity();

        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.name = userData.name;
        userEntity.id = uuid();
        
        this.userRepository.save(userEntity);

        return { user: new userList(userEntity.name, userEntity.id), message: 'Usuário criado com sucesso' };
    };

    @Get()
    async getUsers() { 
        const users = await this.userRepository.getAllUsers();

        const filteredUsers = users.map(user => new userList(user.name, user.id));

        return filteredUsers;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() newData: updateUserDTO) {
        const userUpdated = await this.userRepository.updateUser(id, newData);

        return { user: userUpdated, message: 'Usuário alterado com sucesso'}
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        const user = await this.userRepository.deleteUser(id);

        return { user, message: 'Usuário removido com sucesso' };
    }
}