## Example of application to interact with opcenter REST API

Notes: Before you run this application, you need to make sure that the opcenter excore it can be accessed. this example application is tested on opcenter execution core 2210

The credentials is actually in JSON format, but we put the token generator in `src\utils\security.util.ts` to convert json payload into Base64 encoded string. This utils is used in service `src\service\ndo.service.ts`.

### Config the Environment Variables
Rename the `.env.example` into `.env`
```bash
APP_OPCENTER_HOST=excr2210
APP_OPCENTER_USERNAME=Administrator
APP_OPCENTER_PASSWORD=123123
```

### Running the application

#### Install Dependencies
```bash
yarn
```

#### Run the application
```bash
yarn dev
```