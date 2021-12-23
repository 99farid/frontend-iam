const trackCode = new Map<number, string>()
trackCode.set(1, 'Insert Asset')
trackCode.set(2, 'Update Asset')
trackCode.set(3, 'Insert Transaction In')
trackCode.set(4, 'Insert Transaction Out')

const noTrack: string = 'no track activity'

export { trackCode, noTrack }