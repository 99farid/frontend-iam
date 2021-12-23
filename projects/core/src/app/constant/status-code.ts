const statusCode = new Map<number, string>()
statusCode.set(1, 'SA1')
statusCode.set(2, 'SA2')
statusCode.set(3, 'SA3')
statusCode.set(4, 'SA4')
statusCode.set(4, 'SA5')

const noStatus: string = 'no status code'

export { statusCode, noStatus }