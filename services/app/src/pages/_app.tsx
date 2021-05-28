import type { AppProps } from "next/app";

import { Provider as AuthProvider } from "next-auth/client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

// ========= APP =========
function MyApp({ Component, pageProps }: AppProps) {
	return (

		<AuthProvider
			options={{ clientMaxAge: 0, keepAlive: 0 }}
			session={pageProps.session}
		>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
				<Component {...pageProps} />
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default MyApp;
