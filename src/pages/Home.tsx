import React, { useState } from 'react'
import styled from 'styled-components/native'
import urlValidate from '../common/urlValidade'
import { useMutation } from '@apollo/client'
import SORT from '../graphql/mutations/SORT'
import { Linking, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

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
  margin-bottom: 10px;
  margin-top: 10px;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  background: #2ecc71;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
const Post = styled(WebView)`
  width: 100%;
  height: 100%;
  background: #eeeeee;
`

const AmbedWrapper = styled.View`
  height: 500px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  border-width: 1px;
  border-color: #fff;
`

const Scrool = styled.ScrollView`
  height: 100%;
  width: 100%;
`

const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 10px;
`

const Activity = styled.ActivityIndicator``

const Home = () => {
  const [url, setUrl] = useState<any>('')
  const [post, setPost] = useState<any>(false)
  const [sort, { loading }] = useMutation(SORT)

  const onValidadeURL = (value: string) => {
    if (urlValidate(value)) {
      setUrl(value)
      setPost(value)
      return
    }
    setUrl('')
  }

  const onSort = async () => {
    const { data } = await sort({
      variables: { input: { post } },
    })
    Linking.openURL(data.sort.link)
  }

  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <Scrool>
        <Content>
          <Input onChangeText={onValidadeURL} placeholder="URL do post" />
          <AmbedWrapper>
            <Post source={{ uri: url }} />
          </AmbedWrapper>
          <Button disabled={loading || !post} onPress={onSort}>
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
