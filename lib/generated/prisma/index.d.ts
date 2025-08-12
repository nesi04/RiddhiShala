
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model HeadOfSchool
 * 
 */
export type HeadOfSchool = $Result.DefaultSelection<Prisma.$HeadOfSchoolPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model DataEntryOperator
 * 
 */
export type DataEntryOperator = $Result.DefaultSelection<Prisma.$DataEntryOperatorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headOfSchool`: Exposes CRUD operations for the **HeadOfSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeadOfSchools
    * const headOfSchools = await prisma.headOfSchool.findMany()
    * ```
    */
  get headOfSchool(): Prisma.HeadOfSchoolDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataEntryOperator`: Exposes CRUD operations for the **DataEntryOperator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataEntryOperators
    * const dataEntryOperators = await prisma.dataEntryOperator.findMany()
    * ```
    */
  get dataEntryOperator(): Prisma.DataEntryOperatorDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    School: 'School',
    HeadOfSchool: 'HeadOfSchool',
    Teacher: 'Teacher',
    Student: 'Student',
    DataEntryOperator: 'DataEntryOperator'
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
      modelProps: "user" | "role" | "permission" | "school" | "headOfSchool" | "teacher" | "student" | "dataEntryOperator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      HeadOfSchool: {
        payload: Prisma.$HeadOfSchoolPayload<ExtArgs>
        fields: Prisma.HeadOfSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadOfSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadOfSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          findFirst: {
            args: Prisma.HeadOfSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadOfSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          findMany: {
            args: Prisma.HeadOfSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>[]
          }
          create: {
            args: Prisma.HeadOfSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          createMany: {
            args: Prisma.HeadOfSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadOfSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>[]
          }
          delete: {
            args: Prisma.HeadOfSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          update: {
            args: Prisma.HeadOfSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          deleteMany: {
            args: Prisma.HeadOfSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadOfSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadOfSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>[]
          }
          upsert: {
            args: Prisma.HeadOfSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadOfSchoolPayload>
          }
          aggregate: {
            args: Prisma.HeadOfSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadOfSchool>
          }
          groupBy: {
            args: Prisma.HeadOfSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadOfSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadOfSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<HeadOfSchoolCountAggregateOutputType> | number
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      DataEntryOperator: {
        payload: Prisma.$DataEntryOperatorPayload<ExtArgs>
        fields: Prisma.DataEntryOperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataEntryOperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataEntryOperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          findFirst: {
            args: Prisma.DataEntryOperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataEntryOperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          findMany: {
            args: Prisma.DataEntryOperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>[]
          }
          create: {
            args: Prisma.DataEntryOperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          createMany: {
            args: Prisma.DataEntryOperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataEntryOperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>[]
          }
          delete: {
            args: Prisma.DataEntryOperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          update: {
            args: Prisma.DataEntryOperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          deleteMany: {
            args: Prisma.DataEntryOperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataEntryOperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataEntryOperatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>[]
          }
          upsert: {
            args: Prisma.DataEntryOperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryOperatorPayload>
          }
          aggregate: {
            args: Prisma.DataEntryOperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataEntryOperator>
          }
          groupBy: {
            args: Prisma.DataEntryOperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataEntryOperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataEntryOperatorCountArgs<ExtArgs>
            result: $Utils.Optional<DataEntryOperatorCountAggregateOutputType> | number
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
    user?: UserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    school?: SchoolOmit
    headOfSchool?: HeadOfSchoolOmit
    teacher?: TeacherOmit
    student?: StudentOmit
    dataEntryOperator?: DataEntryOperatorOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    permissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    users: number
    teachers: number
    students: number
    dataEntryOperators: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SchoolCountOutputTypeCountUsersArgs
    teachers?: boolean | SchoolCountOutputTypeCountTeachersArgs
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs
    dataEntryOperators?: boolean | SchoolCountOutputTypeCountDataEntryOperatorsArgs
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
  export type SchoolCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
  export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountDataEntryOperatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataEntryOperatorWhereInput
  }


  /**
   * Models
   */

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
    schoolId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    schoolId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    roleId: number | null
    joinDate: Date | null
    resetPassword: boolean | null
    isDisabled: boolean | null
    schoolId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    roleId: number | null
    joinDate: Date | null
    resetPassword: boolean | null
    isDisabled: boolean | null
    schoolId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    email: number
    roleId: number
    joinDate: number
    resetPassword: number
    isDisabled: number
    schoolId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
    schoolId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
    schoolId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    roleId?: true
    joinDate?: true
    resetPassword?: true
    isDisabled?: true
    schoolId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    roleId?: true
    joinDate?: true
    resetPassword?: true
    isDisabled?: true
    schoolId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    roleId?: true
    joinDate?: true
    resetPassword?: true
    isDisabled?: true
    schoolId?: true
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
    phoneNumber: string
    email: string
    roleId: number
    joinDate: Date
    resetPassword: boolean
    isDisabled: boolean
    schoolId: number | null
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
    phoneNumber?: boolean
    email?: boolean
    roleId?: boolean
    joinDate?: boolean
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    roleId?: boolean
    joinDate?: boolean
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    roleId?: boolean
    joinDate?: boolean
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    roleId?: boolean
    joinDate?: boolean
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "email" | "roleId" | "joinDate" | "resetPassword" | "isDisabled" | "schoolId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    school?: boolean | User$schoolArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      school: Prisma.$SchoolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      email: string
      roleId: number
      joinDate: Date
      resetPassword: boolean
      isDisabled: boolean
      schoolId: number | null
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
    school<T extends User$schoolArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly joinDate: FieldRef<"User", 'DateTime'>
    readonly resetPassword: FieldRef<"User", 'Boolean'>
    readonly isDisabled: FieldRef<"User", 'Boolean'>
    readonly schoolId: FieldRef<"User", 'Int'>
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
   * User.school
   */
  export type User$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: SchoolWhereInput
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
    yearOfEstablishment: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
    yearOfEstablishment: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    yearOfEstablishment: number | null
    upgradedTo: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    villageTown: string | null
    management: string | null
    schoolType: string | null
    mediumOfInstruction: string | null
    inclusiveSchool: boolean | null
    facilitiesForCWSN: string | null
    vocationalTrades: string | null
    availableCourses: string | null
    coEducation: string | null
    campusType: string | null
    totalArea: string | null
    campusSize: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    yearOfEstablishment: number | null
    upgradedTo: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    villageTown: string | null
    management: string | null
    schoolType: string | null
    mediumOfInstruction: string | null
    inclusiveSchool: boolean | null
    facilitiesForCWSN: string | null
    vocationalTrades: string | null
    availableCourses: string | null
    coEducation: string | null
    campusType: string | null
    totalArea: string | null
    campusSize: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    yearOfEstablishment: number
    upgradedTo: number
    udiseCode: number
    district: number
    block: number
    cluster: number
    villageTown: number
    management: number
    schoolType: number
    mediumOfInstruction: number
    inclusiveSchool: number
    facilitiesForCWSN: number
    vocationalTrades: number
    availableCourses: number
    coEducation: number
    campusType: number
    totalArea: number
    campusSize: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
    yearOfEstablishment?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
    yearOfEstablishment?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    yearOfEstablishment?: true
    upgradedTo?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    villageTown?: true
    management?: true
    schoolType?: true
    mediumOfInstruction?: true
    inclusiveSchool?: true
    facilitiesForCWSN?: true
    vocationalTrades?: true
    availableCourses?: true
    coEducation?: true
    campusType?: true
    totalArea?: true
    campusSize?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    yearOfEstablishment?: true
    upgradedTo?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    villageTown?: true
    management?: true
    schoolType?: true
    mediumOfInstruction?: true
    inclusiveSchool?: true
    facilitiesForCWSN?: true
    vocationalTrades?: true
    availableCourses?: true
    coEducation?: true
    campusType?: true
    totalArea?: true
    campusSize?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    yearOfEstablishment?: true
    upgradedTo?: true
    udiseCode?: true
    district?: true
    block?: true
    cluster?: true
    villageTown?: true
    management?: true
    schoolType?: true
    mediumOfInstruction?: true
    inclusiveSchool?: true
    facilitiesForCWSN?: true
    vocationalTrades?: true
    availableCourses?: true
    coEducation?: true
    campusType?: true
    totalArea?: true
    campusSize?: true
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
    yearOfEstablishment: number | null
    upgradedTo: string | null
    udiseCode: string | null
    district: string | null
    block: string | null
    cluster: string | null
    villageTown: string | null
    management: string | null
    schoolType: string | null
    mediumOfInstruction: string | null
    inclusiveSchool: boolean
    facilitiesForCWSN: string | null
    vocationalTrades: string | null
    availableCourses: string | null
    coEducation: string | null
    campusType: string | null
    totalArea: string | null
    campusSize: string | null
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
    yearOfEstablishment?: boolean
    upgradedTo?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    villageTown?: boolean
    management?: boolean
    schoolType?: boolean
    mediumOfInstruction?: boolean
    inclusiveSchool?: boolean
    facilitiesForCWSN?: boolean
    vocationalTrades?: boolean
    availableCourses?: boolean
    coEducation?: boolean
    campusType?: boolean
    totalArea?: boolean
    campusSize?: boolean
    users?: boolean | School$usersArgs<ExtArgs>
    headOfSchool?: boolean | School$headOfSchoolArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    students?: boolean | School$studentsArgs<ExtArgs>
    dataEntryOperators?: boolean | School$dataEntryOperatorsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    yearOfEstablishment?: boolean
    upgradedTo?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    villageTown?: boolean
    management?: boolean
    schoolType?: boolean
    mediumOfInstruction?: boolean
    inclusiveSchool?: boolean
    facilitiesForCWSN?: boolean
    vocationalTrades?: boolean
    availableCourses?: boolean
    coEducation?: boolean
    campusType?: boolean
    totalArea?: boolean
    campusSize?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    yearOfEstablishment?: boolean
    upgradedTo?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    villageTown?: boolean
    management?: boolean
    schoolType?: boolean
    mediumOfInstruction?: boolean
    inclusiveSchool?: boolean
    facilitiesForCWSN?: boolean
    vocationalTrades?: boolean
    availableCourses?: boolean
    coEducation?: boolean
    campusType?: boolean
    totalArea?: boolean
    campusSize?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    yearOfEstablishment?: boolean
    upgradedTo?: boolean
    udiseCode?: boolean
    district?: boolean
    block?: boolean
    cluster?: boolean
    villageTown?: boolean
    management?: boolean
    schoolType?: boolean
    mediumOfInstruction?: boolean
    inclusiveSchool?: boolean
    facilitiesForCWSN?: boolean
    vocationalTrades?: boolean
    availableCourses?: boolean
    coEducation?: boolean
    campusType?: boolean
    totalArea?: boolean
    campusSize?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "yearOfEstablishment" | "upgradedTo" | "udiseCode" | "district" | "block" | "cluster" | "villageTown" | "management" | "schoolType" | "mediumOfInstruction" | "inclusiveSchool" | "facilitiesForCWSN" | "vocationalTrades" | "availableCourses" | "coEducation" | "campusType" | "totalArea" | "campusSize", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | School$usersArgs<ExtArgs>
    headOfSchool?: boolean | School$headOfSchoolArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    students?: boolean | School$studentsArgs<ExtArgs>
    dataEntryOperators?: boolean | School$dataEntryOperatorsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      headOfSchool: Prisma.$HeadOfSchoolPayload<ExtArgs> | null
      teachers: Prisma.$TeacherPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      dataEntryOperators: Prisma.$DataEntryOperatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      yearOfEstablishment: number | null
      upgradedTo: string | null
      udiseCode: string | null
      district: string | null
      block: string | null
      cluster: string | null
      villageTown: string | null
      management: string | null
      schoolType: string | null
      mediumOfInstruction: string | null
      inclusiveSchool: boolean
      facilitiesForCWSN: string | null
      vocationalTrades: string | null
      availableCourses: string | null
      coEducation: string | null
      campusType: string | null
      totalArea: string | null
      campusSize: string | null
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
    users<T extends School$usersArgs<ExtArgs> = {}>(args?: Subset<T, School$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    headOfSchool<T extends School$headOfSchoolArgs<ExtArgs> = {}>(args?: Subset<T, School$headOfSchoolArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teachers<T extends School$teachersArgs<ExtArgs> = {}>(args?: Subset<T, School$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends School$studentsArgs<ExtArgs> = {}>(args?: Subset<T, School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dataEntryOperators<T extends School$dataEntryOperatorsArgs<ExtArgs> = {}>(args?: Subset<T, School$dataEntryOperatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly yearOfEstablishment: FieldRef<"School", 'Int'>
    readonly upgradedTo: FieldRef<"School", 'String'>
    readonly udiseCode: FieldRef<"School", 'String'>
    readonly district: FieldRef<"School", 'String'>
    readonly block: FieldRef<"School", 'String'>
    readonly cluster: FieldRef<"School", 'String'>
    readonly villageTown: FieldRef<"School", 'String'>
    readonly management: FieldRef<"School", 'String'>
    readonly schoolType: FieldRef<"School", 'String'>
    readonly mediumOfInstruction: FieldRef<"School", 'String'>
    readonly inclusiveSchool: FieldRef<"School", 'Boolean'>
    readonly facilitiesForCWSN: FieldRef<"School", 'String'>
    readonly vocationalTrades: FieldRef<"School", 'String'>
    readonly availableCourses: FieldRef<"School", 'String'>
    readonly coEducation: FieldRef<"School", 'String'>
    readonly campusType: FieldRef<"School", 'String'>
    readonly totalArea: FieldRef<"School", 'String'>
    readonly campusSize: FieldRef<"School", 'String'>
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
   * School.users
   */
  export type School$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * School.headOfSchool
   */
  export type School$headOfSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    where?: HeadOfSchoolWhereInput
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
   * School.students
   */
  export type School$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * School.dataEntryOperators
   */
  export type School$dataEntryOperatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    where?: DataEntryOperatorWhereInput
    orderBy?: DataEntryOperatorOrderByWithRelationInput | DataEntryOperatorOrderByWithRelationInput[]
    cursor?: DataEntryOperatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataEntryOperatorScalarFieldEnum | DataEntryOperatorScalarFieldEnum[]
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
   * Model HeadOfSchool
   */

  export type AggregateHeadOfSchool = {
    _count: HeadOfSchoolCountAggregateOutputType | null
    _avg: HeadOfSchoolAvgAggregateOutputType | null
    _sum: HeadOfSchoolSumAggregateOutputType | null
    _min: HeadOfSchoolMinAggregateOutputType | null
    _max: HeadOfSchoolMaxAggregateOutputType | null
  }

  export type HeadOfSchoolAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type HeadOfSchoolSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type HeadOfSchoolMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    designation: string | null
    holdingChargeSince: string | null
    academicQualification: string | null
    professionalQualification: string | null
    dateOfJoining: Date | null
    teachingExperience: string | null
    contactNumber: string | null
    email: string | null
  }

  export type HeadOfSchoolMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    designation: string | null
    holdingChargeSince: string | null
    academicQualification: string | null
    professionalQualification: string | null
    dateOfJoining: Date | null
    teachingExperience: string | null
    contactNumber: string | null
    email: string | null
  }

  export type HeadOfSchoolCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    designation: number
    holdingChargeSince: number
    academicQualification: number
    professionalQualification: number
    dateOfJoining: number
    teachingExperience: number
    contactNumber: number
    email: number
    _all: number
  }


  export type HeadOfSchoolAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type HeadOfSchoolSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type HeadOfSchoolMinAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    designation?: true
    holdingChargeSince?: true
    academicQualification?: true
    professionalQualification?: true
    dateOfJoining?: true
    teachingExperience?: true
    contactNumber?: true
    email?: true
  }

  export type HeadOfSchoolMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    designation?: true
    holdingChargeSince?: true
    academicQualification?: true
    professionalQualification?: true
    dateOfJoining?: true
    teachingExperience?: true
    contactNumber?: true
    email?: true
  }

  export type HeadOfSchoolCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    designation?: true
    holdingChargeSince?: true
    academicQualification?: true
    professionalQualification?: true
    dateOfJoining?: true
    teachingExperience?: true
    contactNumber?: true
    email?: true
    _all?: true
  }

  export type HeadOfSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadOfSchool to aggregate.
     */
    where?: HeadOfSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadOfSchools to fetch.
     */
    orderBy?: HeadOfSchoolOrderByWithRelationInput | HeadOfSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadOfSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadOfSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadOfSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeadOfSchools
    **/
    _count?: true | HeadOfSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadOfSchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadOfSchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadOfSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadOfSchoolMaxAggregateInputType
  }

  export type GetHeadOfSchoolAggregateType<T extends HeadOfSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadOfSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadOfSchool[P]>
      : GetScalarType<T[P], AggregateHeadOfSchool[P]>
  }




  export type HeadOfSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadOfSchoolWhereInput
    orderBy?: HeadOfSchoolOrderByWithAggregationInput | HeadOfSchoolOrderByWithAggregationInput[]
    by: HeadOfSchoolScalarFieldEnum[] | HeadOfSchoolScalarFieldEnum
    having?: HeadOfSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadOfSchoolCountAggregateInputType | true
    _avg?: HeadOfSchoolAvgAggregateInputType
    _sum?: HeadOfSchoolSumAggregateInputType
    _min?: HeadOfSchoolMinAggregateInputType
    _max?: HeadOfSchoolMaxAggregateInputType
  }

  export type HeadOfSchoolGroupByOutputType = {
    id: number
    schoolId: number
    name: string
    designation: string | null
    holdingChargeSince: string | null
    academicQualification: string | null
    professionalQualification: string | null
    dateOfJoining: Date | null
    teachingExperience: string | null
    contactNumber: string | null
    email: string | null
    _count: HeadOfSchoolCountAggregateOutputType | null
    _avg: HeadOfSchoolAvgAggregateOutputType | null
    _sum: HeadOfSchoolSumAggregateOutputType | null
    _min: HeadOfSchoolMinAggregateOutputType | null
    _max: HeadOfSchoolMaxAggregateOutputType | null
  }

  type GetHeadOfSchoolGroupByPayload<T extends HeadOfSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadOfSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadOfSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadOfSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], HeadOfSchoolGroupByOutputType[P]>
        }
      >
    >


  export type HeadOfSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    designation?: boolean
    holdingChargeSince?: boolean
    academicQualification?: boolean
    professionalQualification?: boolean
    dateOfJoining?: boolean
    teachingExperience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headOfSchool"]>

  export type HeadOfSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    designation?: boolean
    holdingChargeSince?: boolean
    academicQualification?: boolean
    professionalQualification?: boolean
    dateOfJoining?: boolean
    teachingExperience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headOfSchool"]>

  export type HeadOfSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    designation?: boolean
    holdingChargeSince?: boolean
    academicQualification?: boolean
    professionalQualification?: boolean
    dateOfJoining?: boolean
    teachingExperience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headOfSchool"]>

  export type HeadOfSchoolSelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    designation?: boolean
    holdingChargeSince?: boolean
    academicQualification?: boolean
    professionalQualification?: boolean
    dateOfJoining?: boolean
    teachingExperience?: boolean
    contactNumber?: boolean
    email?: boolean
  }

  export type HeadOfSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "name" | "designation" | "holdingChargeSince" | "academicQualification" | "professionalQualification" | "dateOfJoining" | "teachingExperience" | "contactNumber" | "email", ExtArgs["result"]["headOfSchool"]>
  export type HeadOfSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type HeadOfSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type HeadOfSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $HeadOfSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeadOfSchool"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      name: string
      designation: string | null
      holdingChargeSince: string | null
      academicQualification: string | null
      professionalQualification: string | null
      dateOfJoining: Date | null
      teachingExperience: string | null
      contactNumber: string | null
      email: string | null
    }, ExtArgs["result"]["headOfSchool"]>
    composites: {}
  }

  type HeadOfSchoolGetPayload<S extends boolean | null | undefined | HeadOfSchoolDefaultArgs> = $Result.GetResult<Prisma.$HeadOfSchoolPayload, S>

  type HeadOfSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadOfSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadOfSchoolCountAggregateInputType | true
    }

  export interface HeadOfSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeadOfSchool'], meta: { name: 'HeadOfSchool' } }
    /**
     * Find zero or one HeadOfSchool that matches the filter.
     * @param {HeadOfSchoolFindUniqueArgs} args - Arguments to find a HeadOfSchool
     * @example
     * // Get one HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadOfSchoolFindUniqueArgs>(args: SelectSubset<T, HeadOfSchoolFindUniqueArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeadOfSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadOfSchoolFindUniqueOrThrowArgs} args - Arguments to find a HeadOfSchool
     * @example
     * // Get one HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadOfSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadOfSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadOfSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolFindFirstArgs} args - Arguments to find a HeadOfSchool
     * @example
     * // Get one HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadOfSchoolFindFirstArgs>(args?: SelectSubset<T, HeadOfSchoolFindFirstArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadOfSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolFindFirstOrThrowArgs} args - Arguments to find a HeadOfSchool
     * @example
     * // Get one HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadOfSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadOfSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeadOfSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeadOfSchools
     * const headOfSchools = await prisma.headOfSchool.findMany()
     * 
     * // Get first 10 HeadOfSchools
     * const headOfSchools = await prisma.headOfSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headOfSchoolWithIdOnly = await prisma.headOfSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadOfSchoolFindManyArgs>(args?: SelectSubset<T, HeadOfSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeadOfSchool.
     * @param {HeadOfSchoolCreateArgs} args - Arguments to create a HeadOfSchool.
     * @example
     * // Create one HeadOfSchool
     * const HeadOfSchool = await prisma.headOfSchool.create({
     *   data: {
     *     // ... data to create a HeadOfSchool
     *   }
     * })
     * 
     */
    create<T extends HeadOfSchoolCreateArgs>(args: SelectSubset<T, HeadOfSchoolCreateArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeadOfSchools.
     * @param {HeadOfSchoolCreateManyArgs} args - Arguments to create many HeadOfSchools.
     * @example
     * // Create many HeadOfSchools
     * const headOfSchool = await prisma.headOfSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadOfSchoolCreateManyArgs>(args?: SelectSubset<T, HeadOfSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeadOfSchools and returns the data saved in the database.
     * @param {HeadOfSchoolCreateManyAndReturnArgs} args - Arguments to create many HeadOfSchools.
     * @example
     * // Create many HeadOfSchools
     * const headOfSchool = await prisma.headOfSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeadOfSchools and only return the `id`
     * const headOfSchoolWithIdOnly = await prisma.headOfSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadOfSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadOfSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeadOfSchool.
     * @param {HeadOfSchoolDeleteArgs} args - Arguments to delete one HeadOfSchool.
     * @example
     * // Delete one HeadOfSchool
     * const HeadOfSchool = await prisma.headOfSchool.delete({
     *   where: {
     *     // ... filter to delete one HeadOfSchool
     *   }
     * })
     * 
     */
    delete<T extends HeadOfSchoolDeleteArgs>(args: SelectSubset<T, HeadOfSchoolDeleteArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeadOfSchool.
     * @param {HeadOfSchoolUpdateArgs} args - Arguments to update one HeadOfSchool.
     * @example
     * // Update one HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadOfSchoolUpdateArgs>(args: SelectSubset<T, HeadOfSchoolUpdateArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeadOfSchools.
     * @param {HeadOfSchoolDeleteManyArgs} args - Arguments to filter HeadOfSchools to delete.
     * @example
     * // Delete a few HeadOfSchools
     * const { count } = await prisma.headOfSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadOfSchoolDeleteManyArgs>(args?: SelectSubset<T, HeadOfSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadOfSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeadOfSchools
     * const headOfSchool = await prisma.headOfSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadOfSchoolUpdateManyArgs>(args: SelectSubset<T, HeadOfSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadOfSchools and returns the data updated in the database.
     * @param {HeadOfSchoolUpdateManyAndReturnArgs} args - Arguments to update many HeadOfSchools.
     * @example
     * // Update many HeadOfSchools
     * const headOfSchool = await prisma.headOfSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeadOfSchools and only return the `id`
     * const headOfSchoolWithIdOnly = await prisma.headOfSchool.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeadOfSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadOfSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeadOfSchool.
     * @param {HeadOfSchoolUpsertArgs} args - Arguments to update or create a HeadOfSchool.
     * @example
     * // Update or create a HeadOfSchool
     * const headOfSchool = await prisma.headOfSchool.upsert({
     *   create: {
     *     // ... data to create a HeadOfSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeadOfSchool we want to update
     *   }
     * })
     */
    upsert<T extends HeadOfSchoolUpsertArgs>(args: SelectSubset<T, HeadOfSchoolUpsertArgs<ExtArgs>>): Prisma__HeadOfSchoolClient<$Result.GetResult<Prisma.$HeadOfSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeadOfSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolCountArgs} args - Arguments to filter HeadOfSchools to count.
     * @example
     * // Count the number of HeadOfSchools
     * const count = await prisma.headOfSchool.count({
     *   where: {
     *     // ... the filter for the HeadOfSchools we want to count
     *   }
     * })
    **/
    count<T extends HeadOfSchoolCountArgs>(
      args?: Subset<T, HeadOfSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadOfSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeadOfSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeadOfSchoolAggregateArgs>(args: Subset<T, HeadOfSchoolAggregateArgs>): Prisma.PrismaPromise<GetHeadOfSchoolAggregateType<T>>

    /**
     * Group by HeadOfSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadOfSchoolGroupByArgs} args - Group by arguments.
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
      T extends HeadOfSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadOfSchoolGroupByArgs['orderBy'] }
        : { orderBy?: HeadOfSchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeadOfSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadOfSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeadOfSchool model
   */
  readonly fields: HeadOfSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeadOfSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadOfSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HeadOfSchool model
   */
  interface HeadOfSchoolFieldRefs {
    readonly id: FieldRef<"HeadOfSchool", 'Int'>
    readonly schoolId: FieldRef<"HeadOfSchool", 'Int'>
    readonly name: FieldRef<"HeadOfSchool", 'String'>
    readonly designation: FieldRef<"HeadOfSchool", 'String'>
    readonly holdingChargeSince: FieldRef<"HeadOfSchool", 'String'>
    readonly academicQualification: FieldRef<"HeadOfSchool", 'String'>
    readonly professionalQualification: FieldRef<"HeadOfSchool", 'String'>
    readonly dateOfJoining: FieldRef<"HeadOfSchool", 'DateTime'>
    readonly teachingExperience: FieldRef<"HeadOfSchool", 'String'>
    readonly contactNumber: FieldRef<"HeadOfSchool", 'String'>
    readonly email: FieldRef<"HeadOfSchool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HeadOfSchool findUnique
   */
  export type HeadOfSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter, which HeadOfSchool to fetch.
     */
    where: HeadOfSchoolWhereUniqueInput
  }

  /**
   * HeadOfSchool findUniqueOrThrow
   */
  export type HeadOfSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter, which HeadOfSchool to fetch.
     */
    where: HeadOfSchoolWhereUniqueInput
  }

  /**
   * HeadOfSchool findFirst
   */
  export type HeadOfSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter, which HeadOfSchool to fetch.
     */
    where?: HeadOfSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadOfSchools to fetch.
     */
    orderBy?: HeadOfSchoolOrderByWithRelationInput | HeadOfSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadOfSchools.
     */
    cursor?: HeadOfSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadOfSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadOfSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadOfSchools.
     */
    distinct?: HeadOfSchoolScalarFieldEnum | HeadOfSchoolScalarFieldEnum[]
  }

  /**
   * HeadOfSchool findFirstOrThrow
   */
  export type HeadOfSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter, which HeadOfSchool to fetch.
     */
    where?: HeadOfSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadOfSchools to fetch.
     */
    orderBy?: HeadOfSchoolOrderByWithRelationInput | HeadOfSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadOfSchools.
     */
    cursor?: HeadOfSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadOfSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadOfSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadOfSchools.
     */
    distinct?: HeadOfSchoolScalarFieldEnum | HeadOfSchoolScalarFieldEnum[]
  }

  /**
   * HeadOfSchool findMany
   */
  export type HeadOfSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter, which HeadOfSchools to fetch.
     */
    where?: HeadOfSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadOfSchools to fetch.
     */
    orderBy?: HeadOfSchoolOrderByWithRelationInput | HeadOfSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeadOfSchools.
     */
    cursor?: HeadOfSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadOfSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadOfSchools.
     */
    skip?: number
    distinct?: HeadOfSchoolScalarFieldEnum | HeadOfSchoolScalarFieldEnum[]
  }

  /**
   * HeadOfSchool create
   */
  export type HeadOfSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a HeadOfSchool.
     */
    data: XOR<HeadOfSchoolCreateInput, HeadOfSchoolUncheckedCreateInput>
  }

  /**
   * HeadOfSchool createMany
   */
  export type HeadOfSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeadOfSchools.
     */
    data: HeadOfSchoolCreateManyInput | HeadOfSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeadOfSchool createManyAndReturn
   */
  export type HeadOfSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many HeadOfSchools.
     */
    data: HeadOfSchoolCreateManyInput | HeadOfSchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadOfSchool update
   */
  export type HeadOfSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a HeadOfSchool.
     */
    data: XOR<HeadOfSchoolUpdateInput, HeadOfSchoolUncheckedUpdateInput>
    /**
     * Choose, which HeadOfSchool to update.
     */
    where: HeadOfSchoolWhereUniqueInput
  }

  /**
   * HeadOfSchool updateMany
   */
  export type HeadOfSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeadOfSchools.
     */
    data: XOR<HeadOfSchoolUpdateManyMutationInput, HeadOfSchoolUncheckedUpdateManyInput>
    /**
     * Filter which HeadOfSchools to update
     */
    where?: HeadOfSchoolWhereInput
    /**
     * Limit how many HeadOfSchools to update.
     */
    limit?: number
  }

  /**
   * HeadOfSchool updateManyAndReturn
   */
  export type HeadOfSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * The data used to update HeadOfSchools.
     */
    data: XOR<HeadOfSchoolUpdateManyMutationInput, HeadOfSchoolUncheckedUpdateManyInput>
    /**
     * Filter which HeadOfSchools to update
     */
    where?: HeadOfSchoolWhereInput
    /**
     * Limit how many HeadOfSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadOfSchool upsert
   */
  export type HeadOfSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the HeadOfSchool to update in case it exists.
     */
    where: HeadOfSchoolWhereUniqueInput
    /**
     * In case the HeadOfSchool found by the `where` argument doesn't exist, create a new HeadOfSchool with this data.
     */
    create: XOR<HeadOfSchoolCreateInput, HeadOfSchoolUncheckedCreateInput>
    /**
     * In case the HeadOfSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadOfSchoolUpdateInput, HeadOfSchoolUncheckedUpdateInput>
  }

  /**
   * HeadOfSchool delete
   */
  export type HeadOfSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
    /**
     * Filter which HeadOfSchool to delete.
     */
    where: HeadOfSchoolWhereUniqueInput
  }

  /**
   * HeadOfSchool deleteMany
   */
  export type HeadOfSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadOfSchools to delete
     */
    where?: HeadOfSchoolWhereInput
    /**
     * Limit how many HeadOfSchools to delete.
     */
    limit?: number
  }

  /**
   * HeadOfSchool without action
   */
  export type HeadOfSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadOfSchool
     */
    select?: HeadOfSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadOfSchool
     */
    omit?: HeadOfSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadOfSchoolInclude<ExtArgs> | null
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
    subject: string | null
    qualification: string | null
    experience: string | null
    contactNumber: string | null
    email: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    subject: string | null
    qualification: string | null
    experience: string | null
    contactNumber: string | null
    email: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    subject: number
    qualification: number
    experience: number
    contactNumber: number
    email: number
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
    subject?: true
    qualification?: true
    experience?: true
    contactNumber?: true
    email?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    subject?: true
    qualification?: true
    experience?: true
    contactNumber?: true
    email?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    subject?: true
    qualification?: true
    experience?: true
    contactNumber?: true
    email?: true
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
    subject: string | null
    qualification: string | null
    experience: string | null
    contactNumber: string | null
    email: string | null
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
    subject?: boolean
    qualification?: boolean
    experience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    subject?: boolean
    qualification?: boolean
    experience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    subject?: boolean
    qualification?: boolean
    experience?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    subject?: boolean
    qualification?: boolean
    experience?: boolean
    contactNumber?: boolean
    email?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "name" | "subject" | "qualification" | "experience" | "contactNumber" | "email", ExtArgs["result"]["teacher"]>
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
      subject: string | null
      qualification: string | null
      experience: string | null
      contactNumber: string | null
      email: string | null
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
    readonly subject: FieldRef<"Teacher", 'String'>
    readonly qualification: FieldRef<"Teacher", 'String'>
    readonly experience: FieldRef<"Teacher", 'String'>
    readonly contactNumber: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
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
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    grade: string | null
    section: string | null
    dob: Date | null
    contactNumber: string | null
    email: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    grade: string | null
    section: string | null
    dob: Date | null
    contactNumber: string | null
    email: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    grade: number
    section: number
    dob: number
    contactNumber: number
    email: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    grade?: true
    section?: true
    dob?: true
    contactNumber?: true
    email?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    grade?: true
    section?: true
    dob?: true
    contactNumber?: true
    email?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    grade?: true
    section?: true
    dob?: true
    contactNumber?: true
    email?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    schoolId: number
    name: string
    grade: string | null
    section: string | null
    dob: Date | null
    contactNumber: string | null
    email: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    dob?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    dob?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    dob?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    dob?: boolean
    contactNumber?: boolean
    email?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "name" | "grade" | "section" | "dob" | "contactNumber" | "email", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      name: string
      grade: string | null
      section: string | null
      dob: Date | null
      contactNumber: string | null
      email: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly schoolId: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly grade: FieldRef<"Student", 'String'>
    readonly section: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'DateTime'>
    readonly contactNumber: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model DataEntryOperator
   */

  export type AggregateDataEntryOperator = {
    _count: DataEntryOperatorCountAggregateOutputType | null
    _avg: DataEntryOperatorAvgAggregateOutputType | null
    _sum: DataEntryOperatorSumAggregateOutputType | null
    _min: DataEntryOperatorMinAggregateOutputType | null
    _max: DataEntryOperatorMaxAggregateOutputType | null
  }

  export type DataEntryOperatorAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type DataEntryOperatorSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type DataEntryOperatorMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    contactNumber: string | null
    email: string | null
  }

  export type DataEntryOperatorMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    name: string | null
    contactNumber: string | null
    email: string | null
  }

  export type DataEntryOperatorCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    contactNumber: number
    email: number
    _all: number
  }


  export type DataEntryOperatorAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type DataEntryOperatorSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type DataEntryOperatorMinAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    contactNumber?: true
    email?: true
  }

  export type DataEntryOperatorMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    contactNumber?: true
    email?: true
  }

  export type DataEntryOperatorCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    contactNumber?: true
    email?: true
    _all?: true
  }

  export type DataEntryOperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataEntryOperator to aggregate.
     */
    where?: DataEntryOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntryOperators to fetch.
     */
    orderBy?: DataEntryOperatorOrderByWithRelationInput | DataEntryOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataEntryOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntryOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntryOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataEntryOperators
    **/
    _count?: true | DataEntryOperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataEntryOperatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataEntryOperatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataEntryOperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataEntryOperatorMaxAggregateInputType
  }

  export type GetDataEntryOperatorAggregateType<T extends DataEntryOperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateDataEntryOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataEntryOperator[P]>
      : GetScalarType<T[P], AggregateDataEntryOperator[P]>
  }




  export type DataEntryOperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataEntryOperatorWhereInput
    orderBy?: DataEntryOperatorOrderByWithAggregationInput | DataEntryOperatorOrderByWithAggregationInput[]
    by: DataEntryOperatorScalarFieldEnum[] | DataEntryOperatorScalarFieldEnum
    having?: DataEntryOperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataEntryOperatorCountAggregateInputType | true
    _avg?: DataEntryOperatorAvgAggregateInputType
    _sum?: DataEntryOperatorSumAggregateInputType
    _min?: DataEntryOperatorMinAggregateInputType
    _max?: DataEntryOperatorMaxAggregateInputType
  }

  export type DataEntryOperatorGroupByOutputType = {
    id: number
    schoolId: number
    name: string
    contactNumber: string | null
    email: string | null
    _count: DataEntryOperatorCountAggregateOutputType | null
    _avg: DataEntryOperatorAvgAggregateOutputType | null
    _sum: DataEntryOperatorSumAggregateOutputType | null
    _min: DataEntryOperatorMinAggregateOutputType | null
    _max: DataEntryOperatorMaxAggregateOutputType | null
  }

  type GetDataEntryOperatorGroupByPayload<T extends DataEntryOperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataEntryOperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataEntryOperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataEntryOperatorGroupByOutputType[P]>
            : GetScalarType<T[P], DataEntryOperatorGroupByOutputType[P]>
        }
      >
    >


  export type DataEntryOperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataEntryOperator"]>

  export type DataEntryOperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataEntryOperator"]>

  export type DataEntryOperatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    contactNumber?: boolean
    email?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataEntryOperator"]>

  export type DataEntryOperatorSelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    contactNumber?: boolean
    email?: boolean
  }

  export type DataEntryOperatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "name" | "contactNumber" | "email", ExtArgs["result"]["dataEntryOperator"]>
  export type DataEntryOperatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type DataEntryOperatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type DataEntryOperatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $DataEntryOperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataEntryOperator"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      name: string
      contactNumber: string | null
      email: string | null
    }, ExtArgs["result"]["dataEntryOperator"]>
    composites: {}
  }

  type DataEntryOperatorGetPayload<S extends boolean | null | undefined | DataEntryOperatorDefaultArgs> = $Result.GetResult<Prisma.$DataEntryOperatorPayload, S>

  type DataEntryOperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataEntryOperatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataEntryOperatorCountAggregateInputType | true
    }

  export interface DataEntryOperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataEntryOperator'], meta: { name: 'DataEntryOperator' } }
    /**
     * Find zero or one DataEntryOperator that matches the filter.
     * @param {DataEntryOperatorFindUniqueArgs} args - Arguments to find a DataEntryOperator
     * @example
     * // Get one DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataEntryOperatorFindUniqueArgs>(args: SelectSubset<T, DataEntryOperatorFindUniqueArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataEntryOperator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataEntryOperatorFindUniqueOrThrowArgs} args - Arguments to find a DataEntryOperator
     * @example
     * // Get one DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataEntryOperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, DataEntryOperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataEntryOperator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorFindFirstArgs} args - Arguments to find a DataEntryOperator
     * @example
     * // Get one DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataEntryOperatorFindFirstArgs>(args?: SelectSubset<T, DataEntryOperatorFindFirstArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataEntryOperator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorFindFirstOrThrowArgs} args - Arguments to find a DataEntryOperator
     * @example
     * // Get one DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataEntryOperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, DataEntryOperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataEntryOperators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataEntryOperators
     * const dataEntryOperators = await prisma.dataEntryOperator.findMany()
     * 
     * // Get first 10 DataEntryOperators
     * const dataEntryOperators = await prisma.dataEntryOperator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataEntryOperatorWithIdOnly = await prisma.dataEntryOperator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataEntryOperatorFindManyArgs>(args?: SelectSubset<T, DataEntryOperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataEntryOperator.
     * @param {DataEntryOperatorCreateArgs} args - Arguments to create a DataEntryOperator.
     * @example
     * // Create one DataEntryOperator
     * const DataEntryOperator = await prisma.dataEntryOperator.create({
     *   data: {
     *     // ... data to create a DataEntryOperator
     *   }
     * })
     * 
     */
    create<T extends DataEntryOperatorCreateArgs>(args: SelectSubset<T, DataEntryOperatorCreateArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataEntryOperators.
     * @param {DataEntryOperatorCreateManyArgs} args - Arguments to create many DataEntryOperators.
     * @example
     * // Create many DataEntryOperators
     * const dataEntryOperator = await prisma.dataEntryOperator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataEntryOperatorCreateManyArgs>(args?: SelectSubset<T, DataEntryOperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataEntryOperators and returns the data saved in the database.
     * @param {DataEntryOperatorCreateManyAndReturnArgs} args - Arguments to create many DataEntryOperators.
     * @example
     * // Create many DataEntryOperators
     * const dataEntryOperator = await prisma.dataEntryOperator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataEntryOperators and only return the `id`
     * const dataEntryOperatorWithIdOnly = await prisma.dataEntryOperator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataEntryOperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, DataEntryOperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataEntryOperator.
     * @param {DataEntryOperatorDeleteArgs} args - Arguments to delete one DataEntryOperator.
     * @example
     * // Delete one DataEntryOperator
     * const DataEntryOperator = await prisma.dataEntryOperator.delete({
     *   where: {
     *     // ... filter to delete one DataEntryOperator
     *   }
     * })
     * 
     */
    delete<T extends DataEntryOperatorDeleteArgs>(args: SelectSubset<T, DataEntryOperatorDeleteArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataEntryOperator.
     * @param {DataEntryOperatorUpdateArgs} args - Arguments to update one DataEntryOperator.
     * @example
     * // Update one DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataEntryOperatorUpdateArgs>(args: SelectSubset<T, DataEntryOperatorUpdateArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataEntryOperators.
     * @param {DataEntryOperatorDeleteManyArgs} args - Arguments to filter DataEntryOperators to delete.
     * @example
     * // Delete a few DataEntryOperators
     * const { count } = await prisma.dataEntryOperator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataEntryOperatorDeleteManyArgs>(args?: SelectSubset<T, DataEntryOperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataEntryOperators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataEntryOperators
     * const dataEntryOperator = await prisma.dataEntryOperator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataEntryOperatorUpdateManyArgs>(args: SelectSubset<T, DataEntryOperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataEntryOperators and returns the data updated in the database.
     * @param {DataEntryOperatorUpdateManyAndReturnArgs} args - Arguments to update many DataEntryOperators.
     * @example
     * // Update many DataEntryOperators
     * const dataEntryOperator = await prisma.dataEntryOperator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataEntryOperators and only return the `id`
     * const dataEntryOperatorWithIdOnly = await prisma.dataEntryOperator.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataEntryOperatorUpdateManyAndReturnArgs>(args: SelectSubset<T, DataEntryOperatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataEntryOperator.
     * @param {DataEntryOperatorUpsertArgs} args - Arguments to update or create a DataEntryOperator.
     * @example
     * // Update or create a DataEntryOperator
     * const dataEntryOperator = await prisma.dataEntryOperator.upsert({
     *   create: {
     *     // ... data to create a DataEntryOperator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataEntryOperator we want to update
     *   }
     * })
     */
    upsert<T extends DataEntryOperatorUpsertArgs>(args: SelectSubset<T, DataEntryOperatorUpsertArgs<ExtArgs>>): Prisma__DataEntryOperatorClient<$Result.GetResult<Prisma.$DataEntryOperatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataEntryOperators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorCountArgs} args - Arguments to filter DataEntryOperators to count.
     * @example
     * // Count the number of DataEntryOperators
     * const count = await prisma.dataEntryOperator.count({
     *   where: {
     *     // ... the filter for the DataEntryOperators we want to count
     *   }
     * })
    **/
    count<T extends DataEntryOperatorCountArgs>(
      args?: Subset<T, DataEntryOperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataEntryOperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataEntryOperator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataEntryOperatorAggregateArgs>(args: Subset<T, DataEntryOperatorAggregateArgs>): Prisma.PrismaPromise<GetDataEntryOperatorAggregateType<T>>

    /**
     * Group by DataEntryOperator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryOperatorGroupByArgs} args - Group by arguments.
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
      T extends DataEntryOperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataEntryOperatorGroupByArgs['orderBy'] }
        : { orderBy?: DataEntryOperatorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataEntryOperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataEntryOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataEntryOperator model
   */
  readonly fields: DataEntryOperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataEntryOperator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataEntryOperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataEntryOperator model
   */
  interface DataEntryOperatorFieldRefs {
    readonly id: FieldRef<"DataEntryOperator", 'Int'>
    readonly schoolId: FieldRef<"DataEntryOperator", 'Int'>
    readonly name: FieldRef<"DataEntryOperator", 'String'>
    readonly contactNumber: FieldRef<"DataEntryOperator", 'String'>
    readonly email: FieldRef<"DataEntryOperator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataEntryOperator findUnique
   */
  export type DataEntryOperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter, which DataEntryOperator to fetch.
     */
    where: DataEntryOperatorWhereUniqueInput
  }

  /**
   * DataEntryOperator findUniqueOrThrow
   */
  export type DataEntryOperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter, which DataEntryOperator to fetch.
     */
    where: DataEntryOperatorWhereUniqueInput
  }

  /**
   * DataEntryOperator findFirst
   */
  export type DataEntryOperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter, which DataEntryOperator to fetch.
     */
    where?: DataEntryOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntryOperators to fetch.
     */
    orderBy?: DataEntryOperatorOrderByWithRelationInput | DataEntryOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataEntryOperators.
     */
    cursor?: DataEntryOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntryOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntryOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataEntryOperators.
     */
    distinct?: DataEntryOperatorScalarFieldEnum | DataEntryOperatorScalarFieldEnum[]
  }

  /**
   * DataEntryOperator findFirstOrThrow
   */
  export type DataEntryOperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter, which DataEntryOperator to fetch.
     */
    where?: DataEntryOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntryOperators to fetch.
     */
    orderBy?: DataEntryOperatorOrderByWithRelationInput | DataEntryOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataEntryOperators.
     */
    cursor?: DataEntryOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntryOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntryOperators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataEntryOperators.
     */
    distinct?: DataEntryOperatorScalarFieldEnum | DataEntryOperatorScalarFieldEnum[]
  }

  /**
   * DataEntryOperator findMany
   */
  export type DataEntryOperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter, which DataEntryOperators to fetch.
     */
    where?: DataEntryOperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntryOperators to fetch.
     */
    orderBy?: DataEntryOperatorOrderByWithRelationInput | DataEntryOperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataEntryOperators.
     */
    cursor?: DataEntryOperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntryOperators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntryOperators.
     */
    skip?: number
    distinct?: DataEntryOperatorScalarFieldEnum | DataEntryOperatorScalarFieldEnum[]
  }

  /**
   * DataEntryOperator create
   */
  export type DataEntryOperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * The data needed to create a DataEntryOperator.
     */
    data: XOR<DataEntryOperatorCreateInput, DataEntryOperatorUncheckedCreateInput>
  }

  /**
   * DataEntryOperator createMany
   */
  export type DataEntryOperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataEntryOperators.
     */
    data: DataEntryOperatorCreateManyInput | DataEntryOperatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataEntryOperator createManyAndReturn
   */
  export type DataEntryOperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * The data used to create many DataEntryOperators.
     */
    data: DataEntryOperatorCreateManyInput | DataEntryOperatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataEntryOperator update
   */
  export type DataEntryOperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * The data needed to update a DataEntryOperator.
     */
    data: XOR<DataEntryOperatorUpdateInput, DataEntryOperatorUncheckedUpdateInput>
    /**
     * Choose, which DataEntryOperator to update.
     */
    where: DataEntryOperatorWhereUniqueInput
  }

  /**
   * DataEntryOperator updateMany
   */
  export type DataEntryOperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataEntryOperators.
     */
    data: XOR<DataEntryOperatorUpdateManyMutationInput, DataEntryOperatorUncheckedUpdateManyInput>
    /**
     * Filter which DataEntryOperators to update
     */
    where?: DataEntryOperatorWhereInput
    /**
     * Limit how many DataEntryOperators to update.
     */
    limit?: number
  }

  /**
   * DataEntryOperator updateManyAndReturn
   */
  export type DataEntryOperatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * The data used to update DataEntryOperators.
     */
    data: XOR<DataEntryOperatorUpdateManyMutationInput, DataEntryOperatorUncheckedUpdateManyInput>
    /**
     * Filter which DataEntryOperators to update
     */
    where?: DataEntryOperatorWhereInput
    /**
     * Limit how many DataEntryOperators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataEntryOperator upsert
   */
  export type DataEntryOperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * The filter to search for the DataEntryOperator to update in case it exists.
     */
    where: DataEntryOperatorWhereUniqueInput
    /**
     * In case the DataEntryOperator found by the `where` argument doesn't exist, create a new DataEntryOperator with this data.
     */
    create: XOR<DataEntryOperatorCreateInput, DataEntryOperatorUncheckedCreateInput>
    /**
     * In case the DataEntryOperator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataEntryOperatorUpdateInput, DataEntryOperatorUncheckedUpdateInput>
  }

  /**
   * DataEntryOperator delete
   */
  export type DataEntryOperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
    /**
     * Filter which DataEntryOperator to delete.
     */
    where: DataEntryOperatorWhereUniqueInput
  }

  /**
   * DataEntryOperator deleteMany
   */
  export type DataEntryOperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataEntryOperators to delete
     */
    where?: DataEntryOperatorWhereInput
    /**
     * Limit how many DataEntryOperators to delete.
     */
    limit?: number
  }

  /**
   * DataEntryOperator without action
   */
  export type DataEntryOperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryOperator
     */
    select?: DataEntryOperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntryOperator
     */
    omit?: DataEntryOperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryOperatorInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    email: 'email',
    roleId: 'roleId',
    joinDate: 'joinDate',
    resetPassword: 'resetPassword',
    isDisabled: 'isDisabled',
    schoolId: 'schoolId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    yearOfEstablishment: 'yearOfEstablishment',
    upgradedTo: 'upgradedTo',
    udiseCode: 'udiseCode',
    district: 'district',
    block: 'block',
    cluster: 'cluster',
    villageTown: 'villageTown',
    management: 'management',
    schoolType: 'schoolType',
    mediumOfInstruction: 'mediumOfInstruction',
    inclusiveSchool: 'inclusiveSchool',
    facilitiesForCWSN: 'facilitiesForCWSN',
    vocationalTrades: 'vocationalTrades',
    availableCourses: 'availableCourses',
    coEducation: 'coEducation',
    campusType: 'campusType',
    totalArea: 'totalArea',
    campusSize: 'campusSize'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const HeadOfSchoolScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    designation: 'designation',
    holdingChargeSince: 'holdingChargeSince',
    academicQualification: 'academicQualification',
    professionalQualification: 'professionalQualification',
    dateOfJoining: 'dateOfJoining',
    teachingExperience: 'teachingExperience',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type HeadOfSchoolScalarFieldEnum = (typeof HeadOfSchoolScalarFieldEnum)[keyof typeof HeadOfSchoolScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    subject: 'subject',
    qualification: 'qualification',
    experience: 'experience',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    grade: 'grade',
    section: 'section',
    dob: 'dob',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const DataEntryOperatorScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type DataEntryOperatorScalarFieldEnum = (typeof DataEntryOperatorScalarFieldEnum)[keyof typeof DataEntryOperatorScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    resetPassword?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    schoolId?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permissions?: PermissionListRelationFilter
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    resetPassword?: SortOrder
    isDisabled?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    permissions?: PermissionOrderByRelationAggregateInput
    school?: SchoolOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    resetPassword?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    schoolId?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permissions?: PermissionListRelationFilter
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }, "id" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    resetPassword?: SortOrder
    isDisabled?: SortOrder
    schoolId?: SortOrderInput | SortOrder
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
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    joinDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetPassword?: BoolWithAggregatesFilter<"User"> | boolean
    isDisabled?: BoolWithAggregatesFilter<"User"> | boolean
    schoolId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

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

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    yearOfEstablishment?: IntNullableFilter<"School"> | number | null
    upgradedTo?: StringNullableFilter<"School"> | string | null
    udiseCode?: StringNullableFilter<"School"> | string | null
    district?: StringNullableFilter<"School"> | string | null
    block?: StringNullableFilter<"School"> | string | null
    cluster?: StringNullableFilter<"School"> | string | null
    villageTown?: StringNullableFilter<"School"> | string | null
    management?: StringNullableFilter<"School"> | string | null
    schoolType?: StringNullableFilter<"School"> | string | null
    mediumOfInstruction?: StringNullableFilter<"School"> | string | null
    inclusiveSchool?: BoolFilter<"School"> | boolean
    facilitiesForCWSN?: StringNullableFilter<"School"> | string | null
    vocationalTrades?: StringNullableFilter<"School"> | string | null
    availableCourses?: StringNullableFilter<"School"> | string | null
    coEducation?: StringNullableFilter<"School"> | string | null
    campusType?: StringNullableFilter<"School"> | string | null
    totalArea?: StringNullableFilter<"School"> | string | null
    campusSize?: StringNullableFilter<"School"> | string | null
    users?: UserListRelationFilter
    headOfSchool?: XOR<HeadOfSchoolNullableScalarRelationFilter, HeadOfSchoolWhereInput> | null
    teachers?: TeacherListRelationFilter
    students?: StudentListRelationFilter
    dataEntryOperators?: DataEntryOperatorListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    yearOfEstablishment?: SortOrderInput | SortOrder
    upgradedTo?: SortOrderInput | SortOrder
    udiseCode?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    villageTown?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    schoolType?: SortOrderInput | SortOrder
    mediumOfInstruction?: SortOrderInput | SortOrder
    inclusiveSchool?: SortOrder
    facilitiesForCWSN?: SortOrderInput | SortOrder
    vocationalTrades?: SortOrderInput | SortOrder
    availableCourses?: SortOrderInput | SortOrder
    coEducation?: SortOrderInput | SortOrder
    campusType?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    campusSize?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    headOfSchool?: HeadOfSchoolOrderByWithRelationInput
    teachers?: TeacherOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    dataEntryOperators?: DataEntryOperatorOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    yearOfEstablishment?: IntNullableFilter<"School"> | number | null
    upgradedTo?: StringNullableFilter<"School"> | string | null
    udiseCode?: StringNullableFilter<"School"> | string | null
    district?: StringNullableFilter<"School"> | string | null
    block?: StringNullableFilter<"School"> | string | null
    cluster?: StringNullableFilter<"School"> | string | null
    villageTown?: StringNullableFilter<"School"> | string | null
    management?: StringNullableFilter<"School"> | string | null
    schoolType?: StringNullableFilter<"School"> | string | null
    mediumOfInstruction?: StringNullableFilter<"School"> | string | null
    inclusiveSchool?: BoolFilter<"School"> | boolean
    facilitiesForCWSN?: StringNullableFilter<"School"> | string | null
    vocationalTrades?: StringNullableFilter<"School"> | string | null
    availableCourses?: StringNullableFilter<"School"> | string | null
    coEducation?: StringNullableFilter<"School"> | string | null
    campusType?: StringNullableFilter<"School"> | string | null
    totalArea?: StringNullableFilter<"School"> | string | null
    campusSize?: StringNullableFilter<"School"> | string | null
    users?: UserListRelationFilter
    headOfSchool?: XOR<HeadOfSchoolNullableScalarRelationFilter, HeadOfSchoolWhereInput> | null
    teachers?: TeacherListRelationFilter
    students?: StudentListRelationFilter
    dataEntryOperators?: DataEntryOperatorListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    yearOfEstablishment?: SortOrderInput | SortOrder
    upgradedTo?: SortOrderInput | SortOrder
    udiseCode?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    block?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    villageTown?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    schoolType?: SortOrderInput | SortOrder
    mediumOfInstruction?: SortOrderInput | SortOrder
    inclusiveSchool?: SortOrder
    facilitiesForCWSN?: SortOrderInput | SortOrder
    vocationalTrades?: SortOrderInput | SortOrder
    availableCourses?: SortOrderInput | SortOrder
    coEducation?: SortOrderInput | SortOrder
    campusType?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    campusSize?: SortOrderInput | SortOrder
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
    yearOfEstablishment?: IntNullableWithAggregatesFilter<"School"> | number | null
    upgradedTo?: StringNullableWithAggregatesFilter<"School"> | string | null
    udiseCode?: StringNullableWithAggregatesFilter<"School"> | string | null
    district?: StringNullableWithAggregatesFilter<"School"> | string | null
    block?: StringNullableWithAggregatesFilter<"School"> | string | null
    cluster?: StringNullableWithAggregatesFilter<"School"> | string | null
    villageTown?: StringNullableWithAggregatesFilter<"School"> | string | null
    management?: StringNullableWithAggregatesFilter<"School"> | string | null
    schoolType?: StringNullableWithAggregatesFilter<"School"> | string | null
    mediumOfInstruction?: StringNullableWithAggregatesFilter<"School"> | string | null
    inclusiveSchool?: BoolWithAggregatesFilter<"School"> | boolean
    facilitiesForCWSN?: StringNullableWithAggregatesFilter<"School"> | string | null
    vocationalTrades?: StringNullableWithAggregatesFilter<"School"> | string | null
    availableCourses?: StringNullableWithAggregatesFilter<"School"> | string | null
    coEducation?: StringNullableWithAggregatesFilter<"School"> | string | null
    campusType?: StringNullableWithAggregatesFilter<"School"> | string | null
    totalArea?: StringNullableWithAggregatesFilter<"School"> | string | null
    campusSize?: StringNullableWithAggregatesFilter<"School"> | string | null
  }

  export type HeadOfSchoolWhereInput = {
    AND?: HeadOfSchoolWhereInput | HeadOfSchoolWhereInput[]
    OR?: HeadOfSchoolWhereInput[]
    NOT?: HeadOfSchoolWhereInput | HeadOfSchoolWhereInput[]
    id?: IntFilter<"HeadOfSchool"> | number
    schoolId?: IntFilter<"HeadOfSchool"> | number
    name?: StringFilter<"HeadOfSchool"> | string
    designation?: StringNullableFilter<"HeadOfSchool"> | string | null
    holdingChargeSince?: StringNullableFilter<"HeadOfSchool"> | string | null
    academicQualification?: StringNullableFilter<"HeadOfSchool"> | string | null
    professionalQualification?: StringNullableFilter<"HeadOfSchool"> | string | null
    dateOfJoining?: DateTimeNullableFilter<"HeadOfSchool"> | Date | string | null
    teachingExperience?: StringNullableFilter<"HeadOfSchool"> | string | null
    contactNumber?: StringNullableFilter<"HeadOfSchool"> | string | null
    email?: StringNullableFilter<"HeadOfSchool"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type HeadOfSchoolOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    designation?: SortOrderInput | SortOrder
    holdingChargeSince?: SortOrderInput | SortOrder
    academicQualification?: SortOrderInput | SortOrder
    professionalQualification?: SortOrderInput | SortOrder
    dateOfJoining?: SortOrderInput | SortOrder
    teachingExperience?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type HeadOfSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    schoolId?: number
    AND?: HeadOfSchoolWhereInput | HeadOfSchoolWhereInput[]
    OR?: HeadOfSchoolWhereInput[]
    NOT?: HeadOfSchoolWhereInput | HeadOfSchoolWhereInput[]
    name?: StringFilter<"HeadOfSchool"> | string
    designation?: StringNullableFilter<"HeadOfSchool"> | string | null
    holdingChargeSince?: StringNullableFilter<"HeadOfSchool"> | string | null
    academicQualification?: StringNullableFilter<"HeadOfSchool"> | string | null
    professionalQualification?: StringNullableFilter<"HeadOfSchool"> | string | null
    dateOfJoining?: DateTimeNullableFilter<"HeadOfSchool"> | Date | string | null
    teachingExperience?: StringNullableFilter<"HeadOfSchool"> | string | null
    contactNumber?: StringNullableFilter<"HeadOfSchool"> | string | null
    email?: StringNullableFilter<"HeadOfSchool"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "schoolId">

  export type HeadOfSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    designation?: SortOrderInput | SortOrder
    holdingChargeSince?: SortOrderInput | SortOrder
    academicQualification?: SortOrderInput | SortOrder
    professionalQualification?: SortOrderInput | SortOrder
    dateOfJoining?: SortOrderInput | SortOrder
    teachingExperience?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: HeadOfSchoolCountOrderByAggregateInput
    _avg?: HeadOfSchoolAvgOrderByAggregateInput
    _max?: HeadOfSchoolMaxOrderByAggregateInput
    _min?: HeadOfSchoolMinOrderByAggregateInput
    _sum?: HeadOfSchoolSumOrderByAggregateInput
  }

  export type HeadOfSchoolScalarWhereWithAggregatesInput = {
    AND?: HeadOfSchoolScalarWhereWithAggregatesInput | HeadOfSchoolScalarWhereWithAggregatesInput[]
    OR?: HeadOfSchoolScalarWhereWithAggregatesInput[]
    NOT?: HeadOfSchoolScalarWhereWithAggregatesInput | HeadOfSchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeadOfSchool"> | number
    schoolId?: IntWithAggregatesFilter<"HeadOfSchool"> | number
    name?: StringWithAggregatesFilter<"HeadOfSchool"> | string
    designation?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    holdingChargeSince?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    academicQualification?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    professionalQualification?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    dateOfJoining?: DateTimeNullableWithAggregatesFilter<"HeadOfSchool"> | Date | string | null
    teachingExperience?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
    email?: StringNullableWithAggregatesFilter<"HeadOfSchool"> | string | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    schoolId?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    subject?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
    contactNumber?: StringNullableFilter<"Teacher"> | string | null
    email?: StringNullableFilter<"Teacher"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    subject?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    schoolId?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    subject?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
    contactNumber?: StringNullableFilter<"Teacher"> | string | null
    email?: StringNullableFilter<"Teacher"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    subject?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
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
    subject?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    qualification?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    email?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    schoolId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    grade?: StringNullableFilter<"Student"> | string | null
    section?: StringNullableFilter<"Student"> | string | null
    dob?: DateTimeNullableFilter<"Student"> | Date | string | null
    contactNumber?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    grade?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    schoolId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    grade?: StringNullableFilter<"Student"> | string | null
    section?: StringNullableFilter<"Student"> | string | null
    dob?: DateTimeNullableFilter<"Student"> | Date | string | null
    contactNumber?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    grade?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    schoolId?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    grade?: StringNullableWithAggregatesFilter<"Student"> | string | null
    section?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type DataEntryOperatorWhereInput = {
    AND?: DataEntryOperatorWhereInput | DataEntryOperatorWhereInput[]
    OR?: DataEntryOperatorWhereInput[]
    NOT?: DataEntryOperatorWhereInput | DataEntryOperatorWhereInput[]
    id?: IntFilter<"DataEntryOperator"> | number
    schoolId?: IntFilter<"DataEntryOperator"> | number
    name?: StringFilter<"DataEntryOperator"> | string
    contactNumber?: StringNullableFilter<"DataEntryOperator"> | string | null
    email?: StringNullableFilter<"DataEntryOperator"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type DataEntryOperatorOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type DataEntryOperatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataEntryOperatorWhereInput | DataEntryOperatorWhereInput[]
    OR?: DataEntryOperatorWhereInput[]
    NOT?: DataEntryOperatorWhereInput | DataEntryOperatorWhereInput[]
    schoolId?: IntFilter<"DataEntryOperator"> | number
    name?: StringFilter<"DataEntryOperator"> | string
    contactNumber?: StringNullableFilter<"DataEntryOperator"> | string | null
    email?: StringNullableFilter<"DataEntryOperator"> | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type DataEntryOperatorOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: DataEntryOperatorCountOrderByAggregateInput
    _avg?: DataEntryOperatorAvgOrderByAggregateInput
    _max?: DataEntryOperatorMaxOrderByAggregateInput
    _min?: DataEntryOperatorMinOrderByAggregateInput
    _sum?: DataEntryOperatorSumOrderByAggregateInput
  }

  export type DataEntryOperatorScalarWhereWithAggregatesInput = {
    AND?: DataEntryOperatorScalarWhereWithAggregatesInput | DataEntryOperatorScalarWhereWithAggregatesInput[]
    OR?: DataEntryOperatorScalarWhereWithAggregatesInput[]
    NOT?: DataEntryOperatorScalarWhereWithAggregatesInput | DataEntryOperatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataEntryOperator"> | number
    schoolId?: IntWithAggregatesFilter<"DataEntryOperator"> | number
    name?: StringWithAggregatesFilter<"DataEntryOperator"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"DataEntryOperator"> | string | null
    email?: StringNullableWithAggregatesFilter<"DataEntryOperator"> | string | null
  }

  export type UserCreateInput = {
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    school?: SchoolCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    roleId: number
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: number | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    school?: SchoolUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    roleId: number
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type SchoolCreateInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolCreateNestedOneWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    students?: StudentUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadOfSchoolCreateInput = {
    name: string
    designation?: string | null
    holdingChargeSince?: string | null
    academicQualification?: string | null
    professionalQualification?: string | null
    dateOfJoining?: Date | string | null
    teachingExperience?: string | null
    contactNumber?: string | null
    email?: string | null
    school: SchoolCreateNestedOneWithoutHeadOfSchoolInput
  }

  export type HeadOfSchoolUncheckedCreateInput = {
    id?: number
    schoolId: number
    name: string
    designation?: string | null
    holdingChargeSince?: string | null
    academicQualification?: string | null
    professionalQualification?: string | null
    dateOfJoining?: Date | string | null
    teachingExperience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type HeadOfSchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutHeadOfSchoolNestedInput
  }

  export type HeadOfSchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadOfSchoolCreateManyInput = {
    id?: number
    schoolId: number
    name: string
    designation?: string | null
    holdingChargeSince?: string | null
    academicQualification?: string | null
    professionalQualification?: string | null
    dateOfJoining?: Date | string | null
    teachingExperience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type HeadOfSchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadOfSchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateInput = {
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
    school: SchoolCreateNestedOneWithoutTeachersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    schoolId: number
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateManyInput = {
    id?: number
    schoolId: number
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateInput = {
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
    school: SchoolCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    schoolId: number
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateManyInput = {
    id?: number
    schoolId: number
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorCreateInput = {
    name: string
    contactNumber?: string | null
    email?: string | null
    school: SchoolCreateNestedOneWithoutDataEntryOperatorsInput
  }

  export type DataEntryOperatorUncheckedCreateInput = {
    id?: number
    schoolId: number
    name: string
    contactNumber?: string | null
    email?: string | null
  }

  export type DataEntryOperatorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutDataEntryOperatorsNestedInput
  }

  export type DataEntryOperatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorCreateManyInput = {
    id?: number
    schoolId: number
    name: string
    contactNumber?: string | null
    email?: string | null
  }

  export type DataEntryOperatorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    resetPassword?: SortOrder
    isDisabled?: SortOrder
    schoolId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    resetPassword?: SortOrder
    isDisabled?: SortOrder
    schoolId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    joinDate?: SortOrder
    resetPassword?: SortOrder
    isDisabled?: SortOrder
    schoolId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    schoolId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
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

  export type HeadOfSchoolNullableScalarRelationFilter = {
    is?: HeadOfSchoolWhereInput | null
    isNot?: HeadOfSchoolWhereInput | null
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type DataEntryOperatorListRelationFilter = {
    every?: DataEntryOperatorWhereInput
    some?: DataEntryOperatorWhereInput
    none?: DataEntryOperatorWhereInput
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataEntryOperatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    yearOfEstablishment?: SortOrder
    upgradedTo?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    villageTown?: SortOrder
    management?: SortOrder
    schoolType?: SortOrder
    mediumOfInstruction?: SortOrder
    inclusiveSchool?: SortOrder
    facilitiesForCWSN?: SortOrder
    vocationalTrades?: SortOrder
    availableCourses?: SortOrder
    coEducation?: SortOrder
    campusType?: SortOrder
    totalArea?: SortOrder
    campusSize?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    yearOfEstablishment?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    yearOfEstablishment?: SortOrder
    upgradedTo?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    villageTown?: SortOrder
    management?: SortOrder
    schoolType?: SortOrder
    mediumOfInstruction?: SortOrder
    inclusiveSchool?: SortOrder
    facilitiesForCWSN?: SortOrder
    vocationalTrades?: SortOrder
    availableCourses?: SortOrder
    coEducation?: SortOrder
    campusType?: SortOrder
    totalArea?: SortOrder
    campusSize?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    yearOfEstablishment?: SortOrder
    upgradedTo?: SortOrder
    udiseCode?: SortOrder
    district?: SortOrder
    block?: SortOrder
    cluster?: SortOrder
    villageTown?: SortOrder
    management?: SortOrder
    schoolType?: SortOrder
    mediumOfInstruction?: SortOrder
    inclusiveSchool?: SortOrder
    facilitiesForCWSN?: SortOrder
    vocationalTrades?: SortOrder
    availableCourses?: SortOrder
    coEducation?: SortOrder
    campusType?: SortOrder
    totalArea?: SortOrder
    campusSize?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
    yearOfEstablishment?: SortOrder
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

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type HeadOfSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    holdingChargeSince?: SortOrder
    academicQualification?: SortOrder
    professionalQualification?: SortOrder
    dateOfJoining?: SortOrder
    teachingExperience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type HeadOfSchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type HeadOfSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    holdingChargeSince?: SortOrder
    academicQualification?: SortOrder
    professionalQualification?: SortOrder
    dateOfJoining?: SortOrder
    teachingExperience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type HeadOfSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    holdingChargeSince?: SortOrder
    academicQualification?: SortOrder
    professionalQualification?: SortOrder
    dateOfJoining?: SortOrder
    teachingExperience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type HeadOfSchoolSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
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

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    dob?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    dob?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    dob?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type DataEntryOperatorCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type DataEntryOperatorAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type DataEntryOperatorMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type DataEntryOperatorMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
  }

  export type DataEntryOperatorSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
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

  export type SchoolCreateNestedOneWithoutUsersInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    connect?: SchoolWhereUniqueInput
  }

  export type PermissionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type SchoolUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    upsert?: SchoolUpsertWithoutUsersInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUsersInput, SchoolUpdateWithoutUsersInput>, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type UserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HeadOfSchoolCreateNestedOneWithoutSchoolInput = {
    create?: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: HeadOfSchoolCreateOrConnectWithoutSchoolInput
    connect?: HeadOfSchoolWhereUniqueInput
  }

  export type TeacherCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type DataEntryOperatorCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput> | DataEntryOperatorCreateWithoutSchoolInput[] | DataEntryOperatorUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DataEntryOperatorCreateOrConnectWithoutSchoolInput | DataEntryOperatorCreateOrConnectWithoutSchoolInput[]
    createMany?: DataEntryOperatorCreateManySchoolInputEnvelope
    connect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput = {
    create?: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: HeadOfSchoolCreateOrConnectWithoutSchoolInput
    connect?: HeadOfSchoolWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput> | TeacherCreateWithoutSchoolInput[] | TeacherUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolInput | TeacherCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherCreateManySchoolInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput> | DataEntryOperatorCreateWithoutSchoolInput[] | DataEntryOperatorUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DataEntryOperatorCreateOrConnectWithoutSchoolInput | DataEntryOperatorCreateOrConnectWithoutSchoolInput[]
    createMany?: DataEntryOperatorCreateManySchoolInputEnvelope
    connect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HeadOfSchoolUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: HeadOfSchoolCreateOrConnectWithoutSchoolInput
    upsert?: HeadOfSchoolUpsertWithoutSchoolInput
    disconnect?: HeadOfSchoolWhereInput | boolean
    delete?: HeadOfSchoolWhereInput | boolean
    connect?: HeadOfSchoolWhereUniqueInput
    update?: XOR<XOR<HeadOfSchoolUpdateToOneWithWhereWithoutSchoolInput, HeadOfSchoolUpdateWithoutSchoolInput>, HeadOfSchoolUncheckedUpdateWithoutSchoolInput>
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

  export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DataEntryOperatorUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput> | DataEntryOperatorCreateWithoutSchoolInput[] | DataEntryOperatorUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DataEntryOperatorCreateOrConnectWithoutSchoolInput | DataEntryOperatorCreateOrConnectWithoutSchoolInput[]
    upsert?: DataEntryOperatorUpsertWithWhereUniqueWithoutSchoolInput | DataEntryOperatorUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DataEntryOperatorCreateManySchoolInputEnvelope
    set?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    disconnect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    delete?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    connect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    update?: DataEntryOperatorUpdateWithWhereUniqueWithoutSchoolInput | DataEntryOperatorUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DataEntryOperatorUpdateManyWithWhereWithoutSchoolInput | DataEntryOperatorUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DataEntryOperatorScalarWhereInput | DataEntryOperatorScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: HeadOfSchoolCreateOrConnectWithoutSchoolInput
    upsert?: HeadOfSchoolUpsertWithoutSchoolInput
    disconnect?: HeadOfSchoolWhereInput | boolean
    delete?: HeadOfSchoolWhereInput | boolean
    connect?: HeadOfSchoolWhereUniqueInput
    update?: XOR<XOR<HeadOfSchoolUpdateToOneWithWhereWithoutSchoolInput, HeadOfSchoolUpdateWithoutSchoolInput>, HeadOfSchoolUncheckedUpdateWithoutSchoolInput>
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

  export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput> | DataEntryOperatorCreateWithoutSchoolInput[] | DataEntryOperatorUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DataEntryOperatorCreateOrConnectWithoutSchoolInput | DataEntryOperatorCreateOrConnectWithoutSchoolInput[]
    upsert?: DataEntryOperatorUpsertWithWhereUniqueWithoutSchoolInput | DataEntryOperatorUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DataEntryOperatorCreateManySchoolInputEnvelope
    set?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    disconnect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    delete?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    connect?: DataEntryOperatorWhereUniqueInput | DataEntryOperatorWhereUniqueInput[]
    update?: DataEntryOperatorUpdateWithWhereUniqueWithoutSchoolInput | DataEntryOperatorUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DataEntryOperatorUpdateManyWithWhereWithoutSchoolInput | DataEntryOperatorUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DataEntryOperatorScalarWhereInput | DataEntryOperatorScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutHeadOfSchoolInput = {
    create?: XOR<SchoolCreateWithoutHeadOfSchoolInput, SchoolUncheckedCreateWithoutHeadOfSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutHeadOfSchoolInput
    connect?: SchoolWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SchoolUpdateOneRequiredWithoutHeadOfSchoolNestedInput = {
    create?: XOR<SchoolCreateWithoutHeadOfSchoolInput, SchoolUncheckedCreateWithoutHeadOfSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutHeadOfSchoolInput
    upsert?: SchoolUpsertWithoutHeadOfSchoolInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutHeadOfSchoolInput, SchoolUpdateWithoutHeadOfSchoolInput>, SchoolUncheckedUpdateWithoutHeadOfSchoolInput>
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

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentsInput, SchoolUpdateWithoutStudentsInput>, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolCreateNestedOneWithoutDataEntryOperatorsInput = {
    create?: XOR<SchoolCreateWithoutDataEntryOperatorsInput, SchoolUncheckedCreateWithoutDataEntryOperatorsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDataEntryOperatorsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutDataEntryOperatorsNestedInput = {
    create?: XOR<SchoolCreateWithoutDataEntryOperatorsInput, SchoolUncheckedCreateWithoutDataEntryOperatorsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDataEntryOperatorsInput
    upsert?: SchoolUpsertWithoutDataEntryOperatorsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutDataEntryOperatorsInput, SchoolUpdateWithoutDataEntryOperatorsInput>, SchoolUncheckedUpdateWithoutDataEntryOperatorsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SchoolCreateWithoutUsersInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    headOfSchool?: HeadOfSchoolCreateNestedOneWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    headOfSchool?: HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUsersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
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

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
  }

  export type SchoolUpsertWithoutUsersInput = {
    update: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUsersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type SchoolUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    headOfSchool?: HeadOfSchoolUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    students?: StudentUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    headOfSchool?: HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    school?: SchoolCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: number | null
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
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
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    joinDate?: DateTimeFilter<"User"> | Date | string
    resetPassword?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    schoolId?: IntNullableFilter<"User"> | number | null
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

  export type UserCreateWithoutPermissionsInput = {
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    school?: SchoolCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    roleId: number
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: number | null
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

  export type UserCreateWithoutSchoolInput = {
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    roleId: number
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutSchoolInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserCreateManySchoolInputEnvelope = {
    data: UserCreateManySchoolInput | UserCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type HeadOfSchoolCreateWithoutSchoolInput = {
    name: string
    designation?: string | null
    holdingChargeSince?: string | null
    academicQualification?: string | null
    professionalQualification?: string | null
    dateOfJoining?: Date | string | null
    teachingExperience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type HeadOfSchoolUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    designation?: string | null
    holdingChargeSince?: string | null
    academicQualification?: string | null
    professionalQualification?: string | null
    dateOfJoining?: Date | string | null
    teachingExperience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type HeadOfSchoolCreateOrConnectWithoutSchoolInput = {
    where: HeadOfSchoolWhereUniqueInput
    create: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherCreateWithoutSchoolInput = {
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type TeacherUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type TeacherCreateOrConnectWithoutSchoolInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSchoolInput, TeacherUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherCreateManySchoolInputEnvelope = {
    data: TeacherCreateManySchoolInput | TeacherCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutSchoolInput = {
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: StudentCreateManySchoolInput | StudentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type DataEntryOperatorCreateWithoutSchoolInput = {
    name: string
    contactNumber?: string | null
    email?: string | null
  }

  export type DataEntryOperatorUncheckedCreateWithoutSchoolInput = {
    id?: number
    name: string
    contactNumber?: string | null
    email?: string | null
  }

  export type DataEntryOperatorCreateOrConnectWithoutSchoolInput = {
    where: DataEntryOperatorWhereUniqueInput
    create: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput>
  }

  export type DataEntryOperatorCreateManySchoolInputEnvelope = {
    data: DataEntryOperatorCreateManySchoolInput | DataEntryOperatorCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateManyWithWhereWithoutSchoolInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type HeadOfSchoolUpsertWithoutSchoolInput = {
    update: XOR<HeadOfSchoolUpdateWithoutSchoolInput, HeadOfSchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<HeadOfSchoolCreateWithoutSchoolInput, HeadOfSchoolUncheckedCreateWithoutSchoolInput>
    where?: HeadOfSchoolWhereInput
  }

  export type HeadOfSchoolUpdateToOneWithWhereWithoutSchoolInput = {
    where?: HeadOfSchoolWhereInput
    data: XOR<HeadOfSchoolUpdateWithoutSchoolInput, HeadOfSchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type HeadOfSchoolUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadOfSchoolUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    holdingChargeSince?: NullableStringFieldUpdateOperationsInput | string | null
    academicQualification?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teachingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    subject?: StringNullableFilter<"Teacher"> | string | null
    qualification?: StringNullableFilter<"Teacher"> | string | null
    experience?: StringNullableFilter<"Teacher"> | string | null
    contactNumber?: StringNullableFilter<"Teacher"> | string | null
    email?: StringNullableFilter<"Teacher"> | string | null
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    schoolId?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    grade?: StringNullableFilter<"Student"> | string | null
    section?: StringNullableFilter<"Student"> | string | null
    dob?: DateTimeNullableFilter<"Student"> | Date | string | null
    contactNumber?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
  }

  export type DataEntryOperatorUpsertWithWhereUniqueWithoutSchoolInput = {
    where: DataEntryOperatorWhereUniqueInput
    update: XOR<DataEntryOperatorUpdateWithoutSchoolInput, DataEntryOperatorUncheckedUpdateWithoutSchoolInput>
    create: XOR<DataEntryOperatorCreateWithoutSchoolInput, DataEntryOperatorUncheckedCreateWithoutSchoolInput>
  }

  export type DataEntryOperatorUpdateWithWhereUniqueWithoutSchoolInput = {
    where: DataEntryOperatorWhereUniqueInput
    data: XOR<DataEntryOperatorUpdateWithoutSchoolInput, DataEntryOperatorUncheckedUpdateWithoutSchoolInput>
  }

  export type DataEntryOperatorUpdateManyWithWhereWithoutSchoolInput = {
    where: DataEntryOperatorScalarWhereInput
    data: XOR<DataEntryOperatorUpdateManyMutationInput, DataEntryOperatorUncheckedUpdateManyWithoutSchoolInput>
  }

  export type DataEntryOperatorScalarWhereInput = {
    AND?: DataEntryOperatorScalarWhereInput | DataEntryOperatorScalarWhereInput[]
    OR?: DataEntryOperatorScalarWhereInput[]
    NOT?: DataEntryOperatorScalarWhereInput | DataEntryOperatorScalarWhereInput[]
    id?: IntFilter<"DataEntryOperator"> | number
    schoolId?: IntFilter<"DataEntryOperator"> | number
    name?: StringFilter<"DataEntryOperator"> | string
    contactNumber?: StringNullableFilter<"DataEntryOperator"> | string | null
    email?: StringNullableFilter<"DataEntryOperator"> | string | null
  }

  export type SchoolCreateWithoutHeadOfSchoolInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserCreateNestedManyWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutHeadOfSchoolInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutHeadOfSchoolInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutHeadOfSchoolInput, SchoolUncheckedCreateWithoutHeadOfSchoolInput>
  }

  export type SchoolUpsertWithoutHeadOfSchoolInput = {
    update: XOR<SchoolUpdateWithoutHeadOfSchoolInput, SchoolUncheckedUpdateWithoutHeadOfSchoolInput>
    create: XOR<SchoolCreateWithoutHeadOfSchoolInput, SchoolUncheckedCreateWithoutHeadOfSchoolInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutHeadOfSchoolInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutHeadOfSchoolInput, SchoolUncheckedUpdateWithoutHeadOfSchoolInput>
  }

  export type SchoolUpdateWithoutHeadOfSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    students?: StudentUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutHeadOfSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutTeachersInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolCreateNestedOneWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput
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
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUpdateOneWithoutSchoolNestedInput
    students?: StudentUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutStudentsInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolCreateNestedOneWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    dataEntryOperators?: DataEntryOperatorUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    dataEntryOperators?: DataEntryOperatorUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutDataEntryOperatorsInput = {
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolCreateNestedOneWithoutSchoolInput
    teachers?: TeacherCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutDataEntryOperatorsInput = {
    id?: number
    name: string
    yearOfEstablishment?: number | null
    upgradedTo?: string | null
    udiseCode?: string | null
    district?: string | null
    block?: string | null
    cluster?: string | null
    villageTown?: string | null
    management?: string | null
    schoolType?: string | null
    mediumOfInstruction?: string | null
    inclusiveSchool?: boolean
    facilitiesForCWSN?: string | null
    vocationalTrades?: string | null
    availableCourses?: string | null
    coEducation?: string | null
    campusType?: string | null
    totalArea?: string | null
    campusSize?: string | null
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput
    headOfSchool?: HeadOfSchoolUncheckedCreateNestedOneWithoutSchoolInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutDataEntryOperatorsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutDataEntryOperatorsInput, SchoolUncheckedCreateWithoutDataEntryOperatorsInput>
  }

  export type SchoolUpsertWithoutDataEntryOperatorsInput = {
    update: XOR<SchoolUpdateWithoutDataEntryOperatorsInput, SchoolUncheckedUpdateWithoutDataEntryOperatorsInput>
    create: XOR<SchoolCreateWithoutDataEntryOperatorsInput, SchoolUncheckedCreateWithoutDataEntryOperatorsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutDataEntryOperatorsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutDataEntryOperatorsInput, SchoolUncheckedUpdateWithoutDataEntryOperatorsInput>
  }

  export type SchoolUpdateWithoutDataEntryOperatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUpdateManyWithoutSchoolNestedInput
    students?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutDataEntryOperatorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    upgradedTo?: NullableStringFieldUpdateOperationsInput | string | null
    udiseCode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    block?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    villageTown?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    schoolType?: NullableStringFieldUpdateOperationsInput | string | null
    mediumOfInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    inclusiveSchool?: BoolFieldUpdateOperationsInput | boolean
    facilitiesForCWSN?: NullableStringFieldUpdateOperationsInput | string | null
    vocationalTrades?: NullableStringFieldUpdateOperationsInput | string | null
    availableCourses?: NullableStringFieldUpdateOperationsInput | string | null
    coEducation?: NullableStringFieldUpdateOperationsInput | string | null
    campusType?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableStringFieldUpdateOperationsInput | string | null
    campusSize?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    headOfSchool?: HeadOfSchoolUncheckedUpdateOneWithoutSchoolNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
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

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
    schoolId?: number | null
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    school?: SchoolUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
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
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    school?: SchoolUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type UserCreateManySchoolInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    roleId: number
    joinDate?: Date | string
    resetPassword?: boolean
    isDisabled?: boolean
  }

  export type TeacherCreateManySchoolInput = {
    id?: number
    name: string
    subject?: string | null
    qualification?: string | null
    experience?: string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type StudentCreateManySchoolInput = {
    id?: number
    name: string
    grade?: string | null
    section?: string | null
    dob?: Date | string | null
    contactNumber?: string | null
    email?: string | null
  }

  export type DataEntryOperatorCreateManySchoolInput = {
    id?: number
    name: string
    contactNumber?: string | null
    email?: string | null
  }

  export type UserUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeacherUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataEntryOperatorUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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