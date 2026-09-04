from PIL import Image, ImageOps

# Open image and convert to grayscale
img = Image.open('logo.jpeg').convert('L')

# Invert the image so the white background becomes black, and the dark text becomes white/light gray
inverted = ImageOps.invert(img)

# Now, we want to make the background completely transparent, and the text pure white.
# We can use the 'inverted' image as an alpha mask!
# The whiter the pixel in the inverted image, the more opaque it is.
# So we create a solid white image of the same size, and apply the inverted image as its alpha channel.
solid_white = Image.new('RGBA', img.size, (255, 255, 255, 255))
solid_white.putalpha(inverted)

# Save as PNG
solid_white.save('logo.png')
print("Saved logo.png")
