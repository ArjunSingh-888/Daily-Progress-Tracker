# Icon Generation Instructions

This project includes an SVG icon. To generate PNG icons for PWA:

## Option 1: Online Tools
1. Go to https://realfavicongenerator.net/
2. Upload the `icon.svg` file
3. Generate favicons for all platforms
4. Replace `icon-192.png` and `icon-512.png` in the `/public` folder

## Option 2: Using ImageMagick (if installed)
```bash
# Install ImageMagick first if not available
# Then run these commands:

magick convert -background none -resize 192x192 public/icon.svg public/icon-192.png
magick convert -background none -resize 512x512 public/icon.svg public/icon-512.png
```

## Option 3: Manual Creation
Use any graphics editor (Figma, Photoshop, GIMP) to:
1. Create a 192x192px PNG with the app icon design
2. Create a 512x512px PNG with the same design
3. Save as `icon-192.png` and `icon-512.png` in `/public` folder

## Temporary Solution
For testing purposes, you can use simple placeholder images or rename the SVG temporarily.
The app will still work without the PNG icons, but won't install as a PWA on mobile devices.
