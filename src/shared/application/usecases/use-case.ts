export interface UseCase<Input, Output> {
  execute(Input: Input): Output | Promise<Output>;
}
