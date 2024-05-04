import { Either, left, right } from "./either"

function doSomehting(shouldSuccess: boolean): Either<string, number> {
    if(shouldSuccess) {
        return right(10)
    } else {
        return left('error')
    }
}

test('success result', () => {
    const result = doSomehting(true)

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
})

test('error result', () => {
    const result = doSomehting(false)

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
})
