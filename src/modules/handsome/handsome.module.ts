import { Module } from '@nestjs/common';

const HANDSOME_MAN = {
    provide: 'HANDSOME_MAN',
    useFactory: async () => {
        const getName = new Promise((resolve) => {
            setTimeout(() => resolve({name: 'James'}), 2000);
        });
        const HAO = await getName;
        return HAO;
    },
}

@Module({
    providers: [HANDSOME_MAN],
    exports:[HANDSOME_MAN],
})
export class HandsomeModule {}
