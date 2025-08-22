import { Metadata } from "next";

export const siteConfig = {
  name: "Snap Insta Ink",
  domain: "snapinsta.ink",
  shortName: "Snap Insta Ink",
  creator: "Umair Khan",
  description:
    "Snap Insta Ink is the ultimate tool for downloading Instagram videos effortlessly.",
  ogDescription:
    "Snap Insta Ink is the ultimate tool for downloading Instagram videos effortlessly.",
  url: "https://snapinsta.ink",
};

export const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.creator,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/icon.png",
  },
  manifest: "/manifest.json",
};
