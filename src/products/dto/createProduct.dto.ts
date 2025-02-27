import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min, ValidateNested } from "class-validator";

export class CaracteristicasProdutoDTO {
    nome: string;
    descricao: string;
}

export class ImagensDTO {
    url: string;
    descricao: string;
}

export class createProductDTO {
    @IsString() 
    @IsNotEmpty({ message: "Campo obrigatório"})
    nome: string;

    @IsPositive()
    @IsNumber()
    valor: number;

    @IsInt()
    @Min(0)
    quantidadeDisponivel: number;

    @IsNotEmpty({ message: "Campo obrigatório "})
    @MaxLength(1000)
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicasProdutoDTO)
    @ArrayMinSize(3)
    caracteristicas: CaracteristicasProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImagensDTO)
    @ArrayMinSize(1)
    imagens: ImagensDTO[];

    @IsNotEmpty({ message: "Campo obrigatório"})
    categoria: string;

    dataCriacao: Date | string;
    
    dataAtualizacao: Date | string;
}