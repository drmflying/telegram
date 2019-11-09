for file in $(find . -iname "*.svg"); do
  right=${file#*_}

  resultName=$(echo $right | tr '0-9' '-')
  echo $resultName
  
  echo $right
  mv $file ${file%/*.svg}/$resultName
done