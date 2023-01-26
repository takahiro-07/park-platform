import { render } from '@testing-library/react'

import Home from './'

describe('Sampleコンポーネント', () => {
  test('レンダーされる', () => {
    const { getByText } = render(<Home />)
    expect(getByText('home')).toBeTruthy()
  })
})
