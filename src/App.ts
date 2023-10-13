import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { Container } from 'typedi';
import { useContainer, useExpressServer } from 'routing-controllers';
import { createDBPool } from './common/module/Database';
import { routingControllerOptions } from './config/Routing';
import { useSwagger } from './common/module/Swagger';
export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabase();
    this.setServerConfig();
    this.setMiddlewares();
  }

  // 데이터 베이스 세팅
  private async setDatabase(): Promise<void> {
    try {
      createDBPool();
    } catch (err) {
      console.error(err);
    }
  }

  // 미들웨어 설정
  private setMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan(':remote-addr - :method :status :url :res[content-length] - :response-time ms'));
  }

  // 서버 설정
  private setServerConfig(): void {
    this.app.set('trust proxy', true); // 프로토콜 반영 및 req.ip
  }

  // 서버 시작
  public async createExpressServer(port: number): Promise<void> {
    try {
      // typedi를 사용하는 경우 사용
      useContainer(Container);
      useExpressServer(this.app, routingControllerOptions);
      useSwagger(this.app);

      this.app.listen(port, () => {
        console.info(`서버 가동중... 포트번호 ${port}`);
      });
    } catch (err) {
      console.error(err);
    }
  }
}
