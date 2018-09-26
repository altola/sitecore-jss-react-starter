// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest, FieldStorage } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'ContentBlock',
    displayName: 'Content Block',
    fieldEditorFields: ["image"],
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText, sortOrder: 100, required: true  },
      { name: 'content', type: CommonFieldTypes.RichText, sortOrder: 0 },
      { name: 'image', type: CommonFieldTypes.Image, sortOrder: 50, storage: FieldStorage.Shared },
    ],
    params: ["headingStyle"]
  });
}
