import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class updateUserDTO { 
    @MinLength(3, { message: "O nome deve ter no mínimo 3 caracteres"})
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsOptional()
    name: string; 

    @IsEmail(undefined, { message: "E-mail inválido" })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsOptional()
    email: string; 

    @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres'})
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsOptional()
    password: string 
}