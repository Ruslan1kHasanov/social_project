FORMAT: 1A

# social_project Schema
Это тестовое описание

# Authorization [/auth]

Конечная точка для авторизации пользователя

## Do auth [POST]

+ Request (application/json)

Body

    {
        "email": "Ruslan",
        "password": "qwerty123"
    }

Schema

    {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        }
    }

+ Response 301 (application/json)

    + Headers

        Connection: keep-alive
        Content-Type: application/json; charset=utf-8
        Cookie: token=token_example


+ Response 401 (application/json)

    + Body

            {
                "message": "Wrong email or password!"
            }

    + Schema

        {
            "type": "object",
            "properties": {
                "message": {
                    "type": "string"
                }
            }
        }