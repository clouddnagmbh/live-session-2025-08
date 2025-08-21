### 🚀 Step-by-Step Workshop Branches

This repository is structured with individual branches corresponding to each
major step covered in the live session on
`SAP Cloud Application Programming Model: From Development to Deployment`.

This allows you to check out any specific stage of the project and see the exact
code changes made. The `main` branch contains the final, completed application.

Here is a breakdown of the branches and the topics they cover:

- **[01-data-model](https://github.com/<your-username>/<your-repo>/tree/01-data-model)**
  - **Focus:** Defining the core data model for the application using CDS in
    `db/schema.cds`.

- **[02-service-definition](https://github.com/<your-username>/<your-repo>/tree/02-service-definition)**
  - **Focus:** Exposing the data model as an OData service using
    `srv/service.cds`.

- **[03-initial-data](https://github.com/<your-username>/<your-repo>/tree/03-initial-data)**
  - **Focus:** Adding initial sample data to the application using CSV files.

- **[04-fiori-ui](https://github.com/<your-username>/<your-repo>/tree/04-fiori-ui)**
  - **Focus:** Generating and adding a Fiori Elements user interface to the
    `app/` folder.

- **[05-hana-cloud](https://github.com/<your-username>/<your-repo>/tree/05-hana-cloud)**
  - **Focus:** Configuring the application for deployment to an SAP HANA Cloud
    database.

- **[06-xsuaa](https://github.com/<your-username>/<your-repo>/tree/06-xsuaa)**
  - **Focus:** Integrating the XSUAA service to add authentication and
    authorization.

- **[07-workzone](https://github.com/<your-username>/<your-repo>/tree/07-workzone)**
  - **Focus:** Adding the necessary configurations to integrate the application
    into SAP Build Work Zone.

- **[08-cross-navigation](https://github.com/<your-username>/<your-repo>/tree/08-cross-navigation)**
  - **Focus:** Setting up intent-based cross-application navigation for the Work
    Zone launchpad.

- **[09-mta](https://github.com/<your-username>/<your-repo>/tree/09-mta)**
  - **Focus:** Finalizing the `mta.yaml` file to package the entire application
    (database, service, UI) into a Multi-Target Application archive for
    deployment.

### How to Use These Branches

You can explore a specific step locally by checking out the branch:

```sh
# Example: Switch to the service definition step
git checkout 02-service-definition
```
