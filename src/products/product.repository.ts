import { Injectable } from "@nestjs/common";

export interface IProduct {
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: {
        nome: string;
        descricao: string;
    }[];
    imagens: {
        url: string;
        descricao: string;
    }[];
    categoria: string;
    dataCriacao: Date | string;
    dataAtualizacao: Date | string;
}

@Injectable()
export class ProductRepository {
    private products: IProduct[] = [];

    async save(product: IProduct) {
        this.products.push(product)
    }

    async getAllProducts() {
        return this.products;
    }
}