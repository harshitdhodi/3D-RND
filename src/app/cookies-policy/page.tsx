import PolicyPageLayout from "@/components/PolicyPageLayout";
import { getPolicyData } from "@/lib/getPoliciesData";
import { getPageComponents, isPageHidden } from "@/lib/getPageComponents";
import { notFound } from "next/navigation";

export default async function CookiesPolicyPage() {
  const [policyData, pageComponents, hidden] = await Promise.all([
    getPolicyData("cookies-policy"),
    getPageComponents("cookies-policy"),
    isPageHidden("cookies-policy"),
  ]);

  if (hidden) {
    notFound();
  }

  return <PolicyPageLayout data={policyData} pageComponents={pageComponents} />;
}
