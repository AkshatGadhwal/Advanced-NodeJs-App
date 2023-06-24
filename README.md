# Node.js CRUD API Application

This is a server-side API application built using Node.js to perform CRUD operations on user data. It provides endpoints for creating, reading, updating, and deleting users, as well as fetching a list of users with pagination.

## Requirements

-   Node.js (version 20.2.0)
-   npm (version 9.7.2)

## Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/AkshatGadhwal/Advanced-NodeJs-App.git
    ```

2. Navigate to the project directory:

    ```shell
    cd Advanced-NodeJs-App
    ```

3. Install dependencies:
    ```shell
    npm install
    ```

## Configuration

Make sure to set the following environment variables:

-   `API_KEY`: Valid API key required for authorization.

## Usage

1. Start the server:

    ```shell
    npm start
    ```

2. The server will start running on `http://localhost:6969` ( or you can configure in your .env).

## Data Storage

User data is stored in memory using the users.json file. When the server starts, it loads the initial data from the file and performs all CRUD operations in memory. Note that the data is not persisted across server restarts.

## API Endpoints

### 1. Get User List

-   Endpoint: `GET /api/users/`
-   Description: Get a list of all users in pagination.
-   Example:
    ```http
    GET /api/users/?page=1&perPage=10
    API_KEY: api_key_1
    ```

### 2. Get User by ID

-   Endpoint: `GET /api/users/:id`
-   Description: Get a specific user by ID.
-   Parameters:
    -   `id` (required): ID of the user.
-   Example:
    ```http
    GET /api/users/1
    API_KEY: api_key_1
    ```

### 3. Create User

-   Endpoint: `POST /api/users/`
-   Description: Create a new user.
-   Request Body:
    -   `email` (required): Email address of the user.
    -   `name` (required): Name of the user.
-   Example:

    ```http
    POST /api/users/
    Content-Type: application/json
    API_KEY: api_key_1

    {
      "email": "jane@example.com",
      "name": "Jane Smith"
    }
    ```

### 4. Update User

-   Endpoint: `PUT /api/users/:id`
-   Description: Update an existing user by ID.
-   Parameters:
    -   `id` (required): ID of the user.
-   Request Body:
    -   `email` (required): Email address of the user.
    -   `name` (required): Name of the user.
-   Example:

    ```http
    PUT /api/users/1
    Content-Type: application/json
    API_KEY: api_key_1

    {
      "email": "jane.smith@example.com",
      "name": "Jane Smith"
    }
    ```

### 5. Delete User

-   Endpoint: `DELETE /api/users/:id`
-   Description: Delete a user by ID.
-   Parameters:
    -   `id` (required): ID of the user.
-   Example:
    ```http
    DELETE /api/users/1
    API_KEY: api_key_1
    ```

## Authorization

API authorization is implemented for all endpoints. Make sure to include the `API_KEY` in the request header for successful authorization.

## Error Handling

The API will return appropriate error responses in case of validation failures, missing parameters, or authorization errors.

## Validation

The API performs the following validation checks:

-   All required fields (`email` and `name`) must be present in the

request body.

-   The `email` field must be a non-empty and valid email address.
-   The `name` field must be a non-empty alphabetical string.
-   The `email` field must be unique for each user.

## Examples

### Example 1: Get User List

```http
GET /api/users/?page=1&perPage=10
API_KEY: api_key_1
```

Response:

```json
{
    "page": 1,
    "perPage": 10,
    "total": 25,
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com"
        }
        // ... other users
    ]
}
```

### Example 2: Get User by ID

```http
GET /api/users/1
API_KEY: api_key_1
```

Response:

```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
```

### Example 3: Create User

```http
POST /api/users/
Content-Type: application/json
API_KEY: api_key_1

{
  "email": "jane@example.com",
  "name": "Jane Smith"
}
```

Response:

```json
{
    "id": 26,
    "name": "Jane Smith",
    "email": "jane@example.com"
}
```

### Example 4: Update User

```http
PUT /api/users/1
Content-Type: application/json
API_KEY: api_key_1

{
  "email": "jane.smith@example.com",
  "name": "Jane Smith"
}
```

Response:

```json
{
    "id": 1,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
}
```

### Example 5: Delete User

```http
DELETE /api/users/1
API_KEY: api_key_1
```

Response:

```json
{
    "id": 1,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
