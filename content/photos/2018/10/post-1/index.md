---
title: "Post 1 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 1 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 1." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2018-10-17T14:40:00-05:00
lastmod: 2019-04-11T20:33:00-05:00 # Comment-out this line with a # if content is unchanged
draft: true # Make it "true" if you don't want Hugo to "publish" yet
featured_image: letters-691842_1280x856.jpg # Or whatever image you want to use
featured_image_alt: Letters for old-style typesetting # Always include an ALT tag for accessibility
featured_image_caption: "Image: Pixabay" # Quotation marks allow colons, semicolons, etc.
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.

### Subheading (H3)

Text here.

And here are some examples of how to use the `img` shortcode in `/layouts/shortcodes` (note that the images must be in the same folder with the content, because of how Hugo bundles do image processing, so that's why the `src` references don't include a folder upfront):

{{< img src="Typography-scr-cap-2-2018-10-16.jpg" alt="Thin and dim text that is hard to read" >}}

{{< img src="Typography-scr-cap-3-2018-10-16.jpg" alt="More thin and dim text that is hard to read" >}}

{{< img src="Typography-scr-cap-4-2018-10-16.jpg" alt="Still more thin and dim text that is hard to read" >}}

Closing text. That ends Post 1!