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
    "filename": "src/routes/user.route.ts",
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
    "filename": "src/routes/user.route.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "POST",
    "url": "/api/user/role",
    "title": "Create User Role",
    "name": "Create-User-Role",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Role created Successfully\",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"title\": \"customer\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"Already Exist\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.route.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "DELETE",
    "url": "/api/user",
    "title": "Delete User",
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
    "filename": "src/routes/user.route.ts",
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
    "filename": "src/routes/user.route.ts",
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
    "filename": "src/routes/auth.route.ts",
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
    "filename": "src/routes/auth.route.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/api/category",
    "title": "admin add category and sub category",
    "name": "Admin-Add-Category-SubCategory-POST",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Added successfully\",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"name\": \"Fruit\",\n   \"categoryImage\": (binary),\n   \"parentId\": \"asas7878b9un9ninni\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n  \"error\": true,\n  \"message\": \"message\"\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "GET",
    "url": "/api/category/list<id>",
    "title": "category and sub category List list",
    "name": "All-category-sub-category_list",
    "group": "Category",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"category Lists \",\n  \"data\": object\n}",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "DELETE",
    "url": "/api/category",
    "title": "delete category or sub category",
    "name": "Delete-category-or-sub-category",
    "group": "Category",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"deleted successfully \",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n   \"_id\": \"djbsakdksjd473bk\",\n }",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "PUT",
    "url": "/api/category",
    "title": "update category or sub category",
    "name": "Update-category-or-sub-category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
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
        "content": "{\n   \"status\": \"true\",\n   \"name\": \"kumar\"\n }",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "POST",
    "url": "/api/category/attribute",
    "title": "add category attributes",
    "name": "add-category-attributes",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
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
        "content": "{\n   \"categoryId\": \"609ebccaf87a85672ccbd47a\",\n   \"name\": \"four Wheeler\",\n   \"values\":[{\"name\": \"maruti\"}, {\"name\": \"ford\"}, {\"name\": \"yamaha\"}]\n }",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/category/attribute?id=<categoryId>",
    "title": "category Attribute List",
    "name": "category-attribute-list",
    "group": "Category",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"sub category Lists \",\n  \"data\": object\n}",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "GET",
    "url": "/api/category/sub-category/<parentId>",
    "title": "sub category List list",
    "name": "sub-category-list",
    "group": "Category",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"sub category Lists \",\n  \"data\": object\n}",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/api/category/attribute",
    "title": "update category attributes status",
    "name": "update-category-attributes-status",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
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
        "content": "{\n   \"status\": true | false,\n   \"_id\": \"60a8a6a40018c046b8c29d5e\",\n   \"valueId\": 60a8a6a40018c046b8c29d60\n   \"type\": \"attr\" || \"attr2\"\n }",
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
    "filename": "src/routes/category.route.ts",
    "groupTitle": "Category"
  }
] });
