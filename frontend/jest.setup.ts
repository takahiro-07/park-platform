import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { server } from './test/mock/server'

// // グローバルmock
// jest.mock('lib/token')

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// 下をコメントアウト
// beforeAll(() => server.listen())
// afterEach(async () => {
//   server.resetHandlers()
//   jest.clearAllMocks()
// })

// // eslint-disable-next-line @typescript-eslint/no-empty-function
// afterEach(() => {})
// afterAll(() => server.close())

// jest.mock('next/router', () => require('next-router-mock'))
// jest.mock('next/dist/client/router', () => require('next-router-mock'))
