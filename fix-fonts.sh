mkdir -p public/fonts
curl -L -o public/fonts/playfair-display-italic.woff2 "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_qiTXtHA-Q.woff2"
curl -L -o public/fonts/playfair-display-regular.woff2 "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2"
cp public/fonts/playfair-display-regular.woff2 public/fonts/playfair-display-700.woff2
curl -L -o public/fonts/inter-regular.woff2 "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
cp public/fonts/inter-regular.woff2 public/fonts/inter-300.woff2
cp public/fonts/inter-regular.woff2 public/fonts/inter-600.woff2
