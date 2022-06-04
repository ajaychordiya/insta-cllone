import { getProviders, signIn as signInProvider } from "next-auth/react";
import Header from "../../components/Header";

export default function signIn(props: any) {
  return (
    <>
      {/* console.log(props) */}

      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <img src="https://links.papareact.com/ocw" className="w-80" />

        <p className="font-xs italic"> Login for enjoy the instagram</p>

        {Object.values(props.providers).map((provider: any) => (
          <div key={provider.name} className="mt-40">
            <button
              onClick={() => signInProvider(provider.id, { callbackUrl: "/" })}
              className="p-3 bg-blue-500 rounded-lg text-white font-semibold"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
