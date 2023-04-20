export type LogType = 'error' | 'warn' | 'info'
export type LogLevel = LogType | 'silent'

export interface LogOptions {
  clear?: boolean
  timestamp?: boolean
  /**
   * @internal
   */
  testInternal: string
}

export interface Logger {
  info(msg: string, options?: LogOptions): void
  warn(msg: string, options?: LogOptions): void
  warnOnce(msg: string, options?: LogOptions): void
  hasWarned: boolean
}

export function showLogger(logger: Logger) {

}
