import PolicyPageLayout from "@/components/PolicyPageLayout";
import { getPolicyData } from "@/lib/getPoliciesData";
import { getPageComponents, isPageHidden } from "@/lib/getPageComponents";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function TermsOfServicePage() {
  const [policyData, pageComponents, hidden] = await Promise.all([
    getPolicyData("terms-of-service"),
    getPageComponents("terms-of-service"),
    isPageHidden("terms-of-service"),
  ]);

  if (hidden) {
    notFound();
  }

  return <PolicyPageLayout data={policyData} pageComponents={pageComponents} />;
}
