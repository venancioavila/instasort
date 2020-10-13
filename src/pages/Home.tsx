import React, { useState } from 'react'
import styled from 'styled-components/native'
import urlValidate from '../common/urlValidade'
import InstagramEmbed from 'react-native-embed-instagram'
import { useQuery } from '@apollo/client'
import SORT from '../graphql/queries/SORT'
import { Linking } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  background: #2c3e50;
  
`
const Input = styled.TextInput`
  width: 100%;
  background: white;
  height: 50px;
  border-radius: 5px;
  font-size: 19px;
  box-shadow: 1px 1px 1px black;
  padding-horizontal: 5px;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  background: #2ecc71;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

const Embed = styled(InstagramEmbed)`
  width: 100%;
  margin-bottom: 10px;
`

const AmbedWrapper = styled.View`
  height: 300px;
`

const Scrool = styled.ScrollView`
height: 100%;
width: 100%;
`;

const Content = styled.View`
height: 100%;
width: 100%;
align-items: center;
  padding: 10px;
`;

const Activity = styled.ActivityIndicator``

const Home = () => {
  const [url, setUrl] = useState<any>('')
  const [post, setPost] = useState<any>(false)
  const [loading, setLoading] = useState(false)
  const { fetchMore } = useQuery(SORT)

  const onValidadeURL = (value: string) => {
    if (urlValidate(value)) {
      const id = value.split('/')
      console.log(id[4])
      setUrl(id[4])
      setPost(value)
      return
    }
    setUrl(false)
  }

  const onSort = async () => {
    setLoading(true)
    const { data } = await fetchMore({
      variables: { input: { post } },
    })
    Linking.openURL(data.sort.link)
    setLoading(false)
  }

  return (
    <Wrapper>
      <Scrool>
        <Content>
      {/* @ts-ignore */}
      {!!url ? <Embed showAvatar id={url} /> : <AmbedWrapper />}
      <Input onChangeText={onValidadeURL} placeholder="URL do post" />
      <Button disabled={loading} onPress={onSort}>
        <ButtonText>
          {loading ? <Activity color="white" /> : 'Sortear'}{' '}
        </ButtonText>
      </Button>
      </Content>
      </Scrool>
      </Wrapper>
  )
}

export default Home
