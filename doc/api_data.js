define({ "api": [
  {
    "type": "GET",
    "url": "/api/user",
    "title": "user list",
    "name": "All-User-Lists",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"User Lists \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"No data\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "GET",
    "url": "/api/user/role",
    "title": "User Roles List",
    "name": "All-User-Role-List",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"User Role Lists \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"No data\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "DELETE",
    "url": "/api/user",
    "title": "delete user",
    "name": "Delete-User",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Deleted successfully \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"_id\": \"6093d5329d21796ff463e422\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "PUT",
    "url": "/api/user",
    "title": "update user",
    "name": "Update-User-Details",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Updated successfully \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"firstName\": \"sanjay\",\n   \"lastName\": \"kumar\",\n   \"phone\": 9090911111,\n   \"password\": \"11111\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "admin login",
    "name": "Admin-Login-POST",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Login In Successfully \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n    \"userName\": \"admin\",\n    \"password\": \"admin\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"Wrong Username/Password\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/sign-up",
    "title": "admin sign-up",
    "name": "User-Sign-Up-POST",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Sign Up Successfully \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"firstName\": \"sanjay\",\n   \"lastName\": \"kumar\",\n   \"userName\": \"sanju2212\",\n   \"email\": \"sanjayjnu22@gmail.com\",\n   \"phone\": 9090911111,\n   \"password\": \"11111\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"Already exist user\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.ts",
    "groupTitle": "Auth"
  }
] });
