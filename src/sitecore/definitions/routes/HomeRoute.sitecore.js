// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Carousel component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addRouteType({
    name: 'Base',
    icon: SitecoreIcon.Hat,
    fields: [
      {
        name: 'pageTitle',
        displayName: 'Page Title',
        section: 'Meta',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'pageDescription',
        displayName: 'Page Description',
        section: 'Meta',
        type: CommonFieldTypes.MultiLineText,
      },
    ],
  });

  manifest.addRouteType({
    name: 'Home Route',
    inherits: ["Base"],
    icon: SitecoreIcon.Home,
    fields: [
      {
        name: 'logo',
        displayName: 'Logo',
        section: "Meta",
        type: CommonFieldTypes.Image,
      },
    ],
  });

  manifest.addRouteType({
    name: 'Section Route',
    inherits: ["Base"],
    icon: SitecoreIcon.Handshake,
    fields: [
      {
        name: 'backgroundImage',
        displayName: 'Background Image',
        section: "Meta",
        type: CommonFieldTypes.Image,
      },
    ],
  });
}
