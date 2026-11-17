import PolicyPageLayout from "@/components/PolicyPageLayout";
import { getPolicyData } from "@/lib/getPoliciesData";

export default async function PrivacyPolicyPage() {
  const policyData = await getPolicyData("privacy-policy");

  return <PolicyPageLayout data={policyData} />;
}
