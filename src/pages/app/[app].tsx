import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Counter } from "../../components/Counter";

const AppPage = () => {
  const router = useRouter();
  return <Counter appName={router.query.app as string} />;
};

const DynamicAppPage = dynamic(
  {
    loader: async () => AppPage,
  },
  { ssr: false }
);

export default DynamicAppPage;
