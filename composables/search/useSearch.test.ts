import { it, expect, describe } from 'vitest'
import { useSearch } from './useSearch'

describe('useSearch', () => {
  const { results: emptyResults } = useSearch('')
  it('should return no results when empty string passed to useSearch', () => {
    expect(emptyResults?.value).toEqual([])
  })
  const { results: someResults } = useSearch('Buddy')
  it('should return mutliple results when search term is passed to useSearch', () => {
    expect(someResults.value?.length).toBeGreaterThanOrEqual(1)
  })
})