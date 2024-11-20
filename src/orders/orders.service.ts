import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Order } from './orders.entity';

@Injectable()
export class OrdersService {
    constructor(private readonly ordersRepository: OrdersRepository) {}

    async getOrder(id: string, userId: string): Promise<Order> {
        const order = await this.ordersRepository.getOrder(id, userId);

        if (!order) {
            throw new NotFoundException('No se encontro la orden');
        }

        return order;
    }

    async addOrder(userId: string, products: any): Promise<Order[]> {
        return this.ordersRepository.addOrder(userId, products);
    }
}
