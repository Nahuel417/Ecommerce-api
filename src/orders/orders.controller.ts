import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { createrOrderDto } from 'src/dto/createOrder.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    //* GET *//
    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(AuthGuard)
    getOrder(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
        const userId = req.user.id;
        return this.ordersService.getOrder(id, userId);
    }

    //* POST *//
    @ApiBearerAuth()
    @Post()
    @UseGuards(AuthGuard)
    addOrder(@Body() order: createrOrderDto) {
        const { userId, products } = order;
        return this.ordersService.addOrder(userId, products);
    }
}
