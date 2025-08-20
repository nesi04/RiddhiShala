
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model UserSchool
 * 
 */
export type UserSchool = $Result.DefaultSelection<Prisma.$UserSchoolPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Infrastructure
 * 
 */
export type Infrastructure = $Result.DefaultSelection<Prisma.$InfrastructurePayload>
/**
 * Model Lab
 * 
 */
export type Lab = $Result.DefaultSelection<Prisma.$LabPayload>
/**
 * Model Pillar
 * 
 */
export type Pillar = $Result.DefaultSelection<Prisma.$PillarPayload>
/**
 * Model Innovation
 * 
 */
export type Innovation = $Result.DefaultSelection<Prisma.$InnovationPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSchool`: Exposes CRUD operations for the **UserSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSchools
    * const userSchools = await prisma.userSchool.findMany()
    * ```
    */
  get userSchool(): Prisma.UserSchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infrastructure`: Exposes CRUD operations for the **Infrastructure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Infrastructures
    * const infrastructures = await prisma.infrastructure.findMany()
    * ```
    */
  get infrastructure(): Prisma.InfrastructureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lab`: Exposes CRUD operations for the **Lab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.lab.findMany()
    * ```
    */
  get lab(): Prisma.LabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pillar`: Exposes CRUD operations for the **Pillar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pillars
    * const pillars = await prisma.pillar.findMany()
    * ```
    */
  get pillar(): Prisma.PillarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.innovation`: Exposes CRUD operations for the **Innovation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Innovations
    * const innovations = await prisma.innovation.findMany()
    * ```
    */
  get innovation(): Prisma.InnovationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    Permission: 'Permission',
    User: 'User',
    RefreshToken: 'RefreshToken',
    UserSchool: 'UserSchool',
    School: 'School',
    Enrollment: 'Enrollment',
    Teacher: 'Teacher',
    Infrastructure: 'Infrastructure',
    Lab: 'Lab',
    Pillar: 'Pillar',
    Innovation: 'Innovation',
    Challenge: 'Challenge',
    Otp: 'Otp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "permission" | "user" | "refreshToken" | "userSchool" | "school" | "enrollment" | "teacher" | "infrastructure" | "lab" | "pillar" | "innovation" | "challenge" | "otp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      UserSchool: {
        payload: Prisma.$UserSchoolPayload<ExtArgs>
        fields: Prisma.UserSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          findFirst: {
            args: Prisma.UserSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          findMany: {
            args: Prisma.UserSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>[]
          }
          create: {
            args: Prisma.UserSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          createMany: {
            args: Prisma.UserSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>[]
          }
          delete: {
            args: Prisma.UserSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          update: {
            args: Prisma.UserSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          deleteMany: {
            args: Prisma.UserSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>[]
          }
          upsert: {
            args: Prisma.UserSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchoolPayload>
          }
          aggregate: {
            args: Prisma.UserSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSchool>
          }
          groupBy: {
            args: Prisma.UserSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<UserSchoolCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Infrastructure: {
        payload: Prisma.$InfrastructurePayload<ExtArgs>
        fields: Prisma.InfrastructureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfrastructureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfrastructureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          findFirst: {
            args: Prisma.InfrastructureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfrastructureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          findMany: {
            args: Prisma.InfrastructureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>[]
          }
          create: {
            args: Prisma.InfrastructureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          createMany: {
            args: Prisma.InfrastructureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfrastructureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>[]
          }
          delete: {
            args: Prisma.InfrastructureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          update: {
            args: Prisma.InfrastructureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          deleteMany: {
            args: Prisma.InfrastructureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfrastructureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfrastructureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>[]
          }
          upsert: {
            args: Prisma.InfrastructureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructurePayload>
          }
          aggregate: {
            args: Prisma.InfrastructureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfrastructure>
          }
          groupBy: {
            args: Prisma.InfrastructureGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfrastructureGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfrastructureCountArgs<ExtArgs>
            result: $Utils.Optional<InfrastructureCountAggregateOutputType> | number
          }
        }
      }
      Lab: {
        payload: Prisma.$LabPayload<ExtArgs>
        fields: Prisma.LabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findFirst: {
            args: Prisma.LabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findMany: {
            args: Prisma.LabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          create: {
            args: Prisma.LabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          createMany: {
            args: Prisma.LabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          delete: {
            args: Prisma.LabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          update: {
            args: Prisma.LabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          deleteMany: {
            args: Prisma.LabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          upsert: {
            args: Prisma.LabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          aggregate: {
            args: Prisma.LabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLab>
          }
          groupBy: {
            args: Prisma.LabGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabCountArgs<ExtArgs>
            result: $Utils.Optional<LabCountAggregateOutputType> | number
          }
        }
      }
      Pillar: {
        payload: Prisma.$PillarPayload<ExtArgs>
        fields: Prisma.PillarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PillarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PillarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          findFirst: {
            args: Prisma.PillarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PillarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          findMany: {
            args: Prisma.PillarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>[]
          }
          create: {
            args: Prisma.PillarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          createMany: {
            args: Prisma.PillarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PillarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>[]
          }
          delete: {
            args: Prisma.PillarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          update: {
            args: Prisma.PillarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          deleteMany: {
            args: Prisma.PillarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PillarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PillarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>[]
          }
          upsert: {
            args: Prisma.PillarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PillarPayload>
          }
          aggregate: {
            args: Prisma.PillarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePillar>
          }
          groupBy: {
            args: Prisma.PillarGroupByArgs<ExtArgs>
            result: $Utils.Optional<PillarGroupByOutputType>[]
          }
          count: {
            args: Prisma.PillarCountArgs<ExtArgs>
            result: $Utils.Optional<PillarCountAggregateOutputType> | number
          }
        }
      }
      Innovation: {
        payload: Prisma.$InnovationPayload<ExtArgs>
        fields: Prisma.InnovationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InnovationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InnovationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          findFirst: {
            args: Prisma.InnovationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InnovationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          findMany: {
            args: Prisma.InnovationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>[]
          }
          create: {
            args: Prisma.InnovationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          createMany: {
            args: Prisma.InnovationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InnovationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>[]
          }
          delete: {
            args: Prisma.InnovationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          update: {
            args: Prisma.InnovationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          deleteMany: {
            args: Prisma.InnovationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InnovationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InnovationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>[]
          }
          upsert: {
            args: Prisma.InnovationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationPayload>
          }
          aggregate: {
            args: Prisma.InnovationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInnovation>
          }
          groupBy: {
            args: Prisma.InnovationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InnovationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InnovationCountArgs<ExtArgs>
            result: $Utils.Optional<InnovationCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    permission?: PermissionOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    userSchool?: UserSchoolOmit
    school?: SchoolOmit
    enrollment?: EnrollmentOmit
    teacher?: TeacherOmit
    infrastructure?: InfrastructureOmit
    lab?: LabOmit
    pillar?: PillarOmit
    innovation?: InnovationOmit
    challenge?: ChallengeOmit
    otp?: OtpOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    users: number
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PermissionCountOutputTypeCountUsersArgs
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    permissions: number
    assignedSchools: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    assignedSchools?: boolean | UserCountOutputTypeCountAssignedSchoolsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSchoolWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    enrollments: number
    teachers: number
    infrastructures: number
    labs: number
    pillars: number
    innovations: number
    challenges: number
    assignedUsers: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | SchoolCountOutputTypeCountEnrollmentsArgs
    teachers?: boolean | SchoolCountOutputTypeCountTeachersArgs
    infrastructures?: boolean | SchoolCountOutputTypeCountInfrastructuresArgs
    labs?: boolean | SchoolCountOutputTypeCountLabsArgs
    pillars?: boolean | SchoolCountOutputTypeCountPillarsArgs
    innovations?: boolean | SchoolCountOutputTypeCountInnovationsArgs
    challenges?: boolean | SchoolCountOutputTypeCountChallengesArgs
    assignedUsers?: boolean | SchoolCountOutputTypeCountAssignedUsersArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountInfrastructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfrastructureWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountLabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountPillarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PillarWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountInnovationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InnovationWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAssignedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSchoolWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Permission$usersArgs<ExtArgs>
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Permission$usersArgs<ExtArgs>
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Permission$usersArgs<ExtArgs> = {}>(args?: Subset<T, Permission$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.users
   */
  export type Permission$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    roleId: number | null
    joinDate: Date | null
    lastActive: Date | null
    isDisabled: boolean | null
    isVerified: boolean | null
    address: string | null
    bio: string | null
    district: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    roleId: number | null
    joinDate: Date | null
    lastActive: Date | null
    isDisabled: boolean | null
    isVerified: boolean | null
    address: string | null
    bio: string | null
    district: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    password: number
    roleId: number
    joinDate: number
    lastActive: number
    isDisabled: number
    isVerified: number
    address: number
    bio: number
    district: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    roleId?: true
    joinDate?: true
    lastActive?: true
    isDisabled?: true
    isVerified?: true
    address?: true
    bio?: true
    district?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    roleId?: true
    joinDate?: true
    lastActive?: true
    isDisabled?: true
    isVerified?: true
    address?: true
    bio?: true
    district?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    roleId?: true
    joinDate?: true
    lastActive?: true
    isDisabled?: true
    isVerified?: true
    address?: true
    bio?: true
    district?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    phoneNumber: string | null
    password: string
    roleId: number
    joinDate: Date
    lastActive: Date | null
    isDisabled: boolean
    isVerified: boolean
    address: string | null
    bio: string | null
    district: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    roleId?: boolean
    joinDate?: boolean
    lastActive?: boolean
    isDisabled?: boolean
    isVerified?: boolean
    address?: boolean
    bio?: boolean
    district?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    assignedSchools?: boolean | User$assignedSchoolsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    roleId?: boolean
    joinDate?: boolean
    lastActive?: boolean
    isDisabled?: boolean
    isVerified?: boolean
    address?: boolean
    bio?: boolean
    district?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    roleId?: boolean
    joinDate?: boolean
    lastActive?: boolean
    isDisabled?: boolean
    isVerified?: boolean
    address?: boolean
    bio?: boolean
    district?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    roleId?: boolean
    joinDate?: boolean
    lastActive?: boolean
    isDisabled?: boolean
    isVerified?: boolean
    address?: boolean
    bio?: boolean
    district?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "password" | "roleId" | "joinDate" | "lastActive" | "isDisabled" | "isVerified" | "address" | "bio" | "district", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    assignedSchools?: boolean | User$assignedSchoolsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      assignedSchools: Prisma.$UserSchoolPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phoneNumber: string | null
      password: string
      roleId: number
      joinDate: Date
      lastActive: Date | null
      isDisabled: boolean
      isVerified: boolean
      address: string | null
      bio: string | null
      district: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permissions<T extends User$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedSchools<T extends User$assignedSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly joinDate: FieldRef<"User", 'DateTime'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly isDisabled: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly address: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly district: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.permissions
   */
  export type User$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.assignedSchools
   */
  export type User$assignedSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    where?: UserSchoolWhereInput
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    cursor?: UserSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSchoolScalarFieldEnum | UserSchoolScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
    replacedByToken: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
    replacedByToken: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    revoked: number
    replacedByToken: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
    replacedByToken?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
    replacedByToken?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
    replacedByToken?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    userId: number
    createdAt: Date
    expiresAt: Date
    revoked: boolean
    replacedByToken: string | null
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    replacedByToken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    replacedByToken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    replacedByToken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    replacedByToken?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "createdAt" | "expiresAt" | "revoked" | "replacedByToken", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
      createdAt: Date
      expiresAt: Date
      revoked: boolean
      replacedByToken: string | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly replacedByToken: FieldRef<"RefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model UserSchool
   */

  export type AggregateUserSchool = {
    _count: UserSchoolCountAggregateOutputType | null
    _avg: UserSchoolAvgAggregateOutputType | null
    _sum: UserSchoolSumAggregateOutputType | null
    _min: UserSchoolMinAggregateOutputType | null
    _max: UserSchoolMaxAggregateOutputType | null
  }

  export type UserSchoolAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type UserSchoolSumAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type UserSchoolMinAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type UserSchoolMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type UserSchoolCountAggregateOutputType = {
    id: number
    userId: number
    schoolId: number
    _all: number
  }


  export type UserSchoolAvgAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type UserSchoolSumAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type UserSchoolMinAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type UserSchoolMaxAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type UserSchoolCountAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    _all?: true
  }

  export type UserSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchool to aggregate.
     */
    where?: UserSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchools to fetch.
     */
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSchools
    **/
    _count?: true | UserSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSchoolMaxAggregateInputType
  }

  export type GetUserSchoolAggregateType<T extends UserSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSchool[P]>
      : GetScalarType<T[P], AggregateUserSchool[P]>
  }




  export type UserSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSchoolWhereInput
    orderBy?: UserSchoolOrderByWithAggregationInput | UserSchoolOrderByWithAggregationInput[]
    by: UserSchoolScalarFieldEnum[] | UserSchoolScalarFieldEnum
    having?: UserSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSchoolCountAggregateInputType | true
    _avg?: UserSchoolAvgAggregateInputType
    _sum?: UserSchoolSumAggregateInputType
    _min?: UserSchoolMinAggregateInputType
    _max?: UserSchoolMaxAggregateInputType
  }

  export type UserSchoolGroupByOutputType = {
    id: number
    userId: number
    schoolId: number
    _count: UserSchoolCountAggregateOutputType | null
    _avg: UserSchoolAvgAggregateOutputType | null
    _sum: UserSchoolSumAggregateOutputType | null
    _min: UserSchoolMinAggregateOutputType | null
    _max: UserSchoolMaxAggregateOutputType | null
  }

  type GetUserSchoolGroupByPayload<T extends UserSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], UserSchoolGroupByOutputType[P]>
        }
      >
    >


  export type UserSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSchool"]>

  export type UserSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSchool"]>

  export type UserSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSchool"]>

  export type UserSchoolSelectScalar = {
    id?: boolean
    userId?: boolean
    schoolId?: boolean
  }

  export type UserSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schoolId", ExtArgs["result"]["userSchool"]>
  export type UserSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type UserSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type UserSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $UserSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSchool"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      schoolId: number
    }, ExtArgs["result"]["userSchool"]>
    composites: {}
  }

  type UserSchoolGetPayload<S extends boolean | null | undefined | UserSchoolDefaultArgs> = $Result.GetResult<Prisma.$UserSchoolPayload, S>

  type UserSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSchoolCountAggregateInputType | true
    }

  export interface UserSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSchool'], meta: { name: 'UserSchool' } }
    /**
     * Find zero or one UserSchool that matches the filter.
     * @param {UserSchoolFindUniqueArgs} args - Arguments to find a UserSchool
     * @example
     * // Get one UserSchool
     * const userSchool = await prisma.userSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSchoolFindUniqueArgs>(args: SelectSubset<T, UserSchoolFindUniqueArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSchoolFindUniqueOrThrowArgs} args - Arguments to find a UserSchool
     * @example
     * // Get one UserSchool
     * const userSchool = await prisma.userSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolFindFirstArgs} args - Arguments to find a UserSchool
     * @example
     * // Get one UserSchool
     * const userSchool = await prisma.userSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSchoolFindFirstArgs>(args?: SelectSubset<T, UserSchoolFindFirstArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolFindFirstOrThrowArgs} args - Arguments to find a UserSchool
     * @example
     * // Get one UserSchool
     * const userSchool = await prisma.userSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSchools
     * const userSchools = await prisma.userSchool.findMany()
     * 
     * // Get first 10 UserSchools
     * const userSchools = await prisma.userSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSchoolWithIdOnly = await prisma.userSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSchoolFindManyArgs>(args?: SelectSubset<T, UserSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSchool.
     * @param {UserSchoolCreateArgs} args - Arguments to create a UserSchool.
     * @example
     * // Create one UserSchool
     * const UserSchool = await prisma.userSchool.create({
     *   data: {
     *     // ... data to create a UserSchool
     *   }
     * })
     * 
     */
    create<T extends UserSchoolCreateArgs>(args: SelectSubset<T, UserSchoolCreateArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSchools.
     * @param {UserSchoolCreateManyArgs} args - Arguments to create many UserSchools.
     * @example
     * // Create many UserSchools
     * const userSchool = await prisma.userSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSchoolCreateManyArgs>(args?: SelectSubset<T, UserSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSchools and returns the data saved in the database.
     * @param {UserSchoolCreateManyAndReturnArgs} args - Arguments to create many UserSchools.
     * @example
     * // Create many UserSchools
     * const userSchool = await prisma.userSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSchools and only return the `id`
     * const userSchoolWithIdOnly = await prisma.userSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSchool.
     * @param {UserSchoolDeleteArgs} args - Arguments to delete one UserSchool.
     * @example
     * // Delete one UserSchool
     * const UserSchool = await prisma.userSchool.delete({
     *   where: {
     *     // ... filter to delete one UserSchool
     *   }
     * })
     * 
     */
    delete<T extends UserSchoolDeleteArgs>(args: SelectSubset<T, UserSchoolDeleteArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSchool.
     * @param {UserSchoolUpdateArgs} args - Arguments to update one UserSchool.
     * @example
     * // Update one UserSchool
     * const userSchool = await prisma.userSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSchoolUpdateArgs>(args: SelectSubset<T, UserSchoolUpdateArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSchools.
     * @param {UserSchoolDeleteManyArgs} args - Arguments to filter UserSchools to delete.
     * @example
     * // Delete a few UserSchools
     * const { count } = await prisma.userSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSchoolDeleteManyArgs>(args?: SelectSubset<T, UserSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSchools
     * const userSchool = await prisma.userSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSchoolUpdateManyArgs>(args: SelectSubset<T, UserSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchools and returns the data updated in the database.
     * @param {UserSchoolUpdateManyAndReturnArgs} args - Arguments to update many UserSchools.
     * @example
     * // Update many UserSchools
     * const userSchool = await prisma.userSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSchools and only return the `id`
     * const userSchoolWithIdOnly = await prisma.userSchool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSchool.
     * @param {UserSchoolUpsertArgs} args - Arguments to update or create a UserSchool.
     * @example
     * // Update or create a UserSchool
     * const userSchool = await prisma.userSchool.upsert({
     *   create: {
     *     // ... data to create a UserSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSchool we want to update
     *   }
     * })
     */
    upsert<T extends UserSchoolUpsertArgs>(args: SelectSubset<T, UserSchoolUpsertArgs<ExtArgs>>): Prisma__UserSchoolClient<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolCountArgs} args - Arguments to filter UserSchools to count.
     * @example
     * // Count the number of UserSchools
     * const count = await prisma.userSchool.count({
     *   where: {
     *     // ... the filter for the UserSchools we want to count
     *   }
     * })
    **/
    count<T extends UserSchoolCountArgs>(
      args?: Subset<T, UserSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSchoolAggregateArgs>(args: Subset<T, UserSchoolAggregateArgs>): Prisma.PrismaPromise<GetUserSchoolAggregateType<T>>

    /**
     * Group by UserSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSchoolGroupByArgs['orderBy'] }
        : { orderBy?: UserSchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSchool model
   */
  readonly fields: UserSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSchool model
   */
  interface UserSchoolFieldRefs {
    readonly id: FieldRef<"UserSchool", 'Int'>
    readonly userId: FieldRef<"UserSchool", 'Int'>
    readonly schoolId: FieldRef<"UserSchool", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserSchool findUnique
   */
  export type UserSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter, which UserSchool to fetch.
     */
    where: UserSchoolWhereUniqueInput
  }

  /**
   * UserSchool findUniqueOrThrow
   */
  export type UserSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter, which UserSchool to fetch.
     */
    where: UserSchoolWhereUniqueInput
  }

  /**
   * UserSchool findFirst
   */
  export type UserSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter, which UserSchool to fetch.
     */
    where?: UserSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchools to fetch.
     */
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchools.
     */
    cursor?: UserSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchools.
     */
    distinct?: UserSchoolScalarFieldEnum | UserSchoolScalarFieldEnum[]
  }

  /**
   * UserSchool findFirstOrThrow
   */
  export type UserSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter, which UserSchool to fetch.
     */
    where?: UserSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchools to fetch.
     */
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchools.
     */
    cursor?: UserSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchools.
     */
    distinct?: UserSchoolScalarFieldEnum | UserSchoolScalarFieldEnum[]
  }

  /**
   * UserSchool findMany
   */
  export type UserSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter, which UserSchools to fetch.
     */
    where?: UserSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchools to fetch.
     */
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSchools.
     */
    cursor?: UserSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchools.
     */
    skip?: number
    distinct?: UserSchoolScalarFieldEnum | UserSchoolScalarFieldEnum[]
  }

  /**
   * UserSchool create
   */
  export type UserSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSchool.
     */
    data: XOR<UserSchoolCreateInput, UserSchoolUncheckedCreateInput>
  }

  /**
   * UserSchool createMany
   */
  export type UserSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSchools.
     */
    data: UserSchoolCreateManyInput | UserSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchool createManyAndReturn
   */
  export type UserSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many UserSchools.
     */
    data: UserSchoolCreateManyInput | UserSchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSchool update
   */
  export type UserSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSchool.
     */
    data: XOR<UserSchoolUpdateInput, UserSchoolUncheckedUpdateInput>
    /**
     * Choose, which UserSchool to update.
     */
    where: UserSchoolWhereUniqueInput
  }

  /**
   * UserSchool updateMany
   */
  export type UserSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSchools.
     */
    data: XOR<UserSchoolUpdateManyMutationInput, UserSchoolUncheckedUpdateManyInput>
    /**
     * Filter which UserSchools to update
     */
    where?: UserSchoolWhereInput
    /**
     * Limit how many UserSchools to update.
     */
    limit?: number
  }

  /**
   * UserSchool updateManyAndReturn
   */
  export type UserSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * The data used to update UserSchools.
     */
    data: XOR<UserSchoolUpdateManyMutationInput, UserSchoolUncheckedUpdateManyInput>
    /**
     * Filter which UserSchools to update
     */
    where?: UserSchoolWhereInput
    /**
     * Limit how many UserSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSchool upsert
   */
  export type UserSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSchool to update in case it exists.
     */
    where: UserSchoolWhereUniqueInput
    /**
     * In case the UserSchool found by the `where` argument doesn't exist, create a new UserSchool with this data.
     */
    create: XOR<UserSchoolCreateInput, UserSchoolUncheckedCreateInput>
    /**
     * In case the UserSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSchoolUpdateInput, UserSchoolUncheckedUpdateInput>
  }

  /**
   * UserSchool delete
   */
  export type UserSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    /**
     * Filter which UserSchool to delete.
     */
    where: UserSchoolWhereUniqueInput
  }

  /**
   * UserSchool deleteMany
   */
  export type UserSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchools to delete
     */
    where?: UserSchoolWhereInput
    /**
     * Limit how many UserSchools to delete.
     */
    limit?: number
  }

  /**
   * UserSchool without action
   */
  export type UserSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
    established: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
    established: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    established: number | null
    upgradedYear: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    village: string | null
    management: string | null
    type: string | null
    medium: string | null
    inclusive: boolean | null
    coed: boolean | null
    totalArea: string | null
    principal: string | null
    principalSince: string | null
    principalQualification: string | null
    principalProfessionalQualification: string | null
    principalJoiningDate: string | null
    principalExperience: string | null
    principalContact: string | null
    principalEmail: string | null
    midDayMeal: string | null
    drinkingWater: string | null
    electricity: string | null
    internet: string | null
    fireSafety: string | null
    teacherPhotosDisplayed: boolean | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    established: number | null
    upgradedYear: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    village: string | null
    management: string | null
    type: string | null
    medium: string | null
    inclusive: boolean | null
    coed: boolean | null
    totalArea: string | null
    principal: string | null
    principalSince: string | null
    principalQualification: string | null
    principalProfessionalQualification: string | null
    principalJoiningDate: string | null
    principalExperience: string | null
    principalContact: string | null
    principalEmail: string | null
    midDayMeal: string | null
    drinkingWater: string | null
    electricity: string | null
    internet: string | null
    fireSafety: string | null
    teacherPhotosDisplayed: boolean | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    status: number
    established: number
    upgradedYear: number
    udiseCode: number
    district: number
    block: number
    cluster: number
    village: number
    management: number
    type: number
    medium: number
    inclusive: number
    vocationalTrades: number
    coed: number
    totalArea: number
    principal: number
    principalSince: number
    principalQualification: number
    principalProfessionalQualification: number
    principalJoiningDate: number
    principalExperience: number
    principalContact: number
    principalEmail: number
    midDayMeal: number
    drinkingWater: number
    electricity: number
    internet: number
    fireSafety: number
    teacherPhotosDisplayed: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
    established?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
    established?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    established?: true
    upgradedYear?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    village?: true
    management?: true
    type?: true
    medium?: true
    inclusive?: true
    coed?: true
    totalArea?: true
    principal?: true
    principalSince?: true
    principalQualification?: true
    principalProfessionalQualification?: true
    principalJoiningDate?: true
    principalExperience?: true
    principalContact?: true
    principalEmail?: true
    midDayMeal?: true
    drinkingWater?: true
    electricity?: true
    internet?: true
    fireSafety?: true
    teacherPhotosDisplayed?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    established?: true
    upgradedYear?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    village?: true
    management?: true
    type?: true
    medium?: true
    inclusive?: true
    coed?: true
    totalArea?: true
    principal?: true
    principalSince?: true
    principalQualification?: true
    principalProfessionalQualification?: true
    principalJoiningDate?: true
    principalExperience?: true
    principalContact?: true
    principalEmail?: true
    midDayMeal?: true
    drinkingWater?: true
    electricity?: true
    internet?: true
    fireSafety?: true
    teacherPhotosDisplayed?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    established?: true
    upgradedYear?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    village?: true
    management?: true
    type?: true
    medium?: true
    inclusive?: true
    vocationalTrades?: true
    coed?: true
    totalArea?: true
    principal?: true
    principalSince?: true
    principalQualification?: true
    principalProfessionalQualification?: true
    principalJoiningDate?: true
    principalExperience?: true
    principalContact?: true
    principalEmail?: true
    midDayMeal?: true
    drinkingWater?: true
    electricity?: true
    internet?: true
    fireSafety?: true
    teacherPhotosDisplayed?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    status: string
    established: number | null
    upgradedYear: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    village: string | null
    management: string | null
    type: string | null
    medium: string | null
    inclusive: boolean | null
    vocationalTrades: string[]
    coed: boolean | null
    totalArea: string | null
    principal: string | null
    principalSince: string | null
    principalQualification: string | null
    principalProfessionalQualification: string | null
    principalJoiningDate: string | null
    principalExperience: string | null
    principalContact: string | null
    principalEmail: string | null
    midDayMeal: string | null
    drinkingWater: string | null
    electricity: string | null
    internet: string | null
    fireSafety: string | null
    teacherPhotosDisplayed: boolean | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    established?: boolean
    upgradedYear?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    village?: boolean
    management?: boolean
    type?: boolean
    medium?: boolean
    inclusive?: boolean
    vocationalTrades?: boolean
    coed?: boolean
    totalArea?: boolean
    principal?: boolean
    principalSince?: boolean
    principalQualification?: boolean
    principalProfessionalQualification?: boolean
    principalJoiningDate?: boolean
    principalExperience?: boolean
    principalContact?: boolean
    principalEmail?: boolean
    midDayMeal?: boolean
    drinkingWater?: boolean
    electricity?: boolean
    internet?: boolean
    fireSafety?: boolean
    teacherPhotosDisplayed?: boolean
    enrollments?: boolean | School$enrollmentsArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    infrastructures?: boolean | School$infrastructuresArgs<ExtArgs>
    labs?: boolean | School$labsArgs<ExtArgs>
    pillars?: boolean | School$pillarsArgs<ExtArgs>
    innovations?: boolean | School$innovationsArgs<ExtArgs>
    challenges?: boolean | School$challengesArgs<ExtArgs>
    assignedUsers?: boolean | School$assignedUsersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    established?: boolean
    upgradedYear?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    village?: boolean
    management?: boolean
    type?: boolean
    medium?: boolean
    inclusive?: boolean
    vocationalTrades?: boolean
    coed?: boolean
    totalArea?: boolean
    principal?: boolean
    principalSince?: boolean
    principalQualification?: boolean
    principalProfessionalQualification?: boolean
    principalJoiningDate?: boolean
    principalExperience?: boolean
    principalContact?: boolean
    principalEmail?: boolean
    midDayMeal?: boolean
    drinkingWater?: boolean
    electricity?: boolean
    internet?: boolean
    fireSafety?: boolean
    teacherPhotosDisplayed?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    established?: boolean
    upgradedYear?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    village?: boolean
    management?: boolean
    type?: boolean
    medium?: boolean
    inclusive?: boolean
    vocationalTrades?: boolean
    coed?: boolean
    totalArea?: boolean
    principal?: boolean
    principalSince?: boolean
    principalQualification?: boolean
    principalProfessionalQualification?: boolean
    principalJoiningDate?: boolean
    principalExperience?: boolean
    principalContact?: boolean
    principalEmail?: boolean
    midDayMeal?: boolean
    drinkingWater?: boolean
    electricity?: boolean
    internet?: boolean
    fireSafety?: boolean
    teacherPhotosDisplayed?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    established?: boolean
    upgradedYear?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    village?: boolean
    management?: boolean
    type?: boolean
    medium?: boolean
    inclusive?: boolean
    vocationalTrades?: boolean
    coed?: boolean
    totalArea?: boolean
    principal?: boolean
    principalSince?: boolean
    principalQualification?: boolean
    principalProfessionalQualification?: boolean
    principalJoiningDate?: boolean
    principalExperience?: boolean
    principalContact?: boolean
    principalEmail?: boolean
    midDayMeal?: boolean
    drinkingWater?: boolean
    electricity?: boolean
    internet?: boolean
    fireSafety?: boolean
    teacherPhotosDisplayed?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "established" | "upgradedYear" | "udiseCode" | "district" | "block" | "cluster" | "village" | "management" | "type" | "medium" | "inclusive" | "vocationalTrades" | "coed" | "totalArea" | "principal" | "principalSince" | "principalQualification" | "principalProfessionalQualification" | "principalJoiningDate" | "principalExperience" | "principalContact" | "principalEmail" | "midDayMeal" | "drinkingWater" | "electricity" | "internet" | "fireSafety" | "teacherPhotosDisplayed", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | School$enrollmentsArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    infrastructures?: boolean | School$infrastructuresArgs<ExtArgs>
    labs?: boolean | School$labsArgs<ExtArgs>
    pillars?: boolean | School$pillarsArgs<ExtArgs>
    innovations?: boolean | School$innovationsArgs<ExtArgs>
    challenges?: boolean | School$challengesArgs<ExtArgs>
    assignedUsers?: boolean | School$assignedUsersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      teachers: Prisma.$TeacherPayload<ExtArgs>[]
      infrastructures: Prisma.$InfrastructurePayload<ExtArgs>[]
      labs: Prisma.$LabPayload<ExtArgs>[]
      pillars: Prisma.$PillarPayload<ExtArgs>[]
      innovations: Prisma.$InnovationPayload<ExtArgs>[]
      challenges: Prisma.$ChallengePayload<ExtArgs>[]
      assignedUsers: Prisma.$UserSchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: string
      established: number | null
      upgradedYear: string | null
      udiseCode: string | null
      district: string | null
      block: string | null
      cluster: string | null
      village: string | null
      management: string | null
      type: string | null
      medium: string | null
      inclusive: boolean | null
      vocationalTrades: string[]
      coed: boolean | null
      totalArea: string | null
      principal: string | null
      principalSince: string | null
      principalQualification: string | null
      principalProfessionalQualification: string | null
      principalJoiningDate: string | null
      principalExperience: string | null
      principalContact: string | null
      principalEmail: string | null
      midDayMeal: string | null
      drinkingWater: string | null
      electricity: string | null
      internet: string | null
      fireSafety: string | null
      teacherPhotosDisplayed: boolean | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollments<T extends School$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, School$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends School$teachersArgs<ExtArgs> = {}>(args?: Subset<T, School$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    infrastructures<T extends School$infrastructuresArgs<ExtArgs> = {}>(args?: Subset<T, School$infrastructuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labs<T extends School$labsArgs<ExtArgs> = {}>(args?: Subset<T, School$labsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pillars<T extends School$pillarsArgs<ExtArgs> = {}>(args?: Subset<T, School$pillarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    innovations<T extends School$innovationsArgs<ExtArgs> = {}>(args?: Subset<T, School$innovationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges<T extends School$challengesArgs<ExtArgs> = {}>(args?: Subset<T, School$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedUsers<T extends School$assignedUsersArgs<ExtArgs> = {}>(args?: Subset<T, School$assignedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly status: FieldRef<"School", 'String'>
    readonly established: FieldRef<"School", 'Int'>
    readonly upgradedYear: FieldRef<"School", 'String'>
    readonly udiseCode: FieldRef<"School", 'String'>
    readonly district: FieldRef<"School", 'String'>
    readonly block: FieldRef<"School", 'String'>
    readonly cluster: FieldRef<"School", 'String'>
    readonly village: FieldRef<"School", 'String'>
    readonly management: FieldRef<"School", 'String'>
    readonly type: FieldRef<"School", 'String'>
    readonly medium: FieldRef<"School", 'String'>
    readonly inclusive: FieldRef<"School", 'Boolean'>
    readonly vocationalTrades: FieldRef<"School", 'String[]'>
    readonly coed: FieldRef<"School", 'Boolean'>
    readonly totalArea: FieldRef<"School", 'String'>
    readonly principal: FieldRef<"School", 'String'>
    readonly principalSince: FieldRef<"School", 'String'>
    readonly principalQualification: FieldRef<"School", 'String'>
    readonly principalProfessionalQualification: FieldRef<"School", 'String'>
    readonly principalJoiningDate: FieldRef<"School", 'String'>
    readonly principalExperience: FieldRef<"School", 'String'>
    readonly principalContact: FieldRef<"School", 'String'>
    readonly principalEmail: FieldRef<"School", 'String'>
    readonly midDayMeal: FieldRef<"School", 'String'>
    readonly drinkingWater: FieldRef<"School", 'String'>
    readonly electricity: FieldRef<"School", 'String'>
    readonly internet: FieldRef<"School", 'String'>
    readonly fireSafety: FieldRef<"School", 'String'>
    readonly teacherPhotosDisplayed: FieldRef<"School", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.enrollments
   */
  export type School$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * School.teachers
   */
  export type School$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * School.infrastructures
   */
  export type School$infrastructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    where?: InfrastructureWhereInput
    orderBy?: InfrastructureOrderByWithRelationInput | InfrastructureOrderByWithRelationInput[]
    cursor?: InfrastructureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfrastructureScalarFieldEnum | InfrastructureScalarFieldEnum[]
  }

  /**
   * School.labs
   */
  export type School$labsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    where?: LabWhereInput
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    cursor?: LabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * School.pillars
   */
  export type School$pillarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    where?: PillarWhereInput
    orderBy?: PillarOrderByWithRelationInput | PillarOrderByWithRelationInput[]
    cursor?: PillarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PillarScalarFieldEnum | PillarScalarFieldEnum[]
  }

  /**
   * School.innovations
   */
  export type School$innovationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    where?: InnovationWhereInput
    orderBy?: InnovationOrderByWithRelationInput | InnovationOrderByWithRelationInput[]
    cursor?: InnovationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InnovationScalarFieldEnum | InnovationScalarFieldEnum[]
  }

  /**
   * School.challenges
   */
  export type School$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * School.assignedUsers
   */
  export type School$assignedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchool
     */
    select?: UserSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchool
     */
    omit?: UserSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchoolInclude<ExtArgs> | null
    where?: UserSchoolWhereInput
    orderBy?: UserSchoolOrderByWithRelationInput | UserSchoolOrderByWithRelationInput[]
    cursor?: UserSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSchoolScalarFieldEnum | UserSchoolScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    boys: number | null
    girls: number | null
    total: number | null
    cwsn: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    boys: number | null
    girls: number | null
    total: number | null
    cwsn: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    class: string | null
    boys: number | null
    girls: number | null
    total: number | null
    cwsn: number | null
    remarks: string | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    class: string | null
    boys: number | null
    girls: number | null
    total: number | null
    cwsn: number | null
    remarks: string | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    schoolId: number
    class: number
    boys: number
    girls: number
    total: number
    cwsn: number
    remarks: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    schoolId?: true
    boys?: true
    girls?: true
    total?: true
    cwsn?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    schoolId?: true
    boys?: true
    girls?: true
    total?: true
    cwsn?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    schoolId?: true
    class?: true
    boys?: true
    girls?: true
    total?: true
    cwsn?: true
    remarks?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    schoolId?: true
    class?: true
    boys?: true
    girls?: true
    total?: true
    cwsn?: true
    remarks?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    schoolId?: true
    class?: true
    boys?: true
    girls?: true
    total?: true
    cwsn?: true
    remarks?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    schoolId: number
    class: string
    boys: number | null
    girls: number | null
    total: number | null
    cwsn: number | null
    remarks: string | null
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    class?: boolean
    boys?: boolean
    girls?: boolean
    total?: boolean
    cwsn?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    class?: boolean
    boys?: boolean
    girls?: boolean
    total?: boolean
    cwsn?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    class?: boolean
    boys?: boolean
    girls?: boolean
    total?: boolean
    cwsn?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    schoolId?: boolean
    class?: boolean
    boys?: boolean
    girls?: boolean
    total?: boolean
    cwsn?: boolean
    remarks?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "class" | "boys" | "girls" | "total" | "cwsn" | "remarks", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      class: string
      boys: number | null
      girls: number | null
      total: number | null
      cwsn: number | null
      remarks: string | null
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly schoolId: FieldRef<"Enrollment", 'Int'>
    readonly class: FieldRef<"Enrollment", 'String'>
    readonly boys: FieldRef<"Enrollment", 'Int'>
    readonly girls: FieldRef<"Enrollment", 'Int'>
    readonly total: FieldRef<"Enrollment", 'Int'>
    readonly cwsn: FieldRef<"Enrollment", 'Int'>
    readonly remarks: FieldRef<"Enrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    gender: string | null
    mobile: string | null
    qualification: string | null
    section: string | null
    classes: string | null
    subjects: string | null
    iecTraining: string | null
    experience: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    gender: string | null
    mobile: string | null
    qualification: string | null
    section: string | null
    classes: string | null
    subjects: string | null
    iecTraining: string | null
    experience: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    gender: number
    mobile: number
    qualification: number
    section: number
    classes: number
    subjects: number
    iecTraining: number
    experience: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    gender?: true
    mobile?: true
    qualification?: true
    section?: true
    classes?: true
    subjects?: true
    iecTraining?: true
    experience?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    gender?: true
    mobile?: true
    qualification?: true
    section?: true
    classes?: true
    subjects?: true
    iecTraining?: true
    experience?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    gender?: true
    mobile?: true
    qualification?: true
    section?: true
    classes?: true
    subjects?: true
    iecTraining?: true
    experience?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    schoolId: number
    name: string
    gender: string | null
    mobile: string | null
    qualification: string | null
    section: string | null
    classes: string | null
    subjects: string | null
    iecTraining: string | null
    experience: string | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    gender?: boolean
    mobile?: boolean
    qualification?: boolean
    section?: boolean
    classes?: boolean
    subjects?: boolean
    iecTraining?: boolean
    experience?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    gender?: boolean
    mobile?: boolean
    qualification?: boolean
    section?: boolean
    classes?: boolean
    subjects?: boolean
    iecTraining?: boolean
    experience?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    gender?: boolean
    mobile?: boolean
    qualification?: boolean
    section?: boolean
    classes?: boolean
    subjects?: boolean
    iecTraining?: boolean
    experience?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    gender?: boolean
    mobile?: boolean
    qualification?: boolean
    section?: boolean
    classes?: boolean
    subjects?: boolean
    iecTraining?: boolean
    experience?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "name" | "gender" | "mobile" | "qualification" | "section" | "classes" | "subjects" | "iecTraining" | "experience", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      name: string
      gender: string | null
      mobile: string | null
      qualification: string | null
      section: string | null
      classes: string | null
      subjects: string | null
      iecTraining: string | null
      experience: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly schoolId: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly gender: FieldRef<"Teacher", 'String'>
    readonly mobile: FieldRef<"Teacher", 'String'>
    readonly qualification: FieldRef<"Teacher", 'String'>
    readonly section: FieldRef<"Teacher", 'String'>
    readonly classes: FieldRef<"Teacher", 'String'>
    readonly subjects: FieldRef<"Teacher", 'String'>
    readonly iecTraining: FieldRef<"Teacher", 'String'>
    readonly experience: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Infrastructure
   */

  export type AggregateInfrastructure = {
    _count: InfrastructureCountAggregateOutputType | null
    _avg: InfrastructureAvgAggregateOutputType | null
    _sum: InfrastructureSumAggregateOutputType | null
    _min: InfrastructureMinAggregateOutputType | null
    _max: InfrastructureMaxAggregateOutputType | null
  }

  export type InfrastructureAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    quantity: number | null
  }

  export type InfrastructureSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    quantity: number | null
  }

  export type InfrastructureMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    facility: string | null
    quantity: number | null
    status: string | null
    remarks: string | null
  }

  export type InfrastructureMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    facility: string | null
    quantity: number | null
    status: string | null
    remarks: string | null
  }

  export type InfrastructureCountAggregateOutputType = {
    id: number
    schoolId: number
    facility: number
    quantity: number
    status: number
    remarks: number
    _all: number
  }


  export type InfrastructureAvgAggregateInputType = {
    id?: true
    schoolId?: true
    quantity?: true
  }

  export type InfrastructureSumAggregateInputType = {
    id?: true
    schoolId?: true
    quantity?: true
  }

  export type InfrastructureMinAggregateInputType = {
    id?: true
    schoolId?: true
    facility?: true
    quantity?: true
    status?: true
    remarks?: true
  }

  export type InfrastructureMaxAggregateInputType = {
    id?: true
    schoolId?: true
    facility?: true
    quantity?: true
    status?: true
    remarks?: true
  }

  export type InfrastructureCountAggregateInputType = {
    id?: true
    schoolId?: true
    facility?: true
    quantity?: true
    status?: true
    remarks?: true
    _all?: true
  }

  export type InfrastructureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Infrastructure to aggregate.
     */
    where?: InfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Infrastructures to fetch.
     */
    orderBy?: InfrastructureOrderByWithRelationInput | InfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Infrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Infrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Infrastructures
    **/
    _count?: true | InfrastructureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfrastructureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfrastructureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfrastructureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfrastructureMaxAggregateInputType
  }

  export type GetInfrastructureAggregateType<T extends InfrastructureAggregateArgs> = {
        [P in keyof T & keyof AggregateInfrastructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfrastructure[P]>
      : GetScalarType<T[P], AggregateInfrastructure[P]>
  }




  export type InfrastructureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfrastructureWhereInput
    orderBy?: InfrastructureOrderByWithAggregationInput | InfrastructureOrderByWithAggregationInput[]
    by: InfrastructureScalarFieldEnum[] | InfrastructureScalarFieldEnum
    having?: InfrastructureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfrastructureCountAggregateInputType | true
    _avg?: InfrastructureAvgAggregateInputType
    _sum?: InfrastructureSumAggregateInputType
    _min?: InfrastructureMinAggregateInputType
    _max?: InfrastructureMaxAggregateInputType
  }

  export type InfrastructureGroupByOutputType = {
    id: number
    schoolId: number
    facility: string
    quantity: number | null
    status: string | null
    remarks: string | null
    _count: InfrastructureCountAggregateOutputType | null
    _avg: InfrastructureAvgAggregateOutputType | null
    _sum: InfrastructureSumAggregateOutputType | null
    _min: InfrastructureMinAggregateOutputType | null
    _max: InfrastructureMaxAggregateOutputType | null
  }

  type GetInfrastructureGroupByPayload<T extends InfrastructureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfrastructureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfrastructureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfrastructureGroupByOutputType[P]>
            : GetScalarType<T[P], InfrastructureGroupByOutputType[P]>
        }
      >
    >


  export type InfrastructureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    facility?: boolean
    quantity?: boolean
    status?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructure"]>

  export type InfrastructureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    facility?: boolean
    quantity?: boolean
    status?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructure"]>

  export type InfrastructureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    facility?: boolean
    quantity?: boolean
    status?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructure"]>

  export type InfrastructureSelectScalar = {
    id?: boolean
    schoolId?: boolean
    facility?: boolean
    quantity?: boolean
    status?: boolean
    remarks?: boolean
  }

  export type InfrastructureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "facility" | "quantity" | "status" | "remarks", ExtArgs["result"]["infrastructure"]>
  export type InfrastructureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type InfrastructureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type InfrastructureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $InfrastructurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Infrastructure"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      facility: string
      quantity: number | null
      status: string | null
      remarks: string | null
    }, ExtArgs["result"]["infrastructure"]>
    composites: {}
  }

  type InfrastructureGetPayload<S extends boolean | null | undefined | InfrastructureDefaultArgs> = $Result.GetResult<Prisma.$InfrastructurePayload, S>

  type InfrastructureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfrastructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfrastructureCountAggregateInputType | true
    }

  export interface InfrastructureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Infrastructure'], meta: { name: 'Infrastructure' } }
    /**
     * Find zero or one Infrastructure that matches the filter.
     * @param {InfrastructureFindUniqueArgs} args - Arguments to find a Infrastructure
     * @example
     * // Get one Infrastructure
     * const infrastructure = await prisma.infrastructure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfrastructureFindUniqueArgs>(args: SelectSubset<T, InfrastructureFindUniqueArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Infrastructure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfrastructureFindUniqueOrThrowArgs} args - Arguments to find a Infrastructure
     * @example
     * // Get one Infrastructure
     * const infrastructure = await prisma.infrastructure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfrastructureFindUniqueOrThrowArgs>(args: SelectSubset<T, InfrastructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infrastructure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureFindFirstArgs} args - Arguments to find a Infrastructure
     * @example
     * // Get one Infrastructure
     * const infrastructure = await prisma.infrastructure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfrastructureFindFirstArgs>(args?: SelectSubset<T, InfrastructureFindFirstArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infrastructure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureFindFirstOrThrowArgs} args - Arguments to find a Infrastructure
     * @example
     * // Get one Infrastructure
     * const infrastructure = await prisma.infrastructure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfrastructureFindFirstOrThrowArgs>(args?: SelectSubset<T, InfrastructureFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Infrastructures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Infrastructures
     * const infrastructures = await prisma.infrastructure.findMany()
     * 
     * // Get first 10 Infrastructures
     * const infrastructures = await prisma.infrastructure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infrastructureWithIdOnly = await prisma.infrastructure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfrastructureFindManyArgs>(args?: SelectSubset<T, InfrastructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Infrastructure.
     * @param {InfrastructureCreateArgs} args - Arguments to create a Infrastructure.
     * @example
     * // Create one Infrastructure
     * const Infrastructure = await prisma.infrastructure.create({
     *   data: {
     *     // ... data to create a Infrastructure
     *   }
     * })
     * 
     */
    create<T extends InfrastructureCreateArgs>(args: SelectSubset<T, InfrastructureCreateArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Infrastructures.
     * @param {InfrastructureCreateManyArgs} args - Arguments to create many Infrastructures.
     * @example
     * // Create many Infrastructures
     * const infrastructure = await prisma.infrastructure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfrastructureCreateManyArgs>(args?: SelectSubset<T, InfrastructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Infrastructures and returns the data saved in the database.
     * @param {InfrastructureCreateManyAndReturnArgs} args - Arguments to create many Infrastructures.
     * @example
     * // Create many Infrastructures
     * const infrastructure = await prisma.infrastructure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Infrastructures and only return the `id`
     * const infrastructureWithIdOnly = await prisma.infrastructure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfrastructureCreateManyAndReturnArgs>(args?: SelectSubset<T, InfrastructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Infrastructure.
     * @param {InfrastructureDeleteArgs} args - Arguments to delete one Infrastructure.
     * @example
     * // Delete one Infrastructure
     * const Infrastructure = await prisma.infrastructure.delete({
     *   where: {
     *     // ... filter to delete one Infrastructure
     *   }
     * })
     * 
     */
    delete<T extends InfrastructureDeleteArgs>(args: SelectSubset<T, InfrastructureDeleteArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Infrastructure.
     * @param {InfrastructureUpdateArgs} args - Arguments to update one Infrastructure.
     * @example
     * // Update one Infrastructure
     * const infrastructure = await prisma.infrastructure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfrastructureUpdateArgs>(args: SelectSubset<T, InfrastructureUpdateArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Infrastructures.
     * @param {InfrastructureDeleteManyArgs} args - Arguments to filter Infrastructures to delete.
     * @example
     * // Delete a few Infrastructures
     * const { count } = await prisma.infrastructure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfrastructureDeleteManyArgs>(args?: SelectSubset<T, InfrastructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Infrastructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Infrastructures
     * const infrastructure = await prisma.infrastructure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfrastructureUpdateManyArgs>(args: SelectSubset<T, InfrastructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Infrastructures and returns the data updated in the database.
     * @param {InfrastructureUpdateManyAndReturnArgs} args - Arguments to update many Infrastructures.
     * @example
     * // Update many Infrastructures
     * const infrastructure = await prisma.infrastructure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Infrastructures and only return the `id`
     * const infrastructureWithIdOnly = await prisma.infrastructure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfrastructureUpdateManyAndReturnArgs>(args: SelectSubset<T, InfrastructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Infrastructure.
     * @param {InfrastructureUpsertArgs} args - Arguments to update or create a Infrastructure.
     * @example
     * // Update or create a Infrastructure
     * const infrastructure = await prisma.infrastructure.upsert({
     *   create: {
     *     // ... data to create a Infrastructure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Infrastructure we want to update
     *   }
     * })
     */
    upsert<T extends InfrastructureUpsertArgs>(args: SelectSubset<T, InfrastructureUpsertArgs<ExtArgs>>): Prisma__InfrastructureClient<$Result.GetResult<Prisma.$InfrastructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Infrastructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureCountArgs} args - Arguments to filter Infrastructures to count.
     * @example
     * // Count the number of Infrastructures
     * const count = await prisma.infrastructure.count({
     *   where: {
     *     // ... the filter for the Infrastructures we want to count
     *   }
     * })
    **/
    count<T extends InfrastructureCountArgs>(
      args?: Subset<T, InfrastructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfrastructureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Infrastructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfrastructureAggregateArgs>(args: Subset<T, InfrastructureAggregateArgs>): Prisma.PrismaPromise<GetInfrastructureAggregateType<T>>

    /**
     * Group by Infrastructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfrastructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfrastructureGroupByArgs['orderBy'] }
        : { orderBy?: InfrastructureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfrastructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfrastructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Infrastructure model
   */
  readonly fields: InfrastructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Infrastructure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfrastructureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Infrastructure model
   */
  interface InfrastructureFieldRefs {
    readonly id: FieldRef<"Infrastructure", 'Int'>
    readonly schoolId: FieldRef<"Infrastructure", 'Int'>
    readonly facility: FieldRef<"Infrastructure", 'String'>
    readonly quantity: FieldRef<"Infrastructure", 'Int'>
    readonly status: FieldRef<"Infrastructure", 'String'>
    readonly remarks: FieldRef<"Infrastructure", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Infrastructure findUnique
   */
  export type InfrastructureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which Infrastructure to fetch.
     */
    where: InfrastructureWhereUniqueInput
  }

  /**
   * Infrastructure findUniqueOrThrow
   */
  export type InfrastructureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which Infrastructure to fetch.
     */
    where: InfrastructureWhereUniqueInput
  }

  /**
   * Infrastructure findFirst
   */
  export type InfrastructureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which Infrastructure to fetch.
     */
    where?: InfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Infrastructures to fetch.
     */
    orderBy?: InfrastructureOrderByWithRelationInput | InfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Infrastructures.
     */
    cursor?: InfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Infrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Infrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Infrastructures.
     */
    distinct?: InfrastructureScalarFieldEnum | InfrastructureScalarFieldEnum[]
  }

  /**
   * Infrastructure findFirstOrThrow
   */
  export type InfrastructureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which Infrastructure to fetch.
     */
    where?: InfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Infrastructures to fetch.
     */
    orderBy?: InfrastructureOrderByWithRelationInput | InfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Infrastructures.
     */
    cursor?: InfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Infrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Infrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Infrastructures.
     */
    distinct?: InfrastructureScalarFieldEnum | InfrastructureScalarFieldEnum[]
  }

  /**
   * Infrastructure findMany
   */
  export type InfrastructureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which Infrastructures to fetch.
     */
    where?: InfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Infrastructures to fetch.
     */
    orderBy?: InfrastructureOrderByWithRelationInput | InfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Infrastructures.
     */
    cursor?: InfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Infrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Infrastructures.
     */
    skip?: number
    distinct?: InfrastructureScalarFieldEnum | InfrastructureScalarFieldEnum[]
  }

  /**
   * Infrastructure create
   */
  export type InfrastructureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * The data needed to create a Infrastructure.
     */
    data: XOR<InfrastructureCreateInput, InfrastructureUncheckedCreateInput>
  }

  /**
   * Infrastructure createMany
   */
  export type InfrastructureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Infrastructures.
     */
    data: InfrastructureCreateManyInput | InfrastructureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Infrastructure createManyAndReturn
   */
  export type InfrastructureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * The data used to create many Infrastructures.
     */
    data: InfrastructureCreateManyInput | InfrastructureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Infrastructure update
   */
  export type InfrastructureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * The data needed to update a Infrastructure.
     */
    data: XOR<InfrastructureUpdateInput, InfrastructureUncheckedUpdateInput>
    /**
     * Choose, which Infrastructure to update.
     */
    where: InfrastructureWhereUniqueInput
  }

  /**
   * Infrastructure updateMany
   */
  export type InfrastructureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Infrastructures.
     */
    data: XOR<InfrastructureUpdateManyMutationInput, InfrastructureUncheckedUpdateManyInput>
    /**
     * Filter which Infrastructures to update
     */
    where?: InfrastructureWhereInput
    /**
     * Limit how many Infrastructures to update.
     */
    limit?: number
  }

  /**
   * Infrastructure updateManyAndReturn
   */
  export type InfrastructureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * The data used to update Infrastructures.
     */
    data: XOR<InfrastructureUpdateManyMutationInput, InfrastructureUncheckedUpdateManyInput>
    /**
     * Filter which Infrastructures to update
     */
    where?: InfrastructureWhereInput
    /**
     * Limit how many Infrastructures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Infrastructure upsert
   */
  export type InfrastructureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * The filter to search for the Infrastructure to update in case it exists.
     */
    where: InfrastructureWhereUniqueInput
    /**
     * In case the Infrastructure found by the `where` argument doesn't exist, create a new Infrastructure with this data.
     */
    create: XOR<InfrastructureCreateInput, InfrastructureUncheckedCreateInput>
    /**
     * In case the Infrastructure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfrastructureUpdateInput, InfrastructureUncheckedUpdateInput>
  }

  /**
   * Infrastructure delete
   */
  export type InfrastructureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
    /**
     * Filter which Infrastructure to delete.
     */
    where: InfrastructureWhereUniqueInput
  }

  /**
   * Infrastructure deleteMany
   */
  export type InfrastructureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Infrastructures to delete
     */
    where?: InfrastructureWhereInput
    /**
     * Limit how many Infrastructures to delete.
     */
    limit?: number
  }

  /**
   * Infrastructure without action
   */
  export type InfrastructureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infrastructure
     */
    select?: InfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Infrastructure
     */
    omit?: InfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureInclude<ExtArgs> | null
  }


  /**
   * Model Lab
   */

  export type AggregateLab = {
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  export type LabAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type LabSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type LabMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    type: string | null
    available: boolean | null
    equipment: string | null
    remarks: string | null
  }

  export type LabMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    type: string | null
    available: boolean | null
    equipment: string | null
    remarks: string | null
  }

  export type LabCountAggregateOutputType = {
    id: number
    schoolId: number
    type: number
    available: number
    equipment: number
    remarks: number
    _all: number
  }


  export type LabAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type LabSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type LabMinAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    available?: true
    equipment?: true
    remarks?: true
  }

  export type LabMaxAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    available?: true
    equipment?: true
    remarks?: true
  }

  export type LabCountAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    available?: true
    equipment?: true
    remarks?: true
    _all?: true
  }

  export type LabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lab to aggregate.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labs
    **/
    _count?: true | LabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabMaxAggregateInputType
  }

  export type GetLabAggregateType<T extends LabAggregateArgs> = {
        [P in keyof T & keyof AggregateLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab[P]>
      : GetScalarType<T[P], AggregateLab[P]>
  }




  export type LabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
    orderBy?: LabOrderByWithAggregationInput | LabOrderByWithAggregationInput[]
    by: LabScalarFieldEnum[] | LabScalarFieldEnum
    having?: LabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabCountAggregateInputType | true
    _avg?: LabAvgAggregateInputType
    _sum?: LabSumAggregateInputType
    _min?: LabMinAggregateInputType
    _max?: LabMaxAggregateInputType
  }

  export type LabGroupByOutputType = {
    id: number
    schoolId: number
    type: string
    available: boolean
    equipment: string | null
    remarks: string | null
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  type GetLabGroupByPayload<T extends LabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabGroupByOutputType[P]>
            : GetScalarType<T[P], LabGroupByOutputType[P]>
        }
      >
    >


  export type LabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    available?: boolean
    equipment?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    available?: boolean
    equipment?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    available?: boolean
    equipment?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectScalar = {
    id?: boolean
    schoolId?: boolean
    type?: boolean
    available?: boolean
    equipment?: boolean
    remarks?: boolean
  }

  export type LabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "type" | "available" | "equipment" | "remarks", ExtArgs["result"]["lab"]>
  export type LabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type LabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type LabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $LabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lab"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      type: string
      available: boolean
      equipment: string | null
      remarks: string | null
    }, ExtArgs["result"]["lab"]>
    composites: {}
  }

  type LabGetPayload<S extends boolean | null | undefined | LabDefaultArgs> = $Result.GetResult<Prisma.$LabPayload, S>

  type LabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabCountAggregateInputType | true
    }

  export interface LabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lab'], meta: { name: 'Lab' } }
    /**
     * Find zero or one Lab that matches the filter.
     * @param {LabFindUniqueArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabFindUniqueArgs>(args: SelectSubset<T, LabFindUniqueArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabFindUniqueOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabFindUniqueOrThrowArgs>(args: SelectSubset<T, LabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabFindFirstArgs>(args?: SelectSubset<T, LabFindFirstArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabFindFirstOrThrowArgs>(args?: SelectSubset<T, LabFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.lab.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.lab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labWithIdOnly = await prisma.lab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabFindManyArgs>(args?: SelectSubset<T, LabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lab.
     * @param {LabCreateArgs} args - Arguments to create a Lab.
     * @example
     * // Create one Lab
     * const Lab = await prisma.lab.create({
     *   data: {
     *     // ... data to create a Lab
     *   }
     * })
     * 
     */
    create<T extends LabCreateArgs>(args: SelectSubset<T, LabCreateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labs.
     * @param {LabCreateManyArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabCreateManyArgs>(args?: SelectSubset<T, LabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labs and returns the data saved in the database.
     * @param {LabCreateManyAndReturnArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabCreateManyAndReturnArgs>(args?: SelectSubset<T, LabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lab.
     * @param {LabDeleteArgs} args - Arguments to delete one Lab.
     * @example
     * // Delete one Lab
     * const Lab = await prisma.lab.delete({
     *   where: {
     *     // ... filter to delete one Lab
     *   }
     * })
     * 
     */
    delete<T extends LabDeleteArgs>(args: SelectSubset<T, LabDeleteArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lab.
     * @param {LabUpdateArgs} args - Arguments to update one Lab.
     * @example
     * // Update one Lab
     * const lab = await prisma.lab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabUpdateArgs>(args: SelectSubset<T, LabUpdateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labs.
     * @param {LabDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.lab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabDeleteManyArgs>(args?: SelectSubset<T, LabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabUpdateManyArgs>(args: SelectSubset<T, LabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs and returns the data updated in the database.
     * @param {LabUpdateManyAndReturnArgs} args - Arguments to update many Labs.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabUpdateManyAndReturnArgs>(args: SelectSubset<T, LabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lab.
     * @param {LabUpsertArgs} args - Arguments to update or create a Lab.
     * @example
     * // Update or create a Lab
     * const lab = await prisma.lab.upsert({
     *   create: {
     *     // ... data to create a Lab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab we want to update
     *   }
     * })
     */
    upsert<T extends LabUpsertArgs>(args: SelectSubset<T, LabUpsertArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.lab.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends LabCountArgs>(
      args?: Subset<T, LabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabAggregateArgs>(args: Subset<T, LabAggregateArgs>): Prisma.PrismaPromise<GetLabAggregateType<T>>

    /**
     * Group by Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabGroupByArgs['orderBy'] }
        : { orderBy?: LabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lab model
   */
  readonly fields: LabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lab model
   */
  interface LabFieldRefs {
    readonly id: FieldRef<"Lab", 'Int'>
    readonly schoolId: FieldRef<"Lab", 'Int'>
    readonly type: FieldRef<"Lab", 'String'>
    readonly available: FieldRef<"Lab", 'Boolean'>
    readonly equipment: FieldRef<"Lab", 'String'>
    readonly remarks: FieldRef<"Lab", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lab findUnique
   */
  export type LabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findUniqueOrThrow
   */
  export type LabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findFirst
   */
  export type LabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findFirstOrThrow
   */
  export type LabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findMany
   */
  export type LabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Labs to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab create
   */
  export type LabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to create a Lab.
     */
    data: XOR<LabCreateInput, LabUncheckedCreateInput>
  }

  /**
   * Lab createMany
   */
  export type LabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lab createManyAndReturn
   */
  export type LabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lab update
   */
  export type LabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to update a Lab.
     */
    data: XOR<LabUpdateInput, LabUncheckedUpdateInput>
    /**
     * Choose, which Lab to update.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab updateMany
   */
  export type LabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
  }

  /**
   * Lab updateManyAndReturn
   */
  export type LabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lab upsert
   */
  export type LabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The filter to search for the Lab to update in case it exists.
     */
    where: LabWhereUniqueInput
    /**
     * In case the Lab found by the `where` argument doesn't exist, create a new Lab with this data.
     */
    create: XOR<LabCreateInput, LabUncheckedCreateInput>
    /**
     * In case the Lab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabUpdateInput, LabUncheckedUpdateInput>
  }

  /**
   * Lab delete
   */
  export type LabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter which Lab to delete.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab deleteMany
   */
  export type LabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labs to delete
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to delete.
     */
    limit?: number
  }

  /**
   * Lab without action
   */
  export type LabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
  }


  /**
   * Model Pillar
   */

  export type AggregatePillar = {
    _count: PillarCountAggregateOutputType | null
    _avg: PillarAvgAggregateOutputType | null
    _sum: PillarSumAggregateOutputType | null
    _min: PillarMinAggregateOutputType | null
    _max: PillarMaxAggregateOutputType | null
  }

  export type PillarAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    number: number | null
  }

  export type PillarSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    number: number | null
  }

  export type PillarMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    number: number | null
    title: string | null
    subAspect: string | null
    observations: string | null
    remarks: string | null
  }

  export type PillarMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    number: number | null
    title: string | null
    subAspect: string | null
    observations: string | null
    remarks: string | null
  }

  export type PillarCountAggregateOutputType = {
    id: number
    schoolId: number
    number: number
    title: number
    subAspect: number
    observations: number
    remarks: number
    _all: number
  }


  export type PillarAvgAggregateInputType = {
    id?: true
    schoolId?: true
    number?: true
  }

  export type PillarSumAggregateInputType = {
    id?: true
    schoolId?: true
    number?: true
  }

  export type PillarMinAggregateInputType = {
    id?: true
    schoolId?: true
    number?: true
    title?: true
    subAspect?: true
    observations?: true
    remarks?: true
  }

  export type PillarMaxAggregateInputType = {
    id?: true
    schoolId?: true
    number?: true
    title?: true
    subAspect?: true
    observations?: true
    remarks?: true
  }

  export type PillarCountAggregateInputType = {
    id?: true
    schoolId?: true
    number?: true
    title?: true
    subAspect?: true
    observations?: true
    remarks?: true
    _all?: true
  }

  export type PillarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pillar to aggregate.
     */
    where?: PillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pillars to fetch.
     */
    orderBy?: PillarOrderByWithRelationInput | PillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pillars
    **/
    _count?: true | PillarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PillarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PillarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PillarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PillarMaxAggregateInputType
  }

  export type GetPillarAggregateType<T extends PillarAggregateArgs> = {
        [P in keyof T & keyof AggregatePillar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePillar[P]>
      : GetScalarType<T[P], AggregatePillar[P]>
  }




  export type PillarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PillarWhereInput
    orderBy?: PillarOrderByWithAggregationInput | PillarOrderByWithAggregationInput[]
    by: PillarScalarFieldEnum[] | PillarScalarFieldEnum
    having?: PillarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PillarCountAggregateInputType | true
    _avg?: PillarAvgAggregateInputType
    _sum?: PillarSumAggregateInputType
    _min?: PillarMinAggregateInputType
    _max?: PillarMaxAggregateInputType
  }

  export type PillarGroupByOutputType = {
    id: number
    schoolId: number
    number: number
    title: string
    subAspect: string
    observations: string | null
    remarks: string | null
    _count: PillarCountAggregateOutputType | null
    _avg: PillarAvgAggregateOutputType | null
    _sum: PillarSumAggregateOutputType | null
    _min: PillarMinAggregateOutputType | null
    _max: PillarMaxAggregateOutputType | null
  }

  type GetPillarGroupByPayload<T extends PillarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PillarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PillarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PillarGroupByOutputType[P]>
            : GetScalarType<T[P], PillarGroupByOutputType[P]>
        }
      >
    >


  export type PillarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    number?: boolean
    title?: boolean
    subAspect?: boolean
    observations?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillar"]>

  export type PillarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    number?: boolean
    title?: boolean
    subAspect?: boolean
    observations?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillar"]>

  export type PillarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    number?: boolean
    title?: boolean
    subAspect?: boolean
    observations?: boolean
    remarks?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillar"]>

  export type PillarSelectScalar = {
    id?: boolean
    schoolId?: boolean
    number?: boolean
    title?: boolean
    subAspect?: boolean
    observations?: boolean
    remarks?: boolean
  }

  export type PillarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "number" | "title" | "subAspect" | "observations" | "remarks", ExtArgs["result"]["pillar"]>
  export type PillarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type PillarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type PillarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $PillarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pillar"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      number: number
      title: string
      subAspect: string
      observations: string | null
      remarks: string | null
    }, ExtArgs["result"]["pillar"]>
    composites: {}
  }

  type PillarGetPayload<S extends boolean | null | undefined | PillarDefaultArgs> = $Result.GetResult<Prisma.$PillarPayload, S>

  type PillarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PillarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PillarCountAggregateInputType | true
    }

  export interface PillarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pillar'], meta: { name: 'Pillar' } }
    /**
     * Find zero or one Pillar that matches the filter.
     * @param {PillarFindUniqueArgs} args - Arguments to find a Pillar
     * @example
     * // Get one Pillar
     * const pillar = await prisma.pillar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PillarFindUniqueArgs>(args: SelectSubset<T, PillarFindUniqueArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pillar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PillarFindUniqueOrThrowArgs} args - Arguments to find a Pillar
     * @example
     * // Get one Pillar
     * const pillar = await prisma.pillar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PillarFindUniqueOrThrowArgs>(args: SelectSubset<T, PillarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pillar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarFindFirstArgs} args - Arguments to find a Pillar
     * @example
     * // Get one Pillar
     * const pillar = await prisma.pillar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PillarFindFirstArgs>(args?: SelectSubset<T, PillarFindFirstArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pillar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarFindFirstOrThrowArgs} args - Arguments to find a Pillar
     * @example
     * // Get one Pillar
     * const pillar = await prisma.pillar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PillarFindFirstOrThrowArgs>(args?: SelectSubset<T, PillarFindFirstOrThrowArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pillars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pillars
     * const pillars = await prisma.pillar.findMany()
     * 
     * // Get first 10 Pillars
     * const pillars = await prisma.pillar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pillarWithIdOnly = await prisma.pillar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PillarFindManyArgs>(args?: SelectSubset<T, PillarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pillar.
     * @param {PillarCreateArgs} args - Arguments to create a Pillar.
     * @example
     * // Create one Pillar
     * const Pillar = await prisma.pillar.create({
     *   data: {
     *     // ... data to create a Pillar
     *   }
     * })
     * 
     */
    create<T extends PillarCreateArgs>(args: SelectSubset<T, PillarCreateArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pillars.
     * @param {PillarCreateManyArgs} args - Arguments to create many Pillars.
     * @example
     * // Create many Pillars
     * const pillar = await prisma.pillar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PillarCreateManyArgs>(args?: SelectSubset<T, PillarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pillars and returns the data saved in the database.
     * @param {PillarCreateManyAndReturnArgs} args - Arguments to create many Pillars.
     * @example
     * // Create many Pillars
     * const pillar = await prisma.pillar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pillars and only return the `id`
     * const pillarWithIdOnly = await prisma.pillar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PillarCreateManyAndReturnArgs>(args?: SelectSubset<T, PillarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pillar.
     * @param {PillarDeleteArgs} args - Arguments to delete one Pillar.
     * @example
     * // Delete one Pillar
     * const Pillar = await prisma.pillar.delete({
     *   where: {
     *     // ... filter to delete one Pillar
     *   }
     * })
     * 
     */
    delete<T extends PillarDeleteArgs>(args: SelectSubset<T, PillarDeleteArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pillar.
     * @param {PillarUpdateArgs} args - Arguments to update one Pillar.
     * @example
     * // Update one Pillar
     * const pillar = await prisma.pillar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PillarUpdateArgs>(args: SelectSubset<T, PillarUpdateArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pillars.
     * @param {PillarDeleteManyArgs} args - Arguments to filter Pillars to delete.
     * @example
     * // Delete a few Pillars
     * const { count } = await prisma.pillar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PillarDeleteManyArgs>(args?: SelectSubset<T, PillarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pillars
     * const pillar = await prisma.pillar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PillarUpdateManyArgs>(args: SelectSubset<T, PillarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pillars and returns the data updated in the database.
     * @param {PillarUpdateManyAndReturnArgs} args - Arguments to update many Pillars.
     * @example
     * // Update many Pillars
     * const pillar = await prisma.pillar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pillars and only return the `id`
     * const pillarWithIdOnly = await prisma.pillar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PillarUpdateManyAndReturnArgs>(args: SelectSubset<T, PillarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pillar.
     * @param {PillarUpsertArgs} args - Arguments to update or create a Pillar.
     * @example
     * // Update or create a Pillar
     * const pillar = await prisma.pillar.upsert({
     *   create: {
     *     // ... data to create a Pillar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pillar we want to update
     *   }
     * })
     */
    upsert<T extends PillarUpsertArgs>(args: SelectSubset<T, PillarUpsertArgs<ExtArgs>>): Prisma__PillarClient<$Result.GetResult<Prisma.$PillarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarCountArgs} args - Arguments to filter Pillars to count.
     * @example
     * // Count the number of Pillars
     * const count = await prisma.pillar.count({
     *   where: {
     *     // ... the filter for the Pillars we want to count
     *   }
     * })
    **/
    count<T extends PillarCountArgs>(
      args?: Subset<T, PillarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PillarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pillar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PillarAggregateArgs>(args: Subset<T, PillarAggregateArgs>): Prisma.PrismaPromise<GetPillarAggregateType<T>>

    /**
     * Group by Pillar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PillarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PillarGroupByArgs['orderBy'] }
        : { orderBy?: PillarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PillarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPillarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pillar model
   */
  readonly fields: PillarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pillar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PillarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pillar model
   */
  interface PillarFieldRefs {
    readonly id: FieldRef<"Pillar", 'Int'>
    readonly schoolId: FieldRef<"Pillar", 'Int'>
    readonly number: FieldRef<"Pillar", 'Int'>
    readonly title: FieldRef<"Pillar", 'String'>
    readonly subAspect: FieldRef<"Pillar", 'String'>
    readonly observations: FieldRef<"Pillar", 'String'>
    readonly remarks: FieldRef<"Pillar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pillar findUnique
   */
  export type PillarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter, which Pillar to fetch.
     */
    where: PillarWhereUniqueInput
  }

  /**
   * Pillar findUniqueOrThrow
   */
  export type PillarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter, which Pillar to fetch.
     */
    where: PillarWhereUniqueInput
  }

  /**
   * Pillar findFirst
   */
  export type PillarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter, which Pillar to fetch.
     */
    where?: PillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pillars to fetch.
     */
    orderBy?: PillarOrderByWithRelationInput | PillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pillars.
     */
    cursor?: PillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pillars.
     */
    distinct?: PillarScalarFieldEnum | PillarScalarFieldEnum[]
  }

  /**
   * Pillar findFirstOrThrow
   */
  export type PillarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter, which Pillar to fetch.
     */
    where?: PillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pillars to fetch.
     */
    orderBy?: PillarOrderByWithRelationInput | PillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pillars.
     */
    cursor?: PillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pillars.
     */
    distinct?: PillarScalarFieldEnum | PillarScalarFieldEnum[]
  }

  /**
   * Pillar findMany
   */
  export type PillarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter, which Pillars to fetch.
     */
    where?: PillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pillars to fetch.
     */
    orderBy?: PillarOrderByWithRelationInput | PillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pillars.
     */
    cursor?: PillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pillars.
     */
    skip?: number
    distinct?: PillarScalarFieldEnum | PillarScalarFieldEnum[]
  }

  /**
   * Pillar create
   */
  export type PillarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * The data needed to create a Pillar.
     */
    data: XOR<PillarCreateInput, PillarUncheckedCreateInput>
  }

  /**
   * Pillar createMany
   */
  export type PillarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pillars.
     */
    data: PillarCreateManyInput | PillarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pillar createManyAndReturn
   */
  export type PillarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * The data used to create many Pillars.
     */
    data: PillarCreateManyInput | PillarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pillar update
   */
  export type PillarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * The data needed to update a Pillar.
     */
    data: XOR<PillarUpdateInput, PillarUncheckedUpdateInput>
    /**
     * Choose, which Pillar to update.
     */
    where: PillarWhereUniqueInput
  }

  /**
   * Pillar updateMany
   */
  export type PillarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pillars.
     */
    data: XOR<PillarUpdateManyMutationInput, PillarUncheckedUpdateManyInput>
    /**
     * Filter which Pillars to update
     */
    where?: PillarWhereInput
    /**
     * Limit how many Pillars to update.
     */
    limit?: number
  }

  /**
   * Pillar updateManyAndReturn
   */
  export type PillarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * The data used to update Pillars.
     */
    data: XOR<PillarUpdateManyMutationInput, PillarUncheckedUpdateManyInput>
    /**
     * Filter which Pillars to update
     */
    where?: PillarWhereInput
    /**
     * Limit how many Pillars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pillar upsert
   */
  export type PillarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * The filter to search for the Pillar to update in case it exists.
     */
    where: PillarWhereUniqueInput
    /**
     * In case the Pillar found by the `where` argument doesn't exist, create a new Pillar with this data.
     */
    create: XOR<PillarCreateInput, PillarUncheckedCreateInput>
    /**
     * In case the Pillar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PillarUpdateInput, PillarUncheckedUpdateInput>
  }

  /**
   * Pillar delete
   */
  export type PillarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
    /**
     * Filter which Pillar to delete.
     */
    where: PillarWhereUniqueInput
  }

  /**
   * Pillar deleteMany
   */
  export type PillarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pillars to delete
     */
    where?: PillarWhereInput
    /**
     * Limit how many Pillars to delete.
     */
    limit?: number
  }

  /**
   * Pillar without action
   */
  export type PillarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pillar
     */
    select?: PillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pillar
     */
    omit?: PillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PillarInclude<ExtArgs> | null
  }


  /**
   * Model Innovation
   */

  export type AggregateInnovation = {
    _count: InnovationCountAggregateOutputType | null
    _avg: InnovationAvgAggregateOutputType | null
    _sum: InnovationSumAggregateOutputType | null
    _min: InnovationMinAggregateOutputType | null
    _max: InnovationMaxAggregateOutputType | null
  }

  export type InnovationAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type InnovationSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type InnovationMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    type: string | null
    description: string | null
    mediaUrl: string | null
  }

  export type InnovationMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    type: string | null
    description: string | null
    mediaUrl: string | null
  }

  export type InnovationCountAggregateOutputType = {
    id: number
    schoolId: number
    type: number
    description: number
    mediaUrl: number
    _all: number
  }


  export type InnovationAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type InnovationSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type InnovationMinAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    description?: true
    mediaUrl?: true
  }

  export type InnovationMaxAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    description?: true
    mediaUrl?: true
  }

  export type InnovationCountAggregateInputType = {
    id?: true
    schoolId?: true
    type?: true
    description?: true
    mediaUrl?: true
    _all?: true
  }

  export type InnovationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Innovation to aggregate.
     */
    where?: InnovationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovations to fetch.
     */
    orderBy?: InnovationOrderByWithRelationInput | InnovationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InnovationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Innovations
    **/
    _count?: true | InnovationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InnovationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InnovationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InnovationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InnovationMaxAggregateInputType
  }

  export type GetInnovationAggregateType<T extends InnovationAggregateArgs> = {
        [P in keyof T & keyof AggregateInnovation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInnovation[P]>
      : GetScalarType<T[P], AggregateInnovation[P]>
  }




  export type InnovationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InnovationWhereInput
    orderBy?: InnovationOrderByWithAggregationInput | InnovationOrderByWithAggregationInput[]
    by: InnovationScalarFieldEnum[] | InnovationScalarFieldEnum
    having?: InnovationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InnovationCountAggregateInputType | true
    _avg?: InnovationAvgAggregateInputType
    _sum?: InnovationSumAggregateInputType
    _min?: InnovationMinAggregateInputType
    _max?: InnovationMaxAggregateInputType
  }

  export type InnovationGroupByOutputType = {
    id: number
    schoolId: number
    type: string
    description: string
    mediaUrl: string | null
    _count: InnovationCountAggregateOutputType | null
    _avg: InnovationAvgAggregateOutputType | null
    _sum: InnovationSumAggregateOutputType | null
    _min: InnovationMinAggregateOutputType | null
    _max: InnovationMaxAggregateOutputType | null
  }

  type GetInnovationGroupByPayload<T extends InnovationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InnovationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InnovationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InnovationGroupByOutputType[P]>
            : GetScalarType<T[P], InnovationGroupByOutputType[P]>
        }
      >
    >


  export type InnovationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    description?: boolean
    mediaUrl?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["innovation"]>

  export type InnovationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    description?: boolean
    mediaUrl?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["innovation"]>

  export type InnovationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    type?: boolean
    description?: boolean
    mediaUrl?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["innovation"]>

  export type InnovationSelectScalar = {
    id?: boolean
    schoolId?: boolean
    type?: boolean
    description?: boolean
    mediaUrl?: boolean
  }

  export type InnovationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "type" | "description" | "mediaUrl", ExtArgs["result"]["innovation"]>
  export type InnovationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type InnovationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type InnovationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $InnovationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Innovation"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      type: string
      description: string
      mediaUrl: string | null
    }, ExtArgs["result"]["innovation"]>
    composites: {}
  }

  type InnovationGetPayload<S extends boolean | null | undefined | InnovationDefaultArgs> = $Result.GetResult<Prisma.$InnovationPayload, S>

  type InnovationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InnovationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InnovationCountAggregateInputType | true
    }

  export interface InnovationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Innovation'], meta: { name: 'Innovation' } }
    /**
     * Find zero or one Innovation that matches the filter.
     * @param {InnovationFindUniqueArgs} args - Arguments to find a Innovation
     * @example
     * // Get one Innovation
     * const innovation = await prisma.innovation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InnovationFindUniqueArgs>(args: SelectSubset<T, InnovationFindUniqueArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Innovation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InnovationFindUniqueOrThrowArgs} args - Arguments to find a Innovation
     * @example
     * // Get one Innovation
     * const innovation = await prisma.innovation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InnovationFindUniqueOrThrowArgs>(args: SelectSubset<T, InnovationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Innovation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationFindFirstArgs} args - Arguments to find a Innovation
     * @example
     * // Get one Innovation
     * const innovation = await prisma.innovation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InnovationFindFirstArgs>(args?: SelectSubset<T, InnovationFindFirstArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Innovation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationFindFirstOrThrowArgs} args - Arguments to find a Innovation
     * @example
     * // Get one Innovation
     * const innovation = await prisma.innovation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InnovationFindFirstOrThrowArgs>(args?: SelectSubset<T, InnovationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Innovations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Innovations
     * const innovations = await prisma.innovation.findMany()
     * 
     * // Get first 10 Innovations
     * const innovations = await prisma.innovation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const innovationWithIdOnly = await prisma.innovation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InnovationFindManyArgs>(args?: SelectSubset<T, InnovationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Innovation.
     * @param {InnovationCreateArgs} args - Arguments to create a Innovation.
     * @example
     * // Create one Innovation
     * const Innovation = await prisma.innovation.create({
     *   data: {
     *     // ... data to create a Innovation
     *   }
     * })
     * 
     */
    create<T extends InnovationCreateArgs>(args: SelectSubset<T, InnovationCreateArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Innovations.
     * @param {InnovationCreateManyArgs} args - Arguments to create many Innovations.
     * @example
     * // Create many Innovations
     * const innovation = await prisma.innovation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InnovationCreateManyArgs>(args?: SelectSubset<T, InnovationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Innovations and returns the data saved in the database.
     * @param {InnovationCreateManyAndReturnArgs} args - Arguments to create many Innovations.
     * @example
     * // Create many Innovations
     * const innovation = await prisma.innovation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Innovations and only return the `id`
     * const innovationWithIdOnly = await prisma.innovation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InnovationCreateManyAndReturnArgs>(args?: SelectSubset<T, InnovationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Innovation.
     * @param {InnovationDeleteArgs} args - Arguments to delete one Innovation.
     * @example
     * // Delete one Innovation
     * const Innovation = await prisma.innovation.delete({
     *   where: {
     *     // ... filter to delete one Innovation
     *   }
     * })
     * 
     */
    delete<T extends InnovationDeleteArgs>(args: SelectSubset<T, InnovationDeleteArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Innovation.
     * @param {InnovationUpdateArgs} args - Arguments to update one Innovation.
     * @example
     * // Update one Innovation
     * const innovation = await prisma.innovation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InnovationUpdateArgs>(args: SelectSubset<T, InnovationUpdateArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Innovations.
     * @param {InnovationDeleteManyArgs} args - Arguments to filter Innovations to delete.
     * @example
     * // Delete a few Innovations
     * const { count } = await prisma.innovation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InnovationDeleteManyArgs>(args?: SelectSubset<T, InnovationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Innovations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Innovations
     * const innovation = await prisma.innovation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InnovationUpdateManyArgs>(args: SelectSubset<T, InnovationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Innovations and returns the data updated in the database.
     * @param {InnovationUpdateManyAndReturnArgs} args - Arguments to update many Innovations.
     * @example
     * // Update many Innovations
     * const innovation = await prisma.innovation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Innovations and only return the `id`
     * const innovationWithIdOnly = await prisma.innovation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InnovationUpdateManyAndReturnArgs>(args: SelectSubset<T, InnovationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Innovation.
     * @param {InnovationUpsertArgs} args - Arguments to update or create a Innovation.
     * @example
     * // Update or create a Innovation
     * const innovation = await prisma.innovation.upsert({
     *   create: {
     *     // ... data to create a Innovation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Innovation we want to update
     *   }
     * })
     */
    upsert<T extends InnovationUpsertArgs>(args: SelectSubset<T, InnovationUpsertArgs<ExtArgs>>): Prisma__InnovationClient<$Result.GetResult<Prisma.$InnovationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Innovations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationCountArgs} args - Arguments to filter Innovations to count.
     * @example
     * // Count the number of Innovations
     * const count = await prisma.innovation.count({
     *   where: {
     *     // ... the filter for the Innovations we want to count
     *   }
     * })
    **/
    count<T extends InnovationCountArgs>(
      args?: Subset<T, InnovationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InnovationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Innovation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InnovationAggregateArgs>(args: Subset<T, InnovationAggregateArgs>): Prisma.PrismaPromise<GetInnovationAggregateType<T>>

    /**
     * Group by Innovation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InnovationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InnovationGroupByArgs['orderBy'] }
        : { orderBy?: InnovationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InnovationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInnovationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Innovation model
   */
  readonly fields: InnovationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Innovation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InnovationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Innovation model
   */
  interface InnovationFieldRefs {
    readonly id: FieldRef<"Innovation", 'Int'>
    readonly schoolId: FieldRef<"Innovation", 'Int'>
    readonly type: FieldRef<"Innovation", 'String'>
    readonly description: FieldRef<"Innovation", 'String'>
    readonly mediaUrl: FieldRef<"Innovation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Innovation findUnique
   */
  export type InnovationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter, which Innovation to fetch.
     */
    where: InnovationWhereUniqueInput
  }

  /**
   * Innovation findUniqueOrThrow
   */
  export type InnovationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter, which Innovation to fetch.
     */
    where: InnovationWhereUniqueInput
  }

  /**
   * Innovation findFirst
   */
  export type InnovationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter, which Innovation to fetch.
     */
    where?: InnovationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovations to fetch.
     */
    orderBy?: InnovationOrderByWithRelationInput | InnovationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innovations.
     */
    cursor?: InnovationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innovations.
     */
    distinct?: InnovationScalarFieldEnum | InnovationScalarFieldEnum[]
  }

  /**
   * Innovation findFirstOrThrow
   */
  export type InnovationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter, which Innovation to fetch.
     */
    where?: InnovationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovations to fetch.
     */
    orderBy?: InnovationOrderByWithRelationInput | InnovationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innovations.
     */
    cursor?: InnovationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innovations.
     */
    distinct?: InnovationScalarFieldEnum | InnovationScalarFieldEnum[]
  }

  /**
   * Innovation findMany
   */
  export type InnovationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter, which Innovations to fetch.
     */
    where?: InnovationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovations to fetch.
     */
    orderBy?: InnovationOrderByWithRelationInput | InnovationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Innovations.
     */
    cursor?: InnovationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovations.
     */
    skip?: number
    distinct?: InnovationScalarFieldEnum | InnovationScalarFieldEnum[]
  }

  /**
   * Innovation create
   */
  export type InnovationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * The data needed to create a Innovation.
     */
    data: XOR<InnovationCreateInput, InnovationUncheckedCreateInput>
  }

  /**
   * Innovation createMany
   */
  export type InnovationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Innovations.
     */
    data: InnovationCreateManyInput | InnovationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Innovation createManyAndReturn
   */
  export type InnovationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * The data used to create many Innovations.
     */
    data: InnovationCreateManyInput | InnovationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Innovation update
   */
  export type InnovationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * The data needed to update a Innovation.
     */
    data: XOR<InnovationUpdateInput, InnovationUncheckedUpdateInput>
    /**
     * Choose, which Innovation to update.
     */
    where: InnovationWhereUniqueInput
  }

  /**
   * Innovation updateMany
   */
  export type InnovationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Innovations.
     */
    data: XOR<InnovationUpdateManyMutationInput, InnovationUncheckedUpdateManyInput>
    /**
     * Filter which Innovations to update
     */
    where?: InnovationWhereInput
    /**
     * Limit how many Innovations to update.
     */
    limit?: number
  }

  /**
   * Innovation updateManyAndReturn
   */
  export type InnovationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * The data used to update Innovations.
     */
    data: XOR<InnovationUpdateManyMutationInput, InnovationUncheckedUpdateManyInput>
    /**
     * Filter which Innovations to update
     */
    where?: InnovationWhereInput
    /**
     * Limit how many Innovations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Innovation upsert
   */
  export type InnovationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * The filter to search for the Innovation to update in case it exists.
     */
    where: InnovationWhereUniqueInput
    /**
     * In case the Innovation found by the `where` argument doesn't exist, create a new Innovation with this data.
     */
    create: XOR<InnovationCreateInput, InnovationUncheckedCreateInput>
    /**
     * In case the Innovation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InnovationUpdateInput, InnovationUncheckedUpdateInput>
  }

  /**
   * Innovation delete
   */
  export type InnovationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
    /**
     * Filter which Innovation to delete.
     */
    where: InnovationWhereUniqueInput
  }

  /**
   * Innovation deleteMany
   */
  export type InnovationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Innovations to delete
     */
    where?: InnovationWhereInput
    /**
     * Limit how many Innovations to delete.
     */
    limit?: number
  }

  /**
   * Innovation without action
   */
  export type InnovationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovation
     */
    select?: InnovationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Innovation
     */
    omit?: InnovationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InnovationInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    area: string | null
    challenge: string | null
    supportNeeded: string | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    area: string | null
    challenge: string | null
    supportNeeded: string | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    schoolId: number
    area: number
    challenge: number
    supportNeeded: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    schoolId?: true
    area?: true
    challenge?: true
    supportNeeded?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    schoolId?: true
    area?: true
    challenge?: true
    supportNeeded?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    schoolId?: true
    area?: true
    challenge?: true
    supportNeeded?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: number
    schoolId: number
    area: string
    challenge: string
    supportNeeded: string | null
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    area?: boolean
    challenge?: boolean
    supportNeeded?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    area?: boolean
    challenge?: boolean
    supportNeeded?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    area?: boolean
    challenge?: boolean
    supportNeeded?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    schoolId?: boolean
    area?: boolean
    challenge?: boolean
    supportNeeded?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "area" | "challenge" | "supportNeeded", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      area: string
      challenge: string
      supportNeeded: string | null
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'Int'>
    readonly schoolId: FieldRef<"Challenge", 'Int'>
    readonly area: FieldRef<"Challenge", 'String'>
    readonly challenge: FieldRef<"Challenge", 'String'>
    readonly supportNeeded: FieldRef<"Challenge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    email: string
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    roleId: 'roleId',
    joinDate: 'joinDate',
    lastActive: 'lastActive',
    isDisabled: 'isDisabled',
    isVerified: 'isVerified',
    address: 'address',
    bio: 'bio',
    district: 'district'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revoked: 'revoked',
    replacedByToken: 'replacedByToken'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserSchoolScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId'
  };

  export type UserSchoolScalarFieldEnum = (typeof UserSchoolScalarFieldEnum)[keyof typeof UserSchoolScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    established: 'established',
    upgradedYear: 'upgradedYear',
    udiseCode: 'udiseCode',
    district: 'district',
    block: 'block',
    cluster: 'cluster',
    village: 'village',
    management: 'management',
    type: 'type',
    medium: 'medium',
    inclusive: 'inclusive',
    vocationalTrades: 'vocationalTrades',
    coed: 'coed',
    totalArea: 'totalArea',
    principal: 'principal',
    principalSince: 'principalSince',
    principalQualification: 'principalQualification',
    principalProfessionalQualification: 'principalProfessionalQualification',
    principalJoiningDate: 'principalJoiningDate',
    principalExperience: 'principalExperience',
    principalContact: 'principalContact',
    principalEmail: 'principalEmail',
    midDayMeal: 'midDayMeal',
    drinkingWater: 'drinkingWater',
    electricity: 'electricity',
    internet: 'internet',
    fireSafety: 'fireSafety',
    teacherPhotosDisplayed: 'teacherPhotosDisplayed'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    class: 'class',
    boys: 'boys',
    girls: 'girls',
    total: 'total',
    cwsn: 'cwsn',
    remarks: 'remarks'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    gender: 'gender',
    mobile: 'mobile',
    qualification: 'qualification',
    section: 'section',
    classes: 'classes',
    subjects: 'subjects',
    iecTraining: 'iecTraining',
    experience: 'experience'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const InfrastructureScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    facility: 'facility',
    quantity: 'quantity',
    status: 'status',
    remarks: 'remarks'
  };

  export type InfrastructureScalarFieldEnum = (typeof InfrastructureScalarFieldEnum)[keyof typeof InfrastructureScalarFieldEnum]


  export const LabScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    type: 'type',
    available: 'available',
    equipment: 'equipment',
    remarks: 'remarks'
  };

  export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum]


  export const PillarScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    number: 'number',
    title: 'title',
    subAspect: 'subAspect',
    observations: 'observations',
    remarks: 'remarks'
  };

  export type PillarScalarFieldEnum = (typeof PillarScalarFieldEnum)[keyof typeof PillarScalarFieldEnum]


  export const InnovationScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    type: 'type',
    description: 'description',
    mediaUrl: 'mediaUrl'
  };

  export type InnovationScalarFieldEnum = (typeof InnovationScalarFieldEnum)[keyof typeof InnovationScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    area: 'area',
    challenge: 'challenge',
    supportNeeded: 'supportNeeded'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    users?: UserListRelationFilter
    roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    description?: StringNullableFilter<"Permission"> | string | null
    users?: UserListRelationFilter
    roles?: RoleListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    isDisabled?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    district?: StringNullableFilter<"User"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permissions?: PermissionListRelationFilter
    assignedSchools?: UserSchoolListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    isDisabled?: SortOrder
    isVerified?: SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    permissions?: PermissionOrderByRelationAggregateInput
    assignedSchools?: UserSchoolOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    isDisabled?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    district?: StringNullableFilter<"User"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permissions?: PermissionListRelationFilter
    assignedSchools?: UserSchoolListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    isDisabled?: SortOrder
    isVerified?: SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    joinDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActive?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isDisabled?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    district?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    replacedByToken?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    replacedByToken?: SortOrderInput | SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    replacedByToken?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
  }

  export type UserSchoolWhereInput = {
    AND?: UserSchoolWhereInput | UserSchoolWhereInput[]
    OR?: UserSchoolWhereInput[]
    NOT?: UserSchoolWhereInput | UserSchoolWhereInput[]
    id?: IntFilter<"UserSchool"> | number
    userId?: IntFilter<"UserSchool"> | number
    schoolId?: IntFilter<"UserSchool"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type UserSchoolOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    user?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type UserSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_schoolId?: UserSchoolUserId_schoolIdCompoundUniqueInput
    AND?: UserSchoolWhereInput | UserSchoolWhereInput[]
    OR?: UserSchoolWhereInput[]
    NOT?: UserSchoolWhereInput | UserSchoolWhereInput[]
    userId?: IntFilter<"UserSchool"> | number
    schoolId?: IntFilter<"UserSchool"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "userId_schoolId">

  export type UserSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    _count?: UserSchoolCountOrderByAggregateInput
    _avg?: UserSchoolAvgOrderByAggregateInput
    _max?: UserSchoolMaxOrderByAggregateInput
    _min?: UserSchoolMinOrderByAggregateInput
    _sum?: UserSchoolSumOrderByAggregateInput
  }

  export type UserSchoolScalarWhereWithAggregatesInput = {
    AND?: UserSchoolScalarWhereWithAggregatesInput | UserSchoolScalarWhereWithAggregatesInput[]
    OR?: UserSchoolScalarWhereWithAggregatesInput[]
    NOT?: UserSchoolScalarWhereWithAggregatesInput | UserSchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSchool"> | number
    userId?: IntWithAggregatesFilter<"UserSchool"> | number
    schoolId?: IntWithAggregatesFilter<"UserSchool"> | number
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    status?: StringFilter<"School"> | string
    established?: IntNullableFilter<"School"> | number | null
    upgradedYear?: StringNullableFilter<"School"> | string | null
    udiseCode?: StringNullableFilter<"School"> | string | null
    district?: StringNullableFilter<"School"> | string | null
    block?: StringNullableFilter<"School"> | string | null
    cluster?: StringNullableFilter<"School"> | string | null
    village?: StringNullableFilter<"School"> | string | null
    management?: StringNullableFilter<"School"> | string | null
    type?: StringNullableFilter<"School"> | string | null
    medium?: StringNullableFilter<"School"> | string | null
    inclusive?: BoolNullableFilter<"School"> | boolean | null
    vocationalTrades?: StringNullableListFilter<"School">
    coed?: BoolNullableFilter<"School"> | boolean | null
    totalArea?: StringNullableFilter<"School"> | string | null
    principal?: StringNullableFilter<"School"> | string | null
    principalSince?: StringNullableFilter<"School"> | string | null
    principalQualification?: StringNullableFilter<"School"> | string | null
    principalProfessionalQualification?: StringNullableFilter<"School"> | string | null
    principalJoiningDate?: StringNullableFilter<"School"> | string | null
    principalExperience?: StringNullableFilter<"School"> | string | null
    principalContact?: StringNullableFilter<"School"> | string | null
    principalEmail?: StringNullableFilter<"School"> | string | null
    midDayMeal?: StringNullableFilter<"School"> | string | null
    drinkingWater?: StringNullableFilter<"School"> | string | null
    electricity?: StringNullableFilter<"School"> | string | null
    internet?: StringNullableFilter<"School"> | string | null
    fireSafety?: StringNullableFilter<"School"> | string | null
    teacherPhotosDisplayed?: BoolNullableFilter<"School"> | boolean | null
    enrollments?: EnrollmentListRelationFilter
    teachers?: TeacherListRelationFilter
    infrastructures?: InfrastructureListRelationFilter
    labs?: LabListRelationFilter
    pillars?: PillarListRelationFilter
    innovations?: InnovationListRelationFilter
    challenges?: ChallengeListRelationFilter
    assignedUsers?: UserSchoolListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    established?: SortOrderInput | SortOrder
    upgradedYear?: SortOrderInput | SortOrder
    udiseCode?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    medium?: SortOrderInput | SortOrder
    inclusive?: SortOrderInput | SortOrder
    vocationalTrades?: SortOrder
    coed?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    principal?: SortOrderInput | SortOrder
    principalSince?: SortOrderInput | SortOrder
    principalQualification?: SortOrderInput | SortOrder
    principalProfessionalQualification?: SortOrderInput | SortOrder
    principalJoiningDate?: SortOrderInput | SortOrder
    principalExperience?: SortOrderInput | SortOrder
    principalContact?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    midDayMeal?: SortOrderInput | SortOrder
    drinkingWater?: SortOrderInput | SortOrder
    electricity?: SortOrderInput | SortOrder
    internet?: SortOrderInput | SortOrder
    fireSafety?: SortOrderInput | SortOrder
    teacherPhotosDisplayed?: SortOrderInput | SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
    teachers?: TeacherOrderByRelationAggregateInput
    infrastructures?: InfrastructureOrderByRelationAggregateInput
    labs?: LabOrderByRelationAggregateInput
    pillars?: PillarOrderByRelationAggregateInput
    innovations?: InnovationOrderByRelationAggregateInput
    challenges?: ChallengeOrderByRelationAggregateInput
    assignedUsers?: UserSchoolOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    udiseCode?: string
    name_district?: SchoolName_districtCompoundUniqueInput
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    status?: StringFilter<"School"> | string
    established?: IntNullableFilter<"School"> | number | null
    upgradedYear?: StringNullableFilter<"School"> | string | null
    district?: StringNullableFilter<"School"> | string | null
    block?: StringNullableFilter<"School"> | string | null
    cluster?: StringNullableFilter<"School"> | string | null
    village?: StringNullableFilter<"School"> | string | null
    management?: StringNullableFilter<"School"> | string | null
    type?: StringNullableFilter<"School"> | string | null
    medium?: StringNullableFilter<"School"> | string | null
    inclusive?: BoolNullableFilter<"School"> | boolean | null
    vocationalTrades?: StringNullableListFilter<"School">
    coed?: BoolNullableFilter<"School"> | boolean | null
    totalArea?: StringNullableFilter<"School"> | string | null
    principal?: StringNullableFilter<"School"> | string | null
    principalSince?: StringNullableFilter<"School"> | string | null
    principalQualification?: StringNullableFilter<"School"> | string | null
    principalProfessionalQualification?: StringNullableFilter<"School"> | string | null
    principalJoiningDate?: StringNullableFilter<"School"> | string | null
    principalExperience?: StringNullableFilter<"School"> | string | null
    principalContact?: StringNullableFilter<"School"> | string | null
    principalEmail?: StringNullableFilter<"School"> | string | null
    midDayMeal?: StringNullableFilter<"School"> | string | null
    drinkingWater?: StringNullableFilter<"School"> | string | null
    electricity?: StringNullableFilter<"School"> | string | null
    internet?: StringNullableFilter<"School"> | string | null
    fireSafety?: StringNullableFilter<"School"> | string | null
    teacherPhotosDisplayed?: BoolNullableFilter<"School"> | boolean | null
    enrollments?: EnrollmentListRelationFilter
    teachers?: TeacherListRelationFilter
    infrastructures?: InfrastructureListRelationFilter
    labs?: LabListRelationFilter
    pillars?: PillarListRelationFilter
    innovations?: InnovationListRelationFilter
    challenges?: ChallengeListRelationFilter
    assignedUsers?: UserSchoolListRelationFilter
  }, "id" | "udiseCode" | "name_district">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    established?: SortOrderInput | SortOrder
    upgradedYear?: SortOrderInput | SortOrder
    udiseCode?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    medium?: SortOrderInput | SortOrder
    inclusive?: SortOrderInput | SortOrder
    vocationalTrades?: SortOrder
    coed?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    principal?: SortOrderInput | SortOrder
    principalSince?: SortOrderInput | SortOrder
    principalQualification?: SortOrderInput | SortOrder
    principalProfessionalQualification?: SortOrderInput | SortOrder
    principalJoiningDate?: SortOrderInput | SortOrder
    principalExperience?: SortOrderInput | SortOrder
    principalContact?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    midDayMeal?: SortOrderInput | SortOrder
    drinkingWater?: SortOrderInput | SortOrder
    electricity?: SortOrderInput | SortOrder
    internet?: SortOrderInput | SortOrder
    fireSafety?: SortOrderInput | SortOrder
    teacherPhotosDisplayed?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    status?: StringWithAggregatesFilter<"School"> | string
    established?: IntNullableWithAggregatesFilter<"School"> | number | null
    upgradedYear?: StringNullableWithAggregatesFilter<"School"> | string | null
    udiseCode?: StringNullableWithAggregatesFilter<"School"> | string | null
    district?: StringNullableWithAggregatesFilter<"School"> | string | null
    block?: StringNullableWithAggregatesFilter<"School"> | string | null
    cluster?: StringNullableWithAggregatesFilter<"School"> | string | null
    village?: StringNullableWithAggregatesFilter<"School"> | string | null
    management?: StringNullableWithAggregatesFilter<"School"> | string | null
    type?: StringNullableWithAggregatesFilter<"School"> | string | null
    medium?: StringNullableWithAggregatesFilter<"School"> | string | null
    inclusive?: BoolNullableWithAggregatesFilter<"School"> | boolean | null
    vocationalTrades?: StringNullableListFilter<"School">
    coed?: BoolNullableWithAggregatesFilter<"School"> | boolean | null
    totalArea?: StringNullableWithAggregatesFilter<"School"> | string | null
    principal?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalSince?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalQualification?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalProfessionalQualification?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalJoiningDate?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalExperience?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalContact?: StringNullableWithAggregatesFilter<"School"> | string | null
    principalEmail?: StringNullableWithAggregatesFilter<"School"> | string | null
    midDayMeal?: StringNullableWithAggregatesFilter<"School"> | string | null
    drinkingWater?: StringNullableWithAggregatesFilter<"School"> | string | null
    electricity?: StringNullableWithAggregatesFilter<"School"> | string | null
    internet?: StringNullableWithAggregatesFilter<"School"> | string | null
    fireSafety?: StringNullableWithAggregatesFilter<"School"> | string | null
    teacherPhotosDisplayed?: BoolNullableWithAggregatesFilter<"School"> | boolean | null
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    schoolId?: IntFilter<"Enrollment"> | number
    class?: StringFilter<"Enrollment"> | string
    boys?: IntNullableFilter<"Enrollment"> | number | null
    girls?: IntNullableFilter<"Enrollment"> | number | null
    total?: IntNullableFilter<"Enrollment"> | number | null
    cwsn?: IntNullableFilter<"Enrollment"> | number | null
    remarks?: StringNullableFilter<"Enrollment"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    boys?: SortOrderInput | SortOrder
    girls?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    cwsn?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    schoolId?: IntFilter<"Enrollment"> | number
    class?: StringFilter<"Enrollment"> | string
    boys?: IntNullableFilter<"Enrollment"> | number | null
    girls?: IntNullableFilter<"Enrollment"> | number | null
    total?: IntNullableFilter<"Enrollment"> | number | null
    cwsn?: IntNullableFilter<"Enrollment"> | number | null
    remarks?: StringNullableFilter<"Enrollment"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    boys?: SortOrderInput | SortOrder
    girls?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    cwsn?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    schoolId?: IntWithAggregatesFilter<"Enrollment"> | number
    class?: StringWithAggregatesFilter<"Enrollment"> | string
    boys?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    girls?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    total?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    cwsn?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    remarks?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    schoolId?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    gender?: StringNullableFilter<"Teacher"> | string | null
    mobile?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    section?: StringNullableFilter<"Teacher"> | string | null
    classes?: StringNullableFilter<"Teacher"> | string | null
    subjects?: StringNullableFilter<"Teacher"> | string | null
    iecTraining?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    classes?: SortOrderInput | SortOrder
    subjects?: SortOrderInput | SortOrder
    iecTraining?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    schoolId?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    gender?: StringNullableFilter<"Teacher"> | string | null
    mobile?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    section?: StringNullableFilter<"Teacher"> | string | null
    classes?: StringNullableFilter<"Teacher"> | string | null
    subjects?: StringNullableFilter<"Teacher"> | string | null
    iecTraining?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    classes?: SortOrderInput | SortOrder
    subjects?: SortOrderInput | SortOrder
    iecTraining?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    schoolId?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
    gender?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    qualification?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    section?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    classes?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    subjects?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    iecTraining?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type InfrastructureWhereInput = {
    AND?: InfrastructureWhereInput | InfrastructureWhereInput[]
    OR?: InfrastructureWhereInput[]
    NOT?: InfrastructureWhereInput | InfrastructureWhereInput[]
    id?: IntFilter<"Infrastructure"> | number
    schoolId?: IntFilter<"Infrastructure"> | number
    facility?: StringFilter<"Infrastructure"> | string
    quantity?: IntNullableFilter<"Infrastructure"> | number | null
    status?: StringNullableFilter<"Infrastructure"> | string | null
    remarks?: StringNullableFilter<"Infrastructure"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type InfrastructureOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    facility?: SortOrder
    quantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type InfrastructureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InfrastructureWhereInput | InfrastructureWhereInput[]
    OR?: InfrastructureWhereInput[]
    NOT?: InfrastructureWhereInput | InfrastructureWhereInput[]
    schoolId?: IntFilter<"Infrastructure"> | number
    facility?: StringFilter<"Infrastructure"> | string
    quantity?: IntNullableFilter<"Infrastructure"> | number | null
    status?: StringNullableFilter<"Infrastructure"> | string | null
    remarks?: StringNullableFilter<"Infrastructure"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type InfrastructureOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    facility?: SortOrder
    quantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: InfrastructureCountOrderByAggregateInput
    _avg?: InfrastructureAvgOrderByAggregateInput
    _max?: InfrastructureMaxOrderByAggregateInput
    _min?: InfrastructureMinOrderByAggregateInput
    _sum?: InfrastructureSumOrderByAggregateInput
  }

  export type InfrastructureScalarWhereWithAggregatesInput = {
    AND?: InfrastructureScalarWhereWithAggregatesInput | InfrastructureScalarWhereWithAggregatesInput[]
    OR?: InfrastructureScalarWhereWithAggregatesInput[]
    NOT?: InfrastructureScalarWhereWithAggregatesInput | InfrastructureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Infrastructure"> | number
    schoolId?: IntWithAggregatesFilter<"Infrastructure"> | number
    facility?: StringWithAggregatesFilter<"Infrastructure"> | string
    quantity?: IntNullableWithAggregatesFilter<"Infrastructure"> | number | null
    status?: StringNullableWithAggregatesFilter<"Infrastructure"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Infrastructure"> | string | null
  }

  export type LabWhereInput = {
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    id?: IntFilter<"Lab"> | number
    schoolId?: IntFilter<"Lab"> | number
    type?: StringFilter<"Lab"> | string
    available?: BoolFilter<"Lab"> | boolean
    equipment?: StringNullableFilter<"Lab"> | string | null
    remarks?: StringNullableFilter<"Lab"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type LabOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    available?: SortOrder
    equipment?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type LabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    schoolId?: IntFilter<"Lab"> | number
    type?: StringFilter<"Lab"> | string
    available?: BoolFilter<"Lab"> | boolean
    equipment?: StringNullableFilter<"Lab"> | string | null
    remarks?: StringNullableFilter<"Lab"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type LabOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    available?: SortOrder
    equipment?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: LabCountOrderByAggregateInput
    _avg?: LabAvgOrderByAggregateInput
    _max?: LabMaxOrderByAggregateInput
    _min?: LabMinOrderByAggregateInput
    _sum?: LabSumOrderByAggregateInput
  }

  export type LabScalarWhereWithAggregatesInput = {
    AND?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    OR?: LabScalarWhereWithAggregatesInput[]
    NOT?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lab"> | number
    schoolId?: IntWithAggregatesFilter<"Lab"> | number
    type?: StringWithAggregatesFilter<"Lab"> | string
    available?: BoolWithAggregatesFilter<"Lab"> | boolean
    equipment?: StringNullableWithAggregatesFilter<"Lab"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Lab"> | string | null
  }

  export type PillarWhereInput = {
    AND?: PillarWhereInput | PillarWhereInput[]
    OR?: PillarWhereInput[]
    NOT?: PillarWhereInput | PillarWhereInput[]
    id?: IntFilter<"Pillar"> | number
    schoolId?: IntFilter<"Pillar"> | number
    number?: IntFilter<"Pillar"> | number
    title?: StringFilter<"Pillar"> | string
    subAspect?: StringFilter<"Pillar"> | string
    observations?: StringNullableFilter<"Pillar"> | string | null
    remarks?: StringNullableFilter<"Pillar"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type PillarOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    subAspect?: SortOrder
    observations?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type PillarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PillarWhereInput | PillarWhereInput[]
    OR?: PillarWhereInput[]
    NOT?: PillarWhereInput | PillarWhereInput[]
    schoolId?: IntFilter<"Pillar"> | number
    number?: IntFilter<"Pillar"> | number
    title?: StringFilter<"Pillar"> | string
    subAspect?: StringFilter<"Pillar"> | string
    observations?: StringNullableFilter<"Pillar"> | string | null
    remarks?: StringNullableFilter<"Pillar"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type PillarOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    subAspect?: SortOrder
    observations?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: PillarCountOrderByAggregateInput
    _avg?: PillarAvgOrderByAggregateInput
    _max?: PillarMaxOrderByAggregateInput
    _min?: PillarMinOrderByAggregateInput
    _sum?: PillarSumOrderByAggregateInput
  }

  export type PillarScalarWhereWithAggregatesInput = {
    AND?: PillarScalarWhereWithAggregatesInput | PillarScalarWhereWithAggregatesInput[]
    OR?: PillarScalarWhereWithAggregatesInput[]
    NOT?: PillarScalarWhereWithAggregatesInput | PillarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pillar"> | number
    schoolId?: IntWithAggregatesFilter<"Pillar"> | number
    number?: IntWithAggregatesFilter<"Pillar"> | number
    title?: StringWithAggregatesFilter<"Pillar"> | string
    subAspect?: StringWithAggregatesFilter<"Pillar"> | string
    observations?: StringNullableWithAggregatesFilter<"Pillar"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Pillar"> | string | null
  }

  export type InnovationWhereInput = {
    AND?: InnovationWhereInput | InnovationWhereInput[]
    OR?: InnovationWhereInput[]
    NOT?: InnovationWhereInput | InnovationWhereInput[]
    id?: IntFilter<"Innovation"> | number
    schoolId?: IntFilter<"Innovation"> | number
    type?: StringFilter<"Innovation"> | string
    description?: StringFilter<"Innovation"> | string
    mediaUrl?: StringNullableFilter<"Innovation"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type InnovationOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type InnovationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InnovationWhereInput | InnovationWhereInput[]
    OR?: InnovationWhereInput[]
    NOT?: InnovationWhereInput | InnovationWhereInput[]
    schoolId?: IntFilter<"Innovation"> | number
    type?: StringFilter<"Innovation"> | string
    description?: StringFilter<"Innovation"> | string
    mediaUrl?: StringNullableFilter<"Innovation"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type InnovationOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    _count?: InnovationCountOrderByAggregateInput
    _avg?: InnovationAvgOrderByAggregateInput
    _max?: InnovationMaxOrderByAggregateInput
    _min?: InnovationMinOrderByAggregateInput
    _sum?: InnovationSumOrderByAggregateInput
  }

  export type InnovationScalarWhereWithAggregatesInput = {
    AND?: InnovationScalarWhereWithAggregatesInput | InnovationScalarWhereWithAggregatesInput[]
    OR?: InnovationScalarWhereWithAggregatesInput[]
    NOT?: InnovationScalarWhereWithAggregatesInput | InnovationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Innovation"> | number
    schoolId?: IntWithAggregatesFilter<"Innovation"> | number
    type?: StringWithAggregatesFilter<"Innovation"> | string
    description?: StringWithAggregatesFilter<"Innovation"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"Innovation"> | string | null
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: IntFilter<"Challenge"> | number
    schoolId?: IntFilter<"Challenge"> | number
    area?: StringFilter<"Challenge"> | string
    challenge?: StringFilter<"Challenge"> | string
    supportNeeded?: StringNullableFilter<"Challenge"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    area?: SortOrder
    challenge?: SortOrder
    supportNeeded?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    schoolId?: IntFilter<"Challenge"> | number
    area?: StringFilter<"Challenge"> | string
    challenge?: StringFilter<"Challenge"> | string
    supportNeeded?: StringNullableFilter<"Challenge"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    area?: SortOrder
    challenge?: SortOrder
    supportNeeded?: SortOrderInput | SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Challenge"> | number
    schoolId?: IntWithAggregatesFilter<"Challenge"> | number
    area?: StringWithAggregatesFilter<"Challenge"> | string
    challenge?: StringWithAggregatesFilter<"Challenge"> | string
    supportNeeded?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    email?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateInput = {
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutPermissionsInput
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutPermissionsInput
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutPermissionsNestedInput
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    roleId: number
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    roleId: number
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSchoolCreateInput = {
    user: UserCreateNestedOneWithoutAssignedSchoolsInput
    school: SchoolCreateNestedOneWithoutAssignedUsersInput
  }

  export type UserSchoolUncheckedCreateInput = {
    id?: number
    userId: number
    schoolId: number
  }

  export type UserSchoolUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutAssignedUsersNestedInput
  }

  export type UserSchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSchoolCreateManyInput = {
    id?: number
    userId: number
    schoolId: number
  }

  export type UserSchoolUpdateManyMutationInput = {

  }

  export type UserSchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolCreateInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EnrollmentCreateInput = {
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
    school: SchoolCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    schoolId: number
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
  }

  export type EnrollmentUpdateInput = {
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    schoolId: number
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
  }

  export type EnrollmentUpdateManyMutationInput = {
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateInput = {
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
    school: SchoolCreateNestedOneWithoutTeachersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    schoolId: number
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateManyInput = {
    id?: number
    schoolId: number
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureCreateInput = {
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
    school: SchoolCreateNestedOneWithoutInfrastructuresInput
  }

  export type InfrastructureUncheckedCreateInput = {
    id?: number
    schoolId: number
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
  }

  export type InfrastructureUpdateInput = {
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutInfrastructuresNestedInput
  }

  export type InfrastructureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureCreateManyInput = {
    id?: number
    schoolId: number
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
  }

  export type InfrastructureUpdateManyMutationInput = {
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabCreateInput = {
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
    school: SchoolCreateNestedOneWithoutLabsInput
  }

  export type LabUncheckedCreateInput = {
    id?: number
    schoolId: number
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
  }

  export type LabUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutLabsNestedInput
  }

  export type LabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabCreateManyInput = {
    id?: number
    schoolId: number
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
  }

  export type LabUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarCreateInput = {
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
    school: SchoolCreateNestedOneWithoutPillarsInput
  }

  export type PillarUncheckedCreateInput = {
    id?: number
    schoolId: number
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
  }

  export type PillarUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutPillarsNestedInput
  }

  export type PillarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarCreateManyInput = {
    id?: number
    schoolId: number
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
  }

  export type PillarUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationCreateInput = {
    type: string
    description: string
    mediaUrl?: string | null
    school: SchoolCreateNestedOneWithoutInnovationsInput
  }

  export type InnovationUncheckedCreateInput = {
    id?: number
    schoolId: number
    type: string
    description: string
    mediaUrl?: string | null
  }

  export type InnovationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutInnovationsNestedInput
  }

  export type InnovationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationCreateManyInput = {
    id?: number
    schoolId: number
    type: string
    description: string
    mediaUrl?: string | null
  }

  export type InnovationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeCreateInput = {
    area: string
    challenge: string
    supportNeeded?: string | null
    school: SchoolCreateNestedOneWithoutChallengesInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    schoolId: number
    area: string
    challenge: string
    supportNeeded?: string | null
  }

  export type ChallengeUpdateInput = {
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeCreateManyInput = {
    id?: number
    schoolId: number
    area: string
    challenge: string
    supportNeeded?: string | null
  }

  export type ChallengeUpdateManyMutationInput = {
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpCreateInput = {
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserSchoolListRelationFilter = {
    every?: UserSchoolWhereInput
    some?: UserSchoolWhereInput
    none?: UserSchoolWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type UserSchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    lastActive?: SortOrder
    isDisabled?: SortOrder
    isVerified?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    district?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    lastActive?: SortOrder
    isDisabled?: SortOrder
    isVerified?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    district?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    lastActive?: SortOrder
    isDisabled?: SortOrder
    isVerified?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    district?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type UserSchoolUserId_schoolIdCompoundUniqueInput = {
    userId: number
    schoolId: number
  }

  export type UserSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserSchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserSchoolSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type InfrastructureListRelationFilter = {
    every?: InfrastructureWhereInput
    some?: InfrastructureWhereInput
    none?: InfrastructureWhereInput
  }

  export type LabListRelationFilter = {
    every?: LabWhereInput
    some?: LabWhereInput
    none?: LabWhereInput
  }

  export type PillarListRelationFilter = {
    every?: PillarWhereInput
    some?: PillarWhereInput
    none?: PillarWhereInput
  }

  export type InnovationListRelationFilter = {
    every?: InnovationWhereInput
    some?: InnovationWhereInput
    none?: InnovationWhereInput
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfrastructureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PillarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InnovationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolName_districtCompoundUniqueInput = {
    name: string
    district: string
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    established?: SortOrder
    upgradedYear?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    village?: SortOrder
    management?: SortOrder
    type?: SortOrder
    medium?: SortOrder
    inclusive?: SortOrder
    vocationalTrades?: SortOrder
    coed?: SortOrder
    totalArea?: SortOrder
    principal?: SortOrder
    principalSince?: SortOrder
    principalQualification?: SortOrder
    principalProfessionalQualification?: SortOrder
    principalJoiningDate?: SortOrder
    principalExperience?: SortOrder
    principalContact?: SortOrder
    principalEmail?: SortOrder
    midDayMeal?: SortOrder
    drinkingWater?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    fireSafety?: SortOrder
    teacherPhotosDisplayed?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    established?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    established?: SortOrder
    upgradedYear?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    village?: SortOrder
    management?: SortOrder
    type?: SortOrder
    medium?: SortOrder
    inclusive?: SortOrder
    coed?: SortOrder
    totalArea?: SortOrder
    principal?: SortOrder
    principalSince?: SortOrder
    principalQualification?: SortOrder
    principalProfessionalQualification?: SortOrder
    principalJoiningDate?: SortOrder
    principalExperience?: SortOrder
    principalContact?: SortOrder
    principalEmail?: SortOrder
    midDayMeal?: SortOrder
    drinkingWater?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    fireSafety?: SortOrder
    teacherPhotosDisplayed?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    established?: SortOrder
    upgradedYear?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    village?: SortOrder
    management?: SortOrder
    type?: SortOrder
    medium?: SortOrder
    inclusive?: SortOrder
    coed?: SortOrder
    totalArea?: SortOrder
    principal?: SortOrder
    principalSince?: SortOrder
    principalQualification?: SortOrder
    principalProfessionalQualification?: SortOrder
    principalJoiningDate?: SortOrder
    principalExperience?: SortOrder
    principalContact?: SortOrder
    principalEmail?: SortOrder
    midDayMeal?: SortOrder
    drinkingWater?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    fireSafety?: SortOrder
    teacherPhotosDisplayed?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
    established?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    boys?: SortOrder
    girls?: SortOrder
    total?: SortOrder
    cwsn?: SortOrder
    remarks?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    boys?: SortOrder
    girls?: SortOrder
    total?: SortOrder
    cwsn?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    boys?: SortOrder
    girls?: SortOrder
    total?: SortOrder
    cwsn?: SortOrder
    remarks?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    boys?: SortOrder
    girls?: SortOrder
    total?: SortOrder
    cwsn?: SortOrder
    remarks?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    boys?: SortOrder
    girls?: SortOrder
    total?: SortOrder
    cwsn?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    qualification?: SortOrder
    section?: SortOrder
    classes?: SortOrder
    subjects?: SortOrder
    iecTraining?: SortOrder
    experience?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    qualification?: SortOrder
    section?: SortOrder
    classes?: SortOrder
    subjects?: SortOrder
    iecTraining?: SortOrder
    experience?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    qualification?: SortOrder
    section?: SortOrder
    classes?: SortOrder
    subjects?: SortOrder
    iecTraining?: SortOrder
    experience?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type InfrastructureCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    facility?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type InfrastructureAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    quantity?: SortOrder
  }

  export type InfrastructureMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    facility?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type InfrastructureMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    facility?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
  }

  export type InfrastructureSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    quantity?: SortOrder
  }

  export type LabCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    available?: SortOrder
    equipment?: SortOrder
    remarks?: SortOrder
  }

  export type LabAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type LabMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    available?: SortOrder
    equipment?: SortOrder
    remarks?: SortOrder
  }

  export type LabMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    available?: SortOrder
    equipment?: SortOrder
    remarks?: SortOrder
  }

  export type LabSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type PillarCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    subAspect?: SortOrder
    observations?: SortOrder
    remarks?: SortOrder
  }

  export type PillarAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
  }

  export type PillarMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    subAspect?: SortOrder
    observations?: SortOrder
    remarks?: SortOrder
  }

  export type PillarMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    subAspect?: SortOrder
    observations?: SortOrder
    remarks?: SortOrder
  }

  export type PillarSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    number?: SortOrder
  }

  export type InnovationCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
  }

  export type InnovationAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type InnovationMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
  }

  export type InnovationMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrl?: SortOrder
  }

  export type InnovationSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    area?: SortOrder
    challenge?: SortOrder
    supportNeeded?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    area?: SortOrder
    challenge?: SortOrder
    supportNeeded?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    area?: SortOrder
    challenge?: SortOrder
    supportNeeded?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPermissionsInput | UserUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPermissionsInput | UserUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPermissionsInput | UserUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPermissionsInput | UserUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPermissionsInput | UserUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPermissionsInput | UserUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedManyWithoutUsersInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserSchoolCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput> | UserSchoolCreateWithoutUserInput[] | UserSchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutUserInput | UserSchoolCreateOrConnectWithoutUserInput[]
    createMany?: UserSchoolCreateManyUserInputEnvelope
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserSchoolUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput> | UserSchoolCreateWithoutUserInput[] | UserSchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutUserInput | UserSchoolCreateOrConnectWithoutUserInput[]
    createMany?: UserSchoolCreateManyUserInputEnvelope
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PermissionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUsersInput | PermissionUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUsersInput | PermissionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUsersInput | PermissionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserSchoolUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput> | UserSchoolCreateWithoutUserInput[] | UserSchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutUserInput | UserSchoolCreateOrConnectWithoutUserInput[]
    upsert?: UserSchoolUpsertWithWhereUniqueWithoutUserInput | UserSchoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSchoolCreateManyUserInputEnvelope
    set?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    disconnect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    delete?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    update?: UserSchoolUpdateWithWhereUniqueWithoutUserInput | UserSchoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSchoolUpdateManyWithWhereWithoutUserInput | UserSchoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUsersInput | PermissionUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUsersInput | PermissionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUsersInput | PermissionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserSchoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput> | UserSchoolCreateWithoutUserInput[] | UserSchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutUserInput | UserSchoolCreateOrConnectWithoutUserInput[]
    upsert?: UserSchoolUpsertWithWhereUniqueWithoutUserInput | UserSchoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSchoolCreateManyUserInputEnvelope
    set?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    disconnect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    delete?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    update?: UserSchoolUpdateWithWhereUniqueWithoutUserInput | UserSchoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSchoolUpdateManyWithWhereWithoutUserInput | UserSchoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutAssignedSchoolsInput = {
    create?: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedSchoolsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutAssignedUsersInput = {
    create?: XOR<SchoolCreateWithoutAssignedUsersInput, SchoolUncheckedCreateWithoutAssignedUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAssignedUsersInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedSchoolsInput
    upsert?: UserUpsertWithoutAssignedSchoolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedSchoolsInput, UserUpdateWithoutAssignedSchoolsInput>, UserUncheckedUpdateWithoutAssignedSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutAssignedUsersNestedInput = {
    create?: XOR<SchoolCreateWithoutAssignedUsersInput, SchoolUncheckedCreateWithoutAssignedUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAssignedUsersInput
    upsert?: SchoolUpsertWithoutAssignedUsersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAssignedUsersInput, SchoolUpdateWithoutAssignedUsersInput>, SchoolUncheckedUpdateWithoutAssignedUsersInput>
  }

  export type SchoolCreatevocationalTradesInput = {
    set: string[]
  }

  export type EnrollmentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput> | EnrollmentCreateWithoutSchoolInput[] | EnrollmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSchoolInput | EnrollmentCreateOrConnectWithoutSchoolInput[]
    createMany?: EnrollmentCreateManySchoolInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TeacherCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type InfrastructureCreateNestedManyWithoutSchoolInput = {
    create?: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput> | InfrastructureCreateWithoutSchoolInput[] | InfrastructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InfrastructureCreateOrConnectWithoutSchoolInput | InfrastructureCreateOrConnectWithoutSchoolInput[]
    createMany?: InfrastructureCreateManySchoolInputEnvelope
    connect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
  }

  export type LabCreateNestedManyWithoutSchoolInput = {
    create?: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput> | LabCreateWithoutSchoolInput[] | LabUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: LabCreateOrConnectWithoutSchoolInput | LabCreateOrConnectWithoutSchoolInput[]
    createMany?: LabCreateManySchoolInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type PillarCreateNestedManyWithoutSchoolInput = {
    create?: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput> | PillarCreateWithoutSchoolInput[] | PillarUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PillarCreateOrConnectWithoutSchoolInput | PillarCreateOrConnectWithoutSchoolInput[]
    createMany?: PillarCreateManySchoolInputEnvelope
    connect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
  }

  export type InnovationCreateNestedManyWithoutSchoolInput = {
    create?: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput> | InnovationCreateWithoutSchoolInput[] | InnovationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InnovationCreateOrConnectWithoutSchoolInput | InnovationCreateOrConnectWithoutSchoolInput[]
    createMany?: InnovationCreateManySchoolInputEnvelope
    connect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput> | ChallengeCreateWithoutSchoolInput[] | ChallengeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSchoolInput | ChallengeCreateOrConnectWithoutSchoolInput[]
    createMany?: ChallengeCreateManySchoolInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type UserSchoolCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput> | UserSchoolCreateWithoutSchoolInput[] | UserSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutSchoolInput | UserSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: UserSchoolCreateManySchoolInputEnvelope
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput> | EnrollmentCreateWithoutSchoolInput[] | EnrollmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSchoolInput | EnrollmentCreateOrConnectWithoutSchoolInput[]
    createMany?: EnrollmentCreateManySchoolInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type InfrastructureUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput> | InfrastructureCreateWithoutSchoolInput[] | InfrastructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InfrastructureCreateOrConnectWithoutSchoolInput | InfrastructureCreateOrConnectWithoutSchoolInput[]
    createMany?: InfrastructureCreateManySchoolInputEnvelope
    connect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
  }

  export type LabUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput> | LabCreateWithoutSchoolInput[] | LabUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: LabCreateOrConnectWithoutSchoolInput | LabCreateOrConnectWithoutSchoolInput[]
    createMany?: LabCreateManySchoolInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type PillarUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput> | PillarCreateWithoutSchoolInput[] | PillarUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PillarCreateOrConnectWithoutSchoolInput | PillarCreateOrConnectWithoutSchoolInput[]
    createMany?: PillarCreateManySchoolInputEnvelope
    connect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
  }

  export type InnovationUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput> | InnovationCreateWithoutSchoolInput[] | InnovationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InnovationCreateOrConnectWithoutSchoolInput | InnovationCreateOrConnectWithoutSchoolInput[]
    createMany?: InnovationCreateManySchoolInputEnvelope
    connect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput> | ChallengeCreateWithoutSchoolInput[] | ChallengeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSchoolInput | ChallengeCreateOrConnectWithoutSchoolInput[]
    createMany?: ChallengeCreateManySchoolInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type UserSchoolUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput> | UserSchoolCreateWithoutSchoolInput[] | UserSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutSchoolInput | UserSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: UserSchoolCreateManySchoolInputEnvelope
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SchoolUpdatevocationalTradesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnrollmentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput> | EnrollmentCreateWithoutSchoolInput[] | EnrollmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSchoolInput | EnrollmentCreateOrConnectWithoutSchoolInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSchoolInput | EnrollmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: EnrollmentCreateManySchoolInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSchoolInput | EnrollmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSchoolInput | EnrollmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TeacherUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutSchoolInput | TeacherUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutSchoolInput | TeacherUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutSchoolInput | TeacherUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type InfrastructureUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput> | InfrastructureCreateWithoutSchoolInput[] | InfrastructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InfrastructureCreateOrConnectWithoutSchoolInput | InfrastructureCreateOrConnectWithoutSchoolInput[]
    upsert?: InfrastructureUpsertWithWhereUniqueWithoutSchoolInput | InfrastructureUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: InfrastructureCreateManySchoolInputEnvelope
    set?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    disconnect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    delete?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    connect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    update?: InfrastructureUpdateWithWhereUniqueWithoutSchoolInput | InfrastructureUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: InfrastructureUpdateManyWithWhereWithoutSchoolInput | InfrastructureUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: InfrastructureScalarWhereInput | InfrastructureScalarWhereInput[]
  }

  export type LabUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput> | LabCreateWithoutSchoolInput[] | LabUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: LabCreateOrConnectWithoutSchoolInput | LabCreateOrConnectWithoutSchoolInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutSchoolInput | LabUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: LabCreateManySchoolInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutSchoolInput | LabUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: LabUpdateManyWithWhereWithoutSchoolInput | LabUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type PillarUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput> | PillarCreateWithoutSchoolInput[] | PillarUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PillarCreateOrConnectWithoutSchoolInput | PillarCreateOrConnectWithoutSchoolInput[]
    upsert?: PillarUpsertWithWhereUniqueWithoutSchoolInput | PillarUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: PillarCreateManySchoolInputEnvelope
    set?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    disconnect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    delete?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    connect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    update?: PillarUpdateWithWhereUniqueWithoutSchoolInput | PillarUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: PillarUpdateManyWithWhereWithoutSchoolInput | PillarUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: PillarScalarWhereInput | PillarScalarWhereInput[]
  }

  export type InnovationUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput> | InnovationCreateWithoutSchoolInput[] | InnovationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InnovationCreateOrConnectWithoutSchoolInput | InnovationCreateOrConnectWithoutSchoolInput[]
    upsert?: InnovationUpsertWithWhereUniqueWithoutSchoolInput | InnovationUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: InnovationCreateManySchoolInputEnvelope
    set?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    disconnect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    delete?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    connect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    update?: InnovationUpdateWithWhereUniqueWithoutSchoolInput | InnovationUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: InnovationUpdateManyWithWhereWithoutSchoolInput | InnovationUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: InnovationScalarWhereInput | InnovationScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput> | ChallengeCreateWithoutSchoolInput[] | ChallengeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSchoolInput | ChallengeCreateOrConnectWithoutSchoolInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutSchoolInput | ChallengeUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ChallengeCreateManySchoolInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutSchoolInput | ChallengeUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutSchoolInput | ChallengeUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type UserSchoolUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput> | UserSchoolCreateWithoutSchoolInput[] | UserSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutSchoolInput | UserSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: UserSchoolUpsertWithWhereUniqueWithoutSchoolInput | UserSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserSchoolCreateManySchoolInputEnvelope
    set?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    disconnect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    delete?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    update?: UserSchoolUpdateWithWhereUniqueWithoutSchoolInput | UserSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserSchoolUpdateManyWithWhereWithoutSchoolInput | UserSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput> | EnrollmentCreateWithoutSchoolInput[] | EnrollmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSchoolInput | EnrollmentCreateOrConnectWithoutSchoolInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSchoolInput | EnrollmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: EnrollmentCreateManySchoolInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSchoolInput | EnrollmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSchoolInput | EnrollmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutSchoolInput | TeacherUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutSchoolInput | TeacherUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutSchoolInput | TeacherUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput> | InfrastructureCreateWithoutSchoolInput[] | InfrastructureUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InfrastructureCreateOrConnectWithoutSchoolInput | InfrastructureCreateOrConnectWithoutSchoolInput[]
    upsert?: InfrastructureUpsertWithWhereUniqueWithoutSchoolInput | InfrastructureUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: InfrastructureCreateManySchoolInputEnvelope
    set?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    disconnect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    delete?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    connect?: InfrastructureWhereUniqueInput | InfrastructureWhereUniqueInput[]
    update?: InfrastructureUpdateWithWhereUniqueWithoutSchoolInput | InfrastructureUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: InfrastructureUpdateManyWithWhereWithoutSchoolInput | InfrastructureUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: InfrastructureScalarWhereInput | InfrastructureScalarWhereInput[]
  }

  export type LabUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput> | LabCreateWithoutSchoolInput[] | LabUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: LabCreateOrConnectWithoutSchoolInput | LabCreateOrConnectWithoutSchoolInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutSchoolInput | LabUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: LabCreateManySchoolInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutSchoolInput | LabUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: LabUpdateManyWithWhereWithoutSchoolInput | LabUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type PillarUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput> | PillarCreateWithoutSchoolInput[] | PillarUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PillarCreateOrConnectWithoutSchoolInput | PillarCreateOrConnectWithoutSchoolInput[]
    upsert?: PillarUpsertWithWhereUniqueWithoutSchoolInput | PillarUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: PillarCreateManySchoolInputEnvelope
    set?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    disconnect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    delete?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    connect?: PillarWhereUniqueInput | PillarWhereUniqueInput[]
    update?: PillarUpdateWithWhereUniqueWithoutSchoolInput | PillarUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: PillarUpdateManyWithWhereWithoutSchoolInput | PillarUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: PillarScalarWhereInput | PillarScalarWhereInput[]
  }

  export type InnovationUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput> | InnovationCreateWithoutSchoolInput[] | InnovationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: InnovationCreateOrConnectWithoutSchoolInput | InnovationCreateOrConnectWithoutSchoolInput[]
    upsert?: InnovationUpsertWithWhereUniqueWithoutSchoolInput | InnovationUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: InnovationCreateManySchoolInputEnvelope
    set?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    disconnect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    delete?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    connect?: InnovationWhereUniqueInput | InnovationWhereUniqueInput[]
    update?: InnovationUpdateWithWhereUniqueWithoutSchoolInput | InnovationUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: InnovationUpdateManyWithWhereWithoutSchoolInput | InnovationUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: InnovationScalarWhereInput | InnovationScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput> | ChallengeCreateWithoutSchoolInput[] | ChallengeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSchoolInput | ChallengeCreateOrConnectWithoutSchoolInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutSchoolInput | ChallengeUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ChallengeCreateManySchoolInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutSchoolInput | ChallengeUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutSchoolInput | ChallengeUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput> | UserSchoolCreateWithoutSchoolInput[] | UserSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserSchoolCreateOrConnectWithoutSchoolInput | UserSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: UserSchoolUpsertWithWhereUniqueWithoutSchoolInput | UserSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserSchoolCreateManySchoolInputEnvelope
    set?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    disconnect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    delete?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    connect?: UserSchoolWhereUniqueInput | UserSchoolWhereUniqueInput[]
    update?: UserSchoolUpdateWithWhereUniqueWithoutSchoolInput | UserSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserSchoolUpdateManyWithWhereWithoutSchoolInput | UserSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<SchoolCreateWithoutEnrollmentsInput, SchoolUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutEnrollmentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<SchoolCreateWithoutEnrollmentsInput, SchoolUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutEnrollmentsInput
    upsert?: SchoolUpsertWithoutEnrollmentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutEnrollmentsInput, SchoolUpdateWithoutEnrollmentsInput>, SchoolUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SchoolCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeachersInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeachersInput
    upsert?: SchoolUpsertWithoutTeachersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTeachersInput, SchoolUpdateWithoutTeachersInput>, SchoolUncheckedUpdateWithoutTeachersInput>
  }

  export type SchoolCreateNestedOneWithoutInfrastructuresInput = {
    create?: XOR<SchoolCreateWithoutInfrastructuresInput, SchoolUncheckedCreateWithoutInfrastructuresInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutInfrastructuresInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutInfrastructuresNestedInput = {
    create?: XOR<SchoolCreateWithoutInfrastructuresInput, SchoolUncheckedCreateWithoutInfrastructuresInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutInfrastructuresInput
    upsert?: SchoolUpsertWithoutInfrastructuresInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutInfrastructuresInput, SchoolUpdateWithoutInfrastructuresInput>, SchoolUncheckedUpdateWithoutInfrastructuresInput>
  }

  export type SchoolCreateNestedOneWithoutLabsInput = {
    create?: XOR<SchoolCreateWithoutLabsInput, SchoolUncheckedCreateWithoutLabsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutLabsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutLabsNestedInput = {
    create?: XOR<SchoolCreateWithoutLabsInput, SchoolUncheckedCreateWithoutLabsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutLabsInput
    upsert?: SchoolUpsertWithoutLabsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutLabsInput, SchoolUpdateWithoutLabsInput>, SchoolUncheckedUpdateWithoutLabsInput>
  }

  export type SchoolCreateNestedOneWithoutPillarsInput = {
    create?: XOR<SchoolCreateWithoutPillarsInput, SchoolUncheckedCreateWithoutPillarsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutPillarsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutPillarsNestedInput = {
    create?: XOR<SchoolCreateWithoutPillarsInput, SchoolUncheckedCreateWithoutPillarsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutPillarsInput
    upsert?: SchoolUpsertWithoutPillarsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutPillarsInput, SchoolUpdateWithoutPillarsInput>, SchoolUncheckedUpdateWithoutPillarsInput>
  }

  export type SchoolCreateNestedOneWithoutInnovationsInput = {
    create?: XOR<SchoolCreateWithoutInnovationsInput, SchoolUncheckedCreateWithoutInnovationsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutInnovationsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutInnovationsNestedInput = {
    create?: XOR<SchoolCreateWithoutInnovationsInput, SchoolUncheckedCreateWithoutInnovationsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutInnovationsInput
    upsert?: SchoolUpsertWithoutInnovationsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutInnovationsInput, SchoolUpdateWithoutInnovationsInput>, SchoolUncheckedUpdateWithoutInnovationsInput>
  }

  export type SchoolCreateNestedOneWithoutChallengesInput = {
    create?: XOR<SchoolCreateWithoutChallengesInput, SchoolUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengesInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<SchoolCreateWithoutChallengesInput, SchoolUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengesInput
    upsert?: SchoolUpsertWithoutChallengesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutChallengesInput, SchoolUpdateWithoutChallengesInput>, SchoolUncheckedUpdateWithoutChallengesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutRolesInput = {
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    isDisabled?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    district?: StringNullableFilter<"User"> | string | null
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
  }

  export type UserCreateWithoutPermissionsInput = {
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    assignedSchools?: UserSchoolCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    roleId: number
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    assignedSchools?: UserSchoolUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleCreateWithoutPermissionsInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateManyWithWhereWithoutPermissionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PermissionCreateWithoutUsersInput = {
    name: string
    description?: string | null
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionCreateOrConnectWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput>
  }

  export type UserSchoolCreateWithoutUserInput = {
    school: SchoolCreateNestedOneWithoutAssignedUsersInput
  }

  export type UserSchoolUncheckedCreateWithoutUserInput = {
    id?: number
    schoolId: number
  }

  export type UserSchoolCreateOrConnectWithoutUserInput = {
    where: UserSchoolWhereUniqueInput
    create: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput>
  }

  export type UserSchoolCreateManyUserInputEnvelope = {
    data: UserSchoolCreateManyUserInput | UserSchoolCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type PermissionUpsertWithWhereUniqueWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUsersInput, PermissionUncheckedUpdateWithoutUsersInput>
    create: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUsersInput, PermissionUncheckedUpdateWithoutUsersInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUsersInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserSchoolUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSchoolWhereUniqueInput
    update: XOR<UserSchoolUpdateWithoutUserInput, UserSchoolUncheckedUpdateWithoutUserInput>
    create: XOR<UserSchoolCreateWithoutUserInput, UserSchoolUncheckedCreateWithoutUserInput>
  }

  export type UserSchoolUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSchoolWhereUniqueInput
    data: XOR<UserSchoolUpdateWithoutUserInput, UserSchoolUncheckedUpdateWithoutUserInput>
  }

  export type UserSchoolUpdateManyWithWhereWithoutUserInput = {
    where: UserSchoolScalarWhereInput
    data: XOR<UserSchoolUpdateManyMutationInput, UserSchoolUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSchoolScalarWhereInput = {
    AND?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
    OR?: UserSchoolScalarWhereInput[]
    NOT?: UserSchoolScalarWhereInput | UserSchoolScalarWhereInput[]
    id?: IntFilter<"UserSchool"> | number
    userId?: IntFilter<"UserSchool"> | number
    schoolId?: IntFilter<"UserSchool"> | number
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null
  }

  export type UserCreateWithoutRefreshTokensInput = {
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    roleId: number
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    assignedSchools?: UserSchoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAssignedSchoolsInput = {
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedSchoolsInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    roleId: number
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedSchoolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
  }

  export type SchoolCreateWithoutAssignedUsersInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutAssignedUsersInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutAssignedUsersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAssignedUsersInput, SchoolUncheckedCreateWithoutAssignedUsersInput>
  }

  export type UserUpsertWithoutAssignedSchoolsInput = {
    update: XOR<UserUpdateWithoutAssignedSchoolsInput, UserUncheckedUpdateWithoutAssignedSchoolsInput>
    create: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedSchoolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedSchoolsInput, UserUncheckedUpdateWithoutAssignedSchoolsInput>
  }

  export type UserUpdateWithoutAssignedSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchoolUpsertWithoutAssignedUsersInput = {
    update: XOR<SchoolUpdateWithoutAssignedUsersInput, SchoolUncheckedUpdateWithoutAssignedUsersInput>
    create: XOR<SchoolCreateWithoutAssignedUsersInput, SchoolUncheckedCreateWithoutAssignedUsersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAssignedUsersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAssignedUsersInput, SchoolUncheckedUpdateWithoutAssignedUsersInput>
  }

  export type SchoolUpdateWithoutAssignedUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutAssignedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type EnrollmentCreateWithoutSchoolInput = {
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
  }

  export type EnrollmentUncheckedCreateWithoutSchoolInput = {
    id?: number
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
  }

  export type EnrollmentCreateOrConnectWithoutSchoolInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput>
  }

  export type EnrollmentCreateManySchoolInputEnvelope = {
    data: EnrollmentCreateManySchoolInput | EnrollmentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutSchoolInput = {
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
  }

  export type TeacherUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
  }

  export type TeacherCreateOrConnectWithoutSchoolInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherCreateManySchoolInputEnvelope = {
    data: TeacherCreateManySchoolInput | TeacherCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type InfrastructureCreateWithoutSchoolInput = {
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
  }

  export type InfrastructureUncheckedCreateWithoutSchoolInput = {
    id?: number
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
  }

  export type InfrastructureCreateOrConnectWithoutSchoolInput = {
    where: InfrastructureWhereUniqueInput
    create: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput>
  }

  export type InfrastructureCreateManySchoolInputEnvelope = {
    data: InfrastructureCreateManySchoolInput | InfrastructureCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type LabCreateWithoutSchoolInput = {
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
  }

  export type LabUncheckedCreateWithoutSchoolInput = {
    id?: number
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
  }

  export type LabCreateOrConnectWithoutSchoolInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput>
  }

  export type LabCreateManySchoolInputEnvelope = {
    data: LabCreateManySchoolInput | LabCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type PillarCreateWithoutSchoolInput = {
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
  }

  export type PillarUncheckedCreateWithoutSchoolInput = {
    id?: number
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
  }

  export type PillarCreateOrConnectWithoutSchoolInput = {
    where: PillarWhereUniqueInput
    create: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput>
  }

  export type PillarCreateManySchoolInputEnvelope = {
    data: PillarCreateManySchoolInput | PillarCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type InnovationCreateWithoutSchoolInput = {
    type: string
    description: string
    mediaUrl?: string | null
  }

  export type InnovationUncheckedCreateWithoutSchoolInput = {
    id?: number
    type: string
    description: string
    mediaUrl?: string | null
  }

  export type InnovationCreateOrConnectWithoutSchoolInput = {
    where: InnovationWhereUniqueInput
    create: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput>
  }

  export type InnovationCreateManySchoolInputEnvelope = {
    data: InnovationCreateManySchoolInput | InnovationCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutSchoolInput = {
    area: string
    challenge: string
    supportNeeded?: string | null
  }

  export type ChallengeUncheckedCreateWithoutSchoolInput = {
    id?: number
    area: string
    challenge: string
    supportNeeded?: string | null
  }

  export type ChallengeCreateOrConnectWithoutSchoolInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput>
  }

  export type ChallengeCreateManySchoolInputEnvelope = {
    data: ChallengeCreateManySchoolInput | ChallengeCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UserSchoolCreateWithoutSchoolInput = {
    user: UserCreateNestedOneWithoutAssignedSchoolsInput
  }

  export type UserSchoolUncheckedCreateWithoutSchoolInput = {
    id?: number
    userId: number
  }

  export type UserSchoolCreateOrConnectWithoutSchoolInput = {
    where: UserSchoolWhereUniqueInput
    create: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type UserSchoolCreateManySchoolInputEnvelope = {
    data: UserSchoolCreateManySchoolInput | UserSchoolCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutSchoolInput, EnrollmentUncheckedUpdateWithoutSchoolInput>
    create: XOR<EnrollmentCreateWithoutSchoolInput, EnrollmentUncheckedCreateWithoutSchoolInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutSchoolInput, EnrollmentUncheckedUpdateWithoutSchoolInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutSchoolInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    schoolId?: IntFilter<"Enrollment"> | number
    class?: StringFilter<"Enrollment"> | string
    boys?: IntNullableFilter<"Enrollment"> | number | null
    girls?: IntNullableFilter<"Enrollment"> | number | null
    total?: IntNullableFilter<"Enrollment"> | number | null
    cwsn?: IntNullableFilter<"Enrollment"> | number | null
    remarks?: StringNullableFilter<"Enrollment"> | string | null
  }

  export type TeacherUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutSchoolInput, TeacherUncheckedUpdateWithoutSchoolInput>
    create: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutSchoolInput, TeacherUncheckedUpdateWithoutSchoolInput>
  }

  export type TeacherUpdateManyWithWhereWithoutSchoolInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutSchoolInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: IntFilter<"Teacher"> | number
    schoolId?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    gender?: StringNullableFilter<"Teacher"> | string | null
    mobile?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    section?: StringNullableFilter<"Teacher"> | string | null
    classes?: StringNullableFilter<"Teacher"> | string | null
    subjects?: StringNullableFilter<"Teacher"> | string | null
    iecTraining?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
  }

  export type InfrastructureUpsertWithWhereUniqueWithoutSchoolInput = {
    where: InfrastructureWhereUniqueInput
    update: XOR<InfrastructureUpdateWithoutSchoolInput, InfrastructureUncheckedUpdateWithoutSchoolInput>
    create: XOR<InfrastructureCreateWithoutSchoolInput, InfrastructureUncheckedCreateWithoutSchoolInput>
  }

  export type InfrastructureUpdateWithWhereUniqueWithoutSchoolInput = {
    where: InfrastructureWhereUniqueInput
    data: XOR<InfrastructureUpdateWithoutSchoolInput, InfrastructureUncheckedUpdateWithoutSchoolInput>
  }

  export type InfrastructureUpdateManyWithWhereWithoutSchoolInput = {
    where: InfrastructureScalarWhereInput
    data: XOR<InfrastructureUpdateManyMutationInput, InfrastructureUncheckedUpdateManyWithoutSchoolInput>
  }

  export type InfrastructureScalarWhereInput = {
    AND?: InfrastructureScalarWhereInput | InfrastructureScalarWhereInput[]
    OR?: InfrastructureScalarWhereInput[]
    NOT?: InfrastructureScalarWhereInput | InfrastructureScalarWhereInput[]
    id?: IntFilter<"Infrastructure"> | number
    schoolId?: IntFilter<"Infrastructure"> | number
    facility?: StringFilter<"Infrastructure"> | string
    quantity?: IntNullableFilter<"Infrastructure"> | number | null
    status?: StringNullableFilter<"Infrastructure"> | string | null
    remarks?: StringNullableFilter<"Infrastructure"> | string | null
  }

  export type LabUpsertWithWhereUniqueWithoutSchoolInput = {
    where: LabWhereUniqueInput
    update: XOR<LabUpdateWithoutSchoolInput, LabUncheckedUpdateWithoutSchoolInput>
    create: XOR<LabCreateWithoutSchoolInput, LabUncheckedCreateWithoutSchoolInput>
  }

  export type LabUpdateWithWhereUniqueWithoutSchoolInput = {
    where: LabWhereUniqueInput
    data: XOR<LabUpdateWithoutSchoolInput, LabUncheckedUpdateWithoutSchoolInput>
  }

  export type LabUpdateManyWithWhereWithoutSchoolInput = {
    where: LabScalarWhereInput
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyWithoutSchoolInput>
  }

  export type LabScalarWhereInput = {
    AND?: LabScalarWhereInput | LabScalarWhereInput[]
    OR?: LabScalarWhereInput[]
    NOT?: LabScalarWhereInput | LabScalarWhereInput[]
    id?: IntFilter<"Lab"> | number
    schoolId?: IntFilter<"Lab"> | number
    type?: StringFilter<"Lab"> | string
    available?: BoolFilter<"Lab"> | boolean
    equipment?: StringNullableFilter<"Lab"> | string | null
    remarks?: StringNullableFilter<"Lab"> | string | null
  }

  export type PillarUpsertWithWhereUniqueWithoutSchoolInput = {
    where: PillarWhereUniqueInput
    update: XOR<PillarUpdateWithoutSchoolInput, PillarUncheckedUpdateWithoutSchoolInput>
    create: XOR<PillarCreateWithoutSchoolInput, PillarUncheckedCreateWithoutSchoolInput>
  }

  export type PillarUpdateWithWhereUniqueWithoutSchoolInput = {
    where: PillarWhereUniqueInput
    data: XOR<PillarUpdateWithoutSchoolInput, PillarUncheckedUpdateWithoutSchoolInput>
  }

  export type PillarUpdateManyWithWhereWithoutSchoolInput = {
    where: PillarScalarWhereInput
    data: XOR<PillarUpdateManyMutationInput, PillarUncheckedUpdateManyWithoutSchoolInput>
  }

  export type PillarScalarWhereInput = {
    AND?: PillarScalarWhereInput | PillarScalarWhereInput[]
    OR?: PillarScalarWhereInput[]
    NOT?: PillarScalarWhereInput | PillarScalarWhereInput[]
    id?: IntFilter<"Pillar"> | number
    schoolId?: IntFilter<"Pillar"> | number
    number?: IntFilter<"Pillar"> | number
    title?: StringFilter<"Pillar"> | string
    subAspect?: StringFilter<"Pillar"> | string
    observations?: StringNullableFilter<"Pillar"> | string | null
    remarks?: StringNullableFilter<"Pillar"> | string | null
  }

  export type InnovationUpsertWithWhereUniqueWithoutSchoolInput = {
    where: InnovationWhereUniqueInput
    update: XOR<InnovationUpdateWithoutSchoolInput, InnovationUncheckedUpdateWithoutSchoolInput>
    create: XOR<InnovationCreateWithoutSchoolInput, InnovationUncheckedCreateWithoutSchoolInput>
  }

  export type InnovationUpdateWithWhereUniqueWithoutSchoolInput = {
    where: InnovationWhereUniqueInput
    data: XOR<InnovationUpdateWithoutSchoolInput, InnovationUncheckedUpdateWithoutSchoolInput>
  }

  export type InnovationUpdateManyWithWhereWithoutSchoolInput = {
    where: InnovationScalarWhereInput
    data: XOR<InnovationUpdateManyMutationInput, InnovationUncheckedUpdateManyWithoutSchoolInput>
  }

  export type InnovationScalarWhereInput = {
    AND?: InnovationScalarWhereInput | InnovationScalarWhereInput[]
    OR?: InnovationScalarWhereInput[]
    NOT?: InnovationScalarWhereInput | InnovationScalarWhereInput[]
    id?: IntFilter<"Innovation"> | number
    schoolId?: IntFilter<"Innovation"> | number
    type?: StringFilter<"Innovation"> | string
    description?: StringFilter<"Innovation"> | string
    mediaUrl?: StringNullableFilter<"Innovation"> | string | null
  }

  export type ChallengeUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutSchoolInput, ChallengeUncheckedUpdateWithoutSchoolInput>
    create: XOR<ChallengeCreateWithoutSchoolInput, ChallengeUncheckedCreateWithoutSchoolInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutSchoolInput, ChallengeUncheckedUpdateWithoutSchoolInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutSchoolInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: IntFilter<"Challenge"> | number
    schoolId?: IntFilter<"Challenge"> | number
    area?: StringFilter<"Challenge"> | string
    challenge?: StringFilter<"Challenge"> | string
    supportNeeded?: StringNullableFilter<"Challenge"> | string | null
  }

  export type UserSchoolUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UserSchoolWhereUniqueInput
    update: XOR<UserSchoolUpdateWithoutSchoolInput, UserSchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserSchoolCreateWithoutSchoolInput, UserSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type UserSchoolUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UserSchoolWhereUniqueInput
    data: XOR<UserSchoolUpdateWithoutSchoolInput, UserSchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type UserSchoolUpdateManyWithWhereWithoutSchoolInput = {
    where: UserSchoolScalarWhereInput
    data: XOR<UserSchoolUpdateManyMutationInput, UserSchoolUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolCreateWithoutEnrollmentsInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutEnrollmentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutEnrollmentsInput, SchoolUncheckedCreateWithoutEnrollmentsInput>
  }

  export type SchoolUpsertWithoutEnrollmentsInput = {
    update: XOR<SchoolUpdateWithoutEnrollmentsInput, SchoolUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<SchoolCreateWithoutEnrollmentsInput, SchoolUncheckedCreateWithoutEnrollmentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutEnrollmentsInput, SchoolUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SchoolUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutTeachersInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTeachersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
  }

  export type SchoolUpsertWithoutTeachersInput = {
    update: XOR<SchoolUpdateWithoutTeachersInput, SchoolUncheckedUpdateWithoutTeachersInput>
    create: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTeachersInput, SchoolUncheckedUpdateWithoutTeachersInput>
  }

  export type SchoolUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutInfrastructuresInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutInfrastructuresInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutInfrastructuresInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutInfrastructuresInput, SchoolUncheckedCreateWithoutInfrastructuresInput>
  }

  export type SchoolUpsertWithoutInfrastructuresInput = {
    update: XOR<SchoolUpdateWithoutInfrastructuresInput, SchoolUncheckedUpdateWithoutInfrastructuresInput>
    create: XOR<SchoolCreateWithoutInfrastructuresInput, SchoolUncheckedCreateWithoutInfrastructuresInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutInfrastructuresInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutInfrastructuresInput, SchoolUncheckedUpdateWithoutInfrastructuresInput>
  }

  export type SchoolUpdateWithoutInfrastructuresInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutInfrastructuresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutLabsInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutLabsInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutLabsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutLabsInput, SchoolUncheckedCreateWithoutLabsInput>
  }

  export type SchoolUpsertWithoutLabsInput = {
    update: XOR<SchoolUpdateWithoutLabsInput, SchoolUncheckedUpdateWithoutLabsInput>
    create: XOR<SchoolCreateWithoutLabsInput, SchoolUncheckedCreateWithoutLabsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutLabsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutLabsInput, SchoolUncheckedUpdateWithoutLabsInput>
  }

  export type SchoolUpdateWithoutLabsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutLabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutPillarsInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutPillarsInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutPillarsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutPillarsInput, SchoolUncheckedCreateWithoutPillarsInput>
  }

  export type SchoolUpsertWithoutPillarsInput = {
    update: XOR<SchoolUpdateWithoutPillarsInput, SchoolUncheckedUpdateWithoutPillarsInput>
    create: XOR<SchoolCreateWithoutPillarsInput, SchoolUncheckedCreateWithoutPillarsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutPillarsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutPillarsInput, SchoolUncheckedUpdateWithoutPillarsInput>
  }

  export type SchoolUpdateWithoutPillarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutPillarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutInnovationsInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutInnovationsInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutInnovationsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutInnovationsInput, SchoolUncheckedCreateWithoutInnovationsInput>
  }

  export type SchoolUpsertWithoutInnovationsInput = {
    update: XOR<SchoolUpdateWithoutInnovationsInput, SchoolUncheckedUpdateWithoutInnovationsInput>
    create: XOR<SchoolCreateWithoutInnovationsInput, SchoolUncheckedCreateWithoutInnovationsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutInnovationsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutInnovationsInput, SchoolUncheckedUpdateWithoutInnovationsInput>
  }

  export type SchoolUpdateWithoutInnovationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutInnovationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutChallengesInput = {
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureCreateNestedManyWithoutSchoolInput
    labs?: LabCreateNestedManyWithoutSchoolInput
    pillars?: PillarCreateNestedManyWithoutSchoolInput
    innovations?: InnovationCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutChallengesInput = {
    id?: number
    name: string
    status?: string
    established?: number | null
    upgradedYear?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    village?: string | null
    management?: string | null
    type?: string | null
    medium?: string | null
    inclusive?: boolean | null
    vocationalTrades?: SchoolCreatevocationalTradesInput | string[]
    coed?: boolean | null
    totalArea?: string | null
    principal?: string | null
    principalSince?: string | null
    principalQualification?: string | null
    principalProfessionalQualification?: string | null
    principalJoiningDate?: string | null
    principalExperience?: string | null
    principalContact?: string | null
    principalEmail?: string | null
    midDayMeal?: string | null
    drinkingWater?: string | null
    electricity?: string | null
    internet?: string | null
    fireSafety?: string | null
    teacherPhotosDisplayed?: boolean | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    infrastructures?: InfrastructureUncheckedCreateNestedManyWithoutSchoolInput
    labs?: LabUncheckedCreateNestedManyWithoutSchoolInput
    pillars?: PillarUncheckedCreateNestedManyWithoutSchoolInput
    innovations?: InnovationUncheckedCreateNestedManyWithoutSchoolInput
    assignedUsers?: UserSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutChallengesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutChallengesInput, SchoolUncheckedCreateWithoutChallengesInput>
  }

  export type SchoolUpsertWithoutChallengesInput = {
    update: XOR<SchoolUpdateWithoutChallengesInput, SchoolUncheckedUpdateWithoutChallengesInput>
    create: XOR<SchoolCreateWithoutChallengesInput, SchoolUncheckedCreateWithoutChallengesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutChallengesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutChallengesInput, SchoolUncheckedUpdateWithoutChallengesInput>
  }

  export type SchoolUpdateWithoutChallengesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUpdateManyWithoutSchoolNestedInput
    labs?: LabUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    established?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedYear?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: NullableStringFieldUpdateOperationsInput | string | null
    inclusive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vocationalTrades?: SchoolUpdatevocationalTradesInput | string[]
    coed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    principalSince?: NullableStringFieldUpdateOperationsInput | string | null
    principalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalProfessionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    principalJoiningDate?: NullableStringFieldUpdateOperationsInput | string | null
    principalExperience?: NullableStringFieldUpdateOperationsInput | string | null
    principalContact?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    midDayMeal?: NullableStringFieldUpdateOperationsInput | string | null
    drinkingWater?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    internet?: NullableStringFieldUpdateOperationsInput | string | null
    fireSafety?: NullableStringFieldUpdateOperationsInput | string | null
    teacherPhotosDisplayed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    infrastructures?: InfrastructureUncheckedUpdateManyWithoutSchoolNestedInput
    labs?: LabUncheckedUpdateManyWithoutSchoolNestedInput
    pillars?: PillarUncheckedUpdateManyWithoutSchoolNestedInput
    innovations?: InnovationUncheckedUpdateManyWithoutSchoolNestedInput
    assignedUsers?: UserSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    joinDate?: Date | string
    lastActive?: Date | string | null
    isDisabled?: boolean
    isVerified?: boolean
    address?: string | null
    bio?: string | null
    district?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    assignedSchools?: UserSchoolUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    assignedSchools?: UserSchoolUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    assignedSchools?: UserSchoolUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserSchoolCreateManyUserInput = {
    id?: number
    schoolId: number
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    replacedByToken?: string | null
  }

  export type PermissionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSchoolUpdateWithoutUserInput = {
    school?: SchoolUpdateOneRequiredWithoutAssignedUsersNestedInput
  }

  export type UserSchoolUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSchoolUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentCreateManySchoolInput = {
    id?: number
    class: string
    boys?: number | null
    girls?: number | null
    total?: number | null
    cwsn?: number | null
    remarks?: string | null
  }

  export type TeacherCreateManySchoolInput = {
    id?: number
    name: string
    gender?: string | null
    mobile?: string | null
    qualification?: string | null
    section?: string | null
    classes?: string | null
    subjects?: string | null
    iecTraining?: string | null
    experience?: string | null
  }

  export type InfrastructureCreateManySchoolInput = {
    id?: number
    facility: string
    quantity?: number | null
    status?: string | null
    remarks?: string | null
  }

  export type LabCreateManySchoolInput = {
    id?: number
    type: string
    available?: boolean
    equipment?: string | null
    remarks?: string | null
  }

  export type PillarCreateManySchoolInput = {
    id?: number
    number: number
    title: string
    subAspect: string
    observations?: string | null
    remarks?: string | null
  }

  export type InnovationCreateManySchoolInput = {
    id?: number
    type: string
    description: string
    mediaUrl?: string | null
  }

  export type ChallengeCreateManySchoolInput = {
    id?: number
    area: string
    challenge: string
    supportNeeded?: string | null
  }

  export type UserSchoolCreateManySchoolInput = {
    id?: number
    userId: number
  }

  export type EnrollmentUpdateWithoutSchoolInput = {
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: StringFieldUpdateOperationsInput | string
    boys?: NullableIntFieldUpdateOperationsInput | number | null
    girls?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    cwsn?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: NullableStringFieldUpdateOperationsInput | string | null
    iecTraining?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureUpdateWithoutSchoolInput = {
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfrastructureUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUpdateWithoutSchoolInput = {
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarUpdateWithoutSchoolInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PillarUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subAspect?: StringFieldUpdateOperationsInput | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationUpdateWithoutSchoolInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InnovationUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeUpdateWithoutSchoolInput = {
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    supportNeeded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSchoolUpdateWithoutSchoolInput = {
    user?: UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput
  }

  export type UserSchoolUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSchoolUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}