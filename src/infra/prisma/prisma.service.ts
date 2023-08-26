import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import "dotenv/config";
require('dotenv').config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    constructor() {
        super()
    }

    async onModuleInit() {
        await this.$connect()
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit' as never, async () => {
            await app.close();
        });
    }

}