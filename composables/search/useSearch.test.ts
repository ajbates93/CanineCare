import { it, expect, describe } from 'vitest'
import { useSearch } from './useSearch'

describe('useSearch', async () => {
  const search = useSearch()
  const { data: emptyResults } = await search.searchDogs('')
  it('should return no results when empty string passed to useSearch', () => {
    expect(emptyResults.value).toEqual([])
  })
  const { data: someResults } = await search.searchDogs('Buddy')
  it('should return mutliple results when search term is passed to useSearch', () => {
    expect(someResults.value?.length).toBeGreaterThanOrEqual(1)
  })
})