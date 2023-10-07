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

# Setting a new password [/new-password]

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

# Setting a new password [/remind-password]

Запрос на сьрос пароля

## Send request [POST]

+ Request (application/json)

    + Body

            {
                "email": "example@mail.ru"
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string"
                    }
                }
            }

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "message": "Check ur mail"
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

# Группы [/groups]

## Get groups [GET]

Получение списка всех групп

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "groups_list": [
                    {
                        "id": 1,
                        "name": "MT-402",
                        "fuculty_name": "Математический факультет"
                    },
                                        {
                        "id": 2,
                        "name": "MT-401",
                        "fuculty_name": "Математический факультет"
                    }
                ]
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "groups_list": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": "number",
                                "name": "string",
                                "fuculty_name": "string"
                            }
                        }
                    }
                }
            }

+ Response 400

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

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

+ Response 401

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "message": "Auth Error"
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

# Информация о группе [/groups/{id}]

## Get groups [GET]

Получение информации о выбранной группе

+ Parameters

    + id: 1 (required) - Уникальный идентификатор группы

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "id": 1,
                "name": "MT-402",
                "fuculty_name": "Математический факультет"б
                "students": [
                    {
                        "id": 234,
                        "name": "Ruslan Khasanov",
                        "rating": 99,
                    },
                    {
                        "id": 235,
                        "name": "Arseniy Eliseev",
                        "rating": 98,
                    }
                    {
                        "id": 236,
                        "name": "Dmitry Zakirov",
                        "rating": 98,
                    }
                ]
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "name": {
                        "type": "string"
                    },
                    "rating": {
                        "type": "number"
                    },
                    "students": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": "number",
                                "name": "string",
                                "rating": "number"
                            }
                        }
                    }
                }
            }

+ Response 400

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

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

+ Response 401

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "message": "Auth Error"
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