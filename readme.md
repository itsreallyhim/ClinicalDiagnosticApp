# Clinical Diagnostic Tool

## Backend

1. Open ClinicalDiagnosticApp.sln in Visual Studio
2. Start debugging

## Front End

1. `cd clinetapp`
2. `npm install` This installs the node modules required
3. `npm run test:unit` Run unit tests for all configured componets
4. `npm run serve` Run local version of the Vue App


## Database

### Connecting to the DB via Sql Server Management Studio (SSMS)
1. Connect to Server using the following details:
   - **Server Type:** Database Engine
   - **Server Name:** miller-health.database.windows.net
   - **Authentication:** SQL Server Authentication
   - **Login:** Details provided

You will be required to login to your Azure account when connecting.

### Creating/Updating the DB Context and Models
1. Run the following in the Pacakage Manager Console (replace NAME and PASSWORD with your user id and password):
```
Scaffold-DbContext "Server=miller-health.database.windows.net;Database=MillerHealth;User Id=NAME;Password=PASSWORD" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Migrations/SqlServerMigrations -ContextDir Helpers -Force
```

2. Delete the OnConfiguring method from MillerHealthContext.cs

### Add the connection string to the secret manager
1. Right click on the ClinicalDiagnosticApp project in the solution explorer
2. Select 'Manage User Secrets'
#### SQL Server
3. Add the following: (replace NAME and PASSWORD with your user id and password)
```
{
  "ConnectionStrings": {
    "Database": "Server=miller-health.database.windows.net;Database=MillerHealth;User Id=NAME;Password=PASSWORD"
  }
}
```
#### MYSQL
3. Add the following, or replace the SQL Database string
```
{
  "ConnectionStrings": {
    "Database": "server=hostname;port=3306;user=username;password=password;database=database"
  }
}
```
