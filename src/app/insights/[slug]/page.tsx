export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;

export {
  default,
  generateStaticParams,
  generateMetadata,
} from "../../blogs/[slug]/page";
