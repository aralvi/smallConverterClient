import { useRouter } from "next/router";
import ConvertComponent from "@components/ConvertComponent";
import HowToConvert from "@components/HowToConvert";
import Meta from "@constants/ConversionMeta";

const Convert = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <ConvertComponent meta={Meta[id]} />
      {/* How To Convert */}
      <HowToConvert meta={Meta[id]} />
    </div>
  );
};

export default Convert;
