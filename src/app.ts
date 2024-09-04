export default function Dec<T>(
  _target: T,
  _context: ClassFieldDecoratorContext,
) {
  console.log("hello world");
}

export class Test {
  @Dec
  private property: string = "hello";

  doSomething() {
    console.log(this.property);
  }
}
