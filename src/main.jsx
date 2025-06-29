import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        hideProgressBar={false}
      />
      <BrowserRouter>
        <ToastContainer autoClose={2000} position="bottom-right" />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
