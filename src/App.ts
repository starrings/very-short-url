import express from 'express';
import { createDBPool } from './common/module/Database';
export class App {
  public app: express.Application;

  constructor() {
      this.app = express();
  }

  private async setDatabase(): Promise<void> {
    try{
      createDBPool();
    } catch (err) {
      console.error(err);
    }
  }
};