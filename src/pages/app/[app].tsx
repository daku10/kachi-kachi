import { useRouter } from "next/router";
import { Counter } from "../../components/Counter";

const AppPage = () => {
  const router = useRouter();
  return <Counter appName={router.query.app as string} />;
};

export default AppPage;
