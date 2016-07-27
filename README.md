# fe
> a frontend dep fetcher built on the npm registry

## installation 

```
npm install fe-pm
```

## usage

- interactive command

  ```
  fe install <packages>
  ```

- install from `package.json`

  ```
  // package.json
  {
    "name": "my app",
    "fe": {
      "cheerio": "0.0.1"
    }
  }
  ```

  ```
  fe install
  ```

## local development

1. fork and clone this repo
2. `cd fe-pm`
3. `npm install`
