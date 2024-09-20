# QRcode

![Dashboard](https://raw.githubusercontent.com/Beta-Technologies/grafana-panel-qrcode/refs/heads/main/src/img/dashboard.png)

## Overview / Introduction
Utilizing the react QR code library, this plugin takes a string and renders it as a QR code. Variable interpolation is implemented.

## Requirements
Grafana >= 9.0.0

## Getting Started

After adding the panel, set the value property to the string to be rendered

## Package
### Sign
```
export GRAFANA_ACCESS_POLICY_TOKEN=<redacted>
npx @grafana/sign-plugin@latest --rootUrls https://github.com/Beta-Technologies/grafana-panel-qrcode
```

### Build / Zip / Generate SHA1

```
npm run build
mv dist betatech-qrcode-panel
zip betatech-qrcode-panel-1.0.0.zip betatech-qrcode-panel -r
rm -rf betatech-qrcode-panel
shasum betatech-qrcode-panel-1.0.0.zip 
```

### Validate
Run validator (save time in automated steps of approval cycle)
```
docker run --pull=always grafana/plugin-validator-cli https://github.com/Be
ta-Technologies/grafana-panel-qrcode/raw/refs/heads/main/betatech-qrcode-panel-1.0.0.zip
```

### Push latest
```
git add -A
git commit -m 'new version of plugin'
git push
```



## License

MIT License, see [LICENSE](https://github.com/Beta-Technologies/grafana-panel-qrcode/blob/main/LICENSE).
