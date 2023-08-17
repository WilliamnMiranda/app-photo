import { QueryClient, QueryClientProvider } from "react-query";
import PinCode from "./components/pin_code";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PinCode />
      </QueryClientProvider>
    </>
  );
}

export default App;
