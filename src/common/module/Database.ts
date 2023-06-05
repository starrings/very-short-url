import { createPool, Pool } from 'mysql';
import { DB_CONFIG } from '../../config/Env';

let pool: Pool;

export const createDBPool = () => {
  try {
    pool = createPool({
      connectionLimit: DB_CONFIG.DB_CONNECTION_LIMIT,
      host: DB_CONFIG.DB_HOST,
      user: DB_CONFIG.DB_USER,
      password: DB_CONFIG.DB_PASSWORD,
      database: DB_CONFIG.DB_DATABASE,
      charset: 'utg8mb4',
    });
  } catch (err) {
    console.log('[mysql.connector][init][Error]: ' + err);
    throw new Error('풀 생성에 실패하였습니다');
  }
}