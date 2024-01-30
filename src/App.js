import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import{
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react"
function App({signOut}){
  return(
    <View>
      <Card>
        <Image src={logo} className='App-logo' alt="logo"/>
        <Heading level={1}>Welcome</Heading>
      </Card>
      <Button onClick={signOut}>Log out</Button>
    </View>
  )
}
export default withAuthenticator(App);