<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## MCD

* salle
* user_role
* user
* block
* block_holds
* block_style
* block_level



```mermaid
classDiagram
    Role <--> User
    Room *--> Block
    Room *--> Block_Level
    Room *--> Block_Style
    Role <--> Permission
    Friend <--o User
    Team <--> User
    User <--> Comment
    User <--> Note
    User o--> Badge
    Note <--o Block
    User <--> Video
    User <--> Challenge
    Challenge <--* Block
    Block *--> User
    Video <--* Block
    Comment <--> Block
    Block *--> Block_Hold
    Block -- Block_Style
    Block -- Block_Level

    class Team {
      *id
      int groupUID
      User membre
    }
    class Friend {
      *id
      User from
      User to
      Date dateAmitiee
    }
    class Badge {
      *id
      int scoreMinimal
      string intitule
    }
    class Permission {
      *id
      int permUID
      string intitulePermission
    }
    class Room {
        *id
        float latitude
        float longitude
        User gerant
        Env3D environement(model, lights)
    }
    class User {
        *id
        string username
        string password
        Role role
        int score
        Image avatar
        Badge titre

    }
    class Role {
      *id
      string titre
      Permission[] permissions
    }
    class Block {
        *id
        User ouvreur
        Block_Style styleOuverture
        Block_Level difficulte
        Block_Hold[] prises
        Date dateOuverture
        Date dateDemontage
        bool statusVideo
        blob imageBase64
    }
    class Block_Style {
        *id
        string intitule
    }
    class Block_Level {
        *id
        string difficulte
        string intituleDifficulte
        string couleurDifficulte
    }
    class Block_Hold {
        *id
        Vector3[] vertices
        Face3[] faces
        string color
        float scale
        Vector3 position
        Vector3[] normal
    }
    class Comment {
      *id
      User auteur
      Block bloc
      string contenuCommentaire
    }
    class Note {
      *id
      User auteur
      float note      
    }
    class Video {
      *id
      User auteur
      string cheminFichier      
    }
    class Challenge {
      *id
      User auteur
      string cheminFichier      
    }    
```
