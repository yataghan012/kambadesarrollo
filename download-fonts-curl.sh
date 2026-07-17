#!/bin/bash
mkdir -p public/fonts
wget -O public/fonts/playfair-display-regular.woff2 "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PweD.woff2" || echo "failed"
wget -O public/fonts/playfair-display-700.woff2 "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PweD.woff2" || echo "failed"
wget -O public/fonts/playfair-display-italic.woff2 "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFmD-vYSZviVYUb_rj3ij__anPXDTngZbm2WBN2Pw.woff2" || echo "failed"
wget -O public/fonts/inter-300.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.woff2" || echo "failed"
wget -O public/fonts/inter-regular.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.woff2" || echo "failed"
wget -O public/fonts/inter-600.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.woff2" || echo "failed"
