import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
