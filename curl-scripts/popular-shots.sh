#!/bin/bash

curl "https://api.dribbble.com/v2/popular_shots" \
  --include \
  --request GET \
  --header "Authorization: Bearer 14bf2a248a42fcf7989fe3cbb10fc5377291102486a976e6efd54a22462ba549"

echo
