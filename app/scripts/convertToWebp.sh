read image_folder

# Loop through each file in the folder
for file in "$image_folder"/*
do
  # Check if the file is an image
  if [[ -f "$file" && "$file" =~ \.(jpg|JPG|png|PNG)$ ]]; then
    # Convert the image to WebP format
    output_file="${file%.*}.webp"
    cwebp "$file" -o "$output_file"
    echo "Converted: $file -> $output_file"
  fi
done