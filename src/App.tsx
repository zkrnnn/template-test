import UIProvider from './libs/mantine/provider'
import QueryProvider from './libs/mantine/provider'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <UIProvider>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </UIProvider>
  )
}
