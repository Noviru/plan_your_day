
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';


export const getDBConnection = async () => {
    return openDatabase({name: 'users.db', location: 'default'});
  };

  export const createTable = async (db: SQLiteDatabase) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS users(
          
      );`;
  
    await db.executeSql(query);
  };

  enablePromise(true);