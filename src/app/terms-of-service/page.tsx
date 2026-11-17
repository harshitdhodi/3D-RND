import PolicyPageLayout from "@/components/PolicyPageLayout";
import { getPolicyData } from "@/lib/getPoliciesData";

export default async function TermsOfServicePage() {
  const policyData = await getPolicyData("terms-of-service");

  return <PolicyPageLayout data={policyData} />;
}
