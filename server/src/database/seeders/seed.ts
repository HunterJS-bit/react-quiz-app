import { NestFactory } from "@nestjs/core";
import { SeederModule } from "./seeder.module";
import { Seeder } from "./seeder";

async function bootstrap() {
    NestFactory.createApplicationContext(SeederModule)
      .then(appContext => {
        const seeder = appContext.get(Seeder);
        seeder
          .seed()
          .then(() => {
            console.log('Seeding dataaaa');
          })
          .catch(error => {
            console.log('Seeding Failed');
            throw error;
          })
          .finally(() => appContext.close());
      })
      .catch(error => {
        throw error;
      });
}


bootstrap();