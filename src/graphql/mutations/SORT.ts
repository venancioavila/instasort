import gql from 'graphql-tag'

const SORT = gql`
  mutation Sort($input: SortInput) {
    sort(input: $input) {
      profile
      link
    }
  }
`

export default SORT
