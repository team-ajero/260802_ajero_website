import "dotenv/config";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";

/**
 * DB 연결은 첫 쿼리 시점에만 초기화한다(lazy).
 * import 시점에 drizzle()을 실행하면 DATABASE_URL이 없을 때
 * DB를 사용하지 않는 라우트(/, /services 등)의 빌드까지 실패한다.
 * DB 의존 코드는 모두 try/catch로 감싸져 있어, 여기서 던지는 에러는
 * 빈 상태로 처리된다.
 */
let instance: NodePgDatabase | undefined;

/**
 * DATABASE_URL이 없어서 DB를 초기화하지 못한 경우.
 * DB 의존 코드는 이 에러를 "정상적인 빈 상태"로 취급하고 로그를 남기지 않는다.
 * (연결 끊김·쿼리 오류 등 실제 장애는 일반 Error로 올라와 로그에 남는다.)
 */
export class MissingDatabaseUrlError extends Error {
  constructor() {
    super("DATABASE_URL 환경변수가 설정되지 않았습니다.");
    this.name = "MissingDatabaseUrlError";
  }
}

function getDb(): NodePgDatabase {
  if (!instance) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new MissingDatabaseUrlError();
    }
    instance = drizzle(url);
  }
  return instance;
}

export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop) {
    const real = getDb();
    const value = Reflect.get(real, prop, real);
    return typeof value === "function" ? value.bind(real) : value;
  },
});
