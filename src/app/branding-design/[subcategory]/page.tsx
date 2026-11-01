import type { Metadata } from "next";
import CategorySubcategoryServicePage, {
  generateMetadata as getSubcategoryMetadata,
  generateStaticParams as getSubcategoryStaticParams,
} from "../../[category]/[subcategory]/page";

export function generateStaticParams() {
  const allParams = getSubcategoryStaticParams();
  return allParams
    .filter((p) => p.category === "branding-design")
    .map((p) => ({ subcategory: p.subcategory }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}): Promise<Metadata> {
  const { subcategory } = await params;
  return getSubcategoryMetadata({
    params: Promise.resolve({ category: "branding-design", subcategory }),
  });
}

export default async function BrandingDesignSubcategoryPage({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  return (
    <CategorySubcategoryServicePage
      params={Promise.resolve({ category: "branding-design", subcategory })}
    />
  );
}
