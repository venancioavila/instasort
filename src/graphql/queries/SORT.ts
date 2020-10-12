import gql from 'graphql-tag'

const SORT = gql`
  query Sort($input: SortInput) {
    sort(input: $input) {
      profile
      link
    }
  }
`

export default SORT
