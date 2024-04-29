'use client'
import { useEffect } from 'react';

const useSEO = ({
  title = '',
  description = '',
  canonical = '',
  ogTitle = '',
  ogDescription = '',
  ogImage = '',
  ogUrl = '',
}) => {
  useEffect(() => {
    document.title = title;

    // Update meta description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', description);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'description');
      newMetaTag.setAttribute('content', description);
      document.head.appendChild(newMetaTag);
    }

    // Update canonical URL
    if (canonical) {
      const linkTag = document.querySelector('link[rel="canonical"]');
      if (linkTag) {
        linkTag.setAttribute('href', canonical);
      } else {
        const newLinkTag = document.createElement('link');
        newLinkTag.setAttribute('rel', 'canonical');
        newLinkTag.setAttribute('href', canonical);
        document.head.appendChild(newLinkTag);
      }
    }

    // Update Open Graph meta tags
    if (ogTitle || ogDescription || ogImage || ogUrl) {
      const ogTags = [
        { property: 'og:title', content: ogTitle || title },
        { property: 'og:description', content: ogDescription || description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: ogUrl || canonical },
      ];

      ogTags.forEach(({ property, content }) => {
        const ogTag = document.querySelector(`meta[property="${property}"]`);
        if (ogTag) {
          ogTag.setAttribute('content', content);
        } else {
          const newOgTag = document.createElement('meta');
          newOgTag.setAttribute('property', property);
          newOgTag.setAttribute('content', content);
          document.head.appendChild(newOgTag);
        }
      });
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl]);
};

export default useSEO;
