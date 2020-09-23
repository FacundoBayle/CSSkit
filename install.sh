#!/usr/bin/env bash

KIT_DIR=CSSkit
VERSION=$1

#delete csskit folder if exists
if [ -d "$KIT_DIR" ]; then rm -Rf $KIT_DIR; fi

# curl to get latest release

if [ "$1" = "" ]; then
  echo ""
  echo "Version not defined, downloading last version..."

  curl -s https://api.github.com/repos/FacundoBayle/CSSkit/releases/latest \
  | grep "browser_download_url.*zip" \
  | cut -d : -f 2,3 \
  | tr -d \" \
  | wget -qi -

else
  echo ""
  echo "Downloading v""$VERSION""..."
  wget -q "https://github.com/FacundoBayle/CSSkit/releases/download/v""$VERSION""/CSSkit-""$VERSION"".zip"
fi

echo "Download complete."

# unzip
echo "Unziping..."
unzip -q *.zip
echo "Complete."
echo ""

#delete ziped
rm -Rf *.zip

