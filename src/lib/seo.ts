import { Metadata } from "next";

export const siteConfig = {
    name: "Hira Prasad Welfare Foundation",
    shortName: "HPWF",
    description: "Empowering Lives, Enriching Futures. HPWF provides elderly care, children's welfare, and women's empowerment programs in Samastipur, Bihar.",
    url: "https://www.hpwf.org", // Replace with actual domain when available
    ogImage: "https://www.hpwf.org/og-image.jpg", // Replace with actual image
    links: {
        twitter: "https://twitter.com/hpwf",
        facebook: "https://facebook.com/hpwf",
        instagram: "https://instagram.com/hpwf",
    },
    contact: {
        email: "Singhakshita000@gmail.com",
        phone: "+91-96615-99365",
        address: "Samastipur, Bihar, India",
    },
};

export const defaultMetadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: ["NGO", "Samastipur", "Bihar", "Elderly Care", "Women Empowerment", "Child Welfare", "Charity", "Non-profit"],
    authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
    creator: siteConfig.shortName,
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@hpwf", // Replace with actual handle
    },
    metadataBase: new URL(siteConfig.url), // Fixes relative URL issues for OG images
};

export function constructMetadata({
    title,
    description,
    image = siteConfig.ogImage,
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Samastipur",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "Customer Service",
        "email": siteConfig.contact.email
    },
    "founder": {
        "@type": "Person",
        "name": "Akshita Singh"
    },
    "sameAs": [
        siteConfig.links.facebook,
        siteConfig.links.instagram,
        siteConfig.links.twitter
    ]
};
