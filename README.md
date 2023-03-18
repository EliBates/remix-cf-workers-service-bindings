# Remix Cloudflare Worker Service Bindings

This project shows an example of a remix app deployed to cloudflare pages.
It uses cloudflare worker service bindings to make an API gateway which interfaces an example user service.

![Cloudflare worker service bindings](https://developers.cloudflare.com/assets/service-bindings-comparison-b0054666.png)

![Cloudflare worker service bindings](https://i.ibb.co/vvP4Qzd/services.png)


## Deployment

### Pre-requisite:
Make sure you set up the wrangler CLI and are signed into your CF account.


### Steps
1. cd into the services/user folder

```bash
  yarn publish
```

2. cd into services/web-gateway folder
```bash
  yarn publish
```

3. Deploy the git repository for the web on cloudflare
![Settings for setting up git repo on cloudflare](https://i.ibb.co/zbYQtFQ/image-4.png)

