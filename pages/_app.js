import AuthProvider from '../Components/contexts/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
)}
