---
title: "Image Board"
description: "Upload and comment images"
path: "/portfolio/imageboard"
thumbnail: "image_board.jpg"
---

First time working with Vue. This project came to life when I realized the world was in need of more blurry and shaky b-roll images. Everybody has the permission to upload or delete any picture, that guarantees there are no bad pictures on the site. The comment section underneath a picture is where the real action is at, just like on reddit or youtube. My plans for the future are to come up with a better branding and to deploy this.

- A Node Express and SQL database backend
- New images get handled using Multer, then uploaded to AWS S3, a reference gets stored in the database
- The image board displayes the 20 most recent pictures, upon scrolling down more images are being loaded and displayed
- Navigation is provided with hash routing
- Useres can write comments on individal images
- Users can delete images
