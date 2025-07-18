declare module "my-lib" {
  export function doSomething(input: string): number;

  export interface Options {
    verbose?: boolean;
  }
}
