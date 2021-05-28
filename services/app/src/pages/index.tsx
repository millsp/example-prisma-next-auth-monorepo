import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

// ========= NEXT =========
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	if (session) return { props: { session } };

	return {
		redirect: {
			destination: `/api/auth/signin`,
			permanent: false,
		},
	};
};

// ========= COMPONENT =========
const Index = ({ session }) => {
	console.log(session);

	return (
		<div>
			Hello, World!
		</div>
	);
};

export default Index;
