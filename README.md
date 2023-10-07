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

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8
            Cookie: token=token_example

    + Body

            {
                "id": 21,
                "email": "teacher21@mail.ru",
                "name": "Potapov Valentin Vladimirovich"
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                }
            }


+ Response 401

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8

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
            }

# Информация о группе [/groups/{id}]

## Get group data [GET]

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
                "fuculty_name": "Математический факультет",
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
                    "fuculty_name": {
                        "type": "string"
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
            }

# Информация о конкретном студенте [/students/{id}]

## Get student data [GET]

Получение информации о выбранном студенте

+ Parameters

    + id: 234 (required) - Уникальный идентификатор студента

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "id": 1,
                "name": "Ruslan Khasanov",
                "email": "example@mail.ru",
                "fuculty_name": "Математический факультет",
                "rating": 99
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "email": {
                        "type": "string"
                    }
                    "name": {
                        "type": "string"
                    },
                    "fuculty_name": {
                        "type": "string"
                    },
                    "rating": {
                        "type": "number"
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
            }

## Get groups [PUT]

Изменение рейтинга студента

+ Request (application/json)

    + Body

            {
                "id": 234,
                "total_sum": 34,
                "is_positive": false,
                "description": "Some description",
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    }
                    "total_sum": {
                        "type": "number"
                    }
                    "is_positive": {
                        "type": "bool"
                    }
                    "description": {
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
                "message": "Done",
                "id_change": 4565,
                "date_of_chage": "23-10-2023",
                "description": "Some description",
                "new_rating": 200
            }

    + Schema

        {
            "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    },
                    "id_change": {
                        "type": "number"
                    },
                    "date_of_chage": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "new_rating": {
                        "type": "number"
                    },
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
            }

# История рейтинга студента [/students/{id}/history]

## Get student data [GET]

Получение истории понижения/повышения рейтинга студента

+ Parameters

    + id: 234 (required) - Уникальный идентификатор студента

+ Response 200

    + Headers

            Connection: keep+alive
            Content+Type: application/json; charset=utf+8;

    + Body

            {
                "student_id": 234,
                "history": [
                    {
                        "id_change": 4565,
                        "date_of_chage": "23-10-2023",
                        "description": "Some description",
                        "rating": 200
                    },
                    {
                        "id_change": 5667,
                        "date_of_chage": "26-10-2023",
                        "description": "Save cat",
                        "rating": 560
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
                    "history": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id_change": {
                                    "type": "number"
                                },
                                "date_of_chage": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "rating": {
                                    "type": "number"
                                },
                            }
                        }
                    }
                }
            }