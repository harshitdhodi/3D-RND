// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = false;

export {
  default,
  generateStaticParams,
  generateMetadata,
} from "../../blogs/[slug]/page";
