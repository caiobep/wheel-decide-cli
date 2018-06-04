export function lookForExpression(
  arrayToLook: string[],
  expressions: string[],
  callbackFunction: () => void
): boolean {
  expressions.forEach(expression => {
    if (arrayToLook.includes(expression)) {
      return !!callbackFunction
        ? callbackFunction()
        : true
    }
  })
  return false
}
