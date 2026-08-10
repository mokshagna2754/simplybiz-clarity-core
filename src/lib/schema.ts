/**
 * JSON-LD slots. Deliberately empty: no values are invented.
 * Populate from verified SimplyBiz records before launch.
 */
export const organizationSchemaSlot = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SimplyBiz Private Limited",
  slogan: "Simplify | Scale up | Succeed",
  foundingDate: "2022-05",
};

export const localBusinessSchemaSlot = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SimplyBiz Private Limited",
};

export const serviceSchemaSlot = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: "SimplyBiz Private Limited" },
};

export const faqSchemaSlot = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as unknown[],
};
