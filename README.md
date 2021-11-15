# Azure Resource Naming

This is a tool helping you to name azure resources. Microsoft recommends that you define naming convention here.

https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming#example-names-storage

This tool is based on Klabbet naming convention. It uses the abbreviations of azure services that are found here.

https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations

And it takes all the naming constraints into account when generating the name proposal. You will find an updated list of naming constraints here.

https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules

## Run, Test, Build

It's easy.

```
npm install
```

And then

```
# start a local development build
npm start
```

And then

```
# run the tests
npm test
```

And finally

```
# build an optimized production bundle
npm run build
```

## Contributing

Adding, removing azure resources. Edit the `scripts/azure-resource-types.csv` in your favorite spreadsheet editor, that can export to semicolon separated file.

For development conventions, please refer to [Klabbet Wiki](https://klabbet.atlassian.net/wiki).
