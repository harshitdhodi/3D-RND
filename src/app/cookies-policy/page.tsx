import PolicyPageLayout from "@/components/PolicyPageLayout";
import { getPolicyData } from "@/lib/getPoliciesData";

export default async function CookiesPolicyPage() {
  const policyData = await getPolicyData("cookies-policy");

  return <PolicyPageLayout data={policyData} />;
}
