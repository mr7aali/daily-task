import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '../Components/contexts/AuthProvider'
import '../styles/globals.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  )
}
