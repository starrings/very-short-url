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
      charset: 'utf8mb4',
    });
  } catch (err) {
    console.log('[mysql.connector][init][Error]: ' + err);
    throw new Error('풀 생성에 실패하였습니다');
  }
}

export const execute = <T>(query: string, params: string[] | object): Promise<T> => {
  try {
    if (!pool) throw new Error('풀이 생성되지 않았습니다. 풀이 생성되었는지 확인해주세요.');

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);      
        else resolve(results);
      });
    });
  } catch (error) {
    console.log('[mysql.connector][execute][Error]: ', error);
    throw new Error('쿼리문 실행 실패');
  }
};

export const release = () => {
  pool.end();
};