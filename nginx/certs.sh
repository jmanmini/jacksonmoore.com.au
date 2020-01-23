sudo certbot certonly --manual --preferred-challenges=dns --server https://acme-v02.api.letsencrypt.org/directory --email jackson@ckjom.com -d *.jacksonmoore.com.au -d jacksonmoore.com.au
openssl pkcs12 -export -out certificate.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem

C:\Users\jacks\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs\etc\letsencrypt\archive