<h1 align="center"> Westeros API </h1>

![APILogo](https://images.alphacoders.com/226/thumb-1920-226091.jpg)

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>


An API Rest from Game of thrones , you can get characters, houses and kingdoms. Made with NodeJs in framework Express.

You can interact with the API REST in the next link:
https://westeros-api-production.up.railway.app



# :hammer: Project functionalities

- `Funcionality 1`: Get single/all kingdoms, characters, and houses.
- `Funcionality 2`: Create kingdoms, characters, and houses(protected with jwt).
- `Funcionality 3`: Delete kingdoms, characters, and houses(protected with jwt).
- `Funcionality 3`: Modify kingdoms, characters, and houses(protected with jwt).
- `Funcionality 4`: Create, modify and login with users(protected with jwt)..

# ℹ️📄 Info and Pagination



The API will send all data unless you send mediaquerys.
You can chain several queries in the same call.
There is several mediaquerys working such as:

Global

|  Key   | Type |                Description                |
| :----: | :--: | :---------------------------------------: |
| Limit  | Int  | Number of objects you want for each page. |
| Offset | Int  |   Number of object you are pointing in    |

# 👑 Characters

There is a total of 6 characters sorted by id.

|   Key   |  Type  |                    Description                    |
| :-----: | :----: | :-----------------------------------------------: |
|   id    |  Int   |             The id of the character.              |
|  name   | string |            The name of the character.             |
|  title  | string | The title of the character (Lord, Queen, Prince). |
| houseId |  Int   |          The house where he/she belongs.          |

## Get all characters

You can access to the list of characters by using: https://westeros-api-production.up.railway.app/api/v1/characters endpoint.

## Get single character

You can access to a single character by using their id in the endpoint. `/characters/1`
You can access to a single character where you can see extra info from them.

## Create character

You can create a character sending a POST using the `/characters` endpoint.
This is an schema of what you need to send in the petition.

|   Key   |  Type  |                    Description                    |
| :-----: | :----: | :-----------------------------------------------: |
|  name   | string |            The name of the character.             |
|  title  | string | The title of the character (Lord, Queen, Prince). |
| houseId |  Int   |          The house where he/she belongs.          |

This is protected with a JWT, so you need to send a bearer token.

## Edit characters

You can edit an existing character sendig a PATCH using their id in the `/characters/id` endpoint.
This is protected with a JWT, so you need to send a bearer token.

## Delete character

You can delete a character by sending a DELETE using their id in the `/characters/id` endpoint.
This is protected with a JWT, so you need to send a bearer token.

# 🐺 Houses 🦁

There is a few houses sorted by id.

|  Key  |  Type  |                                     Description                                     |
| :---: | :----: | :---------------------------------------------------------------------------------: |
|  id   |  Int   |                                The id of the house.                                 |
| name  | string |                               The name of the house.                                |
| sigil | string |                               An url for this sigil.                                |
| words | string | Each of the noble houses of the Seven Kingdoms have their own official family words |

## Get all houses

You can access to the list of houses by using: https://westeros-api-production.up.railway.app/api/v1/houses endpoint.

## Get single house

You can access to a single house by using their id in the endpoint. `/houses/1`
You can access to a single house where you can see extra info from them.

# ⛰️ Kingdoms 🏜️

There is a few kingdoms sorted by id.

|   Key   |  Type  |       Description        |
| :-----: | :----: | :----------------------: |
|   id    |  Int   |  The id of the kingdom.  |
|  name   | string | The name of the kingdom. |
|  ruler  | string |  Who currently governs.  |
| capital | string |   The seats of power.    |

## Get all kingdoms

You can access to the list of kingdoms by using: https://westeros-api-production.up.railway.app/api/v1/kingdoms endpoint.

## Get single kingdom

You can access to a single kingdom by using their id in the endpoint. `/kingdom/1`
You can access to a single kingdom where you can see extra info from them.

# ⚠️✅ Login

You can access with a POST in: https://westeros-api-production.up.railway.app/api/v1/auth/login endpoint with an username and password. In this access you can obtain a JWT to send petitions to the create, delete, patch and post endpoint of characters, houses and kingdoms.

There is two types of 'users'

|   User   |                             Description                             |
| :------: | :-----------------------------------------------------------------: |
|  admin   |                   Permission to create and edit.                    |
| mad king | Permission to create, edit and delete ALL, try to burn them all 🔥. |

# 🔨🔧 CURRENTLY WORKING ON:

- Frontend page for login! 🔴
-  Add more characters, houses and kingdoms! 🔴 (Feel free to ask for a mad king user to enrich the db).
  
