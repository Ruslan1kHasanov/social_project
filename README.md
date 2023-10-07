FORMAT: 1A

# social_project Schema
Это описание 

# Authorization [/auth]

Конечная точка для авторизации пользователя

## Sign up [POST]

+ Request (application/json)

    + Body

            {
                "email": "Ruslan",
                "password": "qwerty123"
            }

    + Schema

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

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8
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

# Setting a new password

Установка нового пароля пользователем

## Send request [POST]

+ Request (application/json)

    + Body

            {
                "password": "qwerty123"
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "password": {
                        "type": "string"
                    }
                }
            }

+ Response 301

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "message": "New password setted"
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

    + Response 400

    + Body

            {
                "message": "Error"
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