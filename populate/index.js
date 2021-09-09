import Game from "../model/game.js";
import Player from "../model/players.js";
import Team from "../model/team.js";
import User from "../model/user.js";
import Configuration from "../model/configuration.js";
import Menu from "../model/menu.js";
const RunnerPopulate = function () {
  localStorage.clear()
  const Populate = (model) => {
    let LIST = []

    const importCSV = () => {

    }

    const setList = (list) => {
      LIST = list

      LIST.forEach((e) => {
        const m = model.novas(e)
        m.save()

      });
    }
    return { setList, LIST }
  }

  const ConfigurationPopulate = Populate(Configuration)
  ConfigurationPopulate.setList([
    { name: 'team_size', value: 6 }
  ])

  const MenuPopulate = Populate(Menu)
  MenuPopulate.setList(
    [
      {
        "name": "games",
        "icon": "gamepad",
        "router": "games"
      },
      {
        "name": "players",
        "icon": "users",
        "router": "players"
      },
      {
        "name": "teams",
        "icon": "users",
        "router": "teams"
      },
      {
        "name": "configuration",
        "icon": "cog",
        "router": "configuration"
      },
      {
        "name": "drawteam",
        "icon": "random",
        "router": "drawteam"
      }
    ]
  )

  const TeamPopulate = Populate(Team)
  TeamPopulate.setList([
    { name: 'Time A' },
    { name: 'Time B' },
  ])

  const UserPopulate = Populate(User)
  UserPopulate.setList([
    { name: 'Dayan', email: 'dayan@gmail.com', senha: '123', is_adm: true }
  ])

  const GamePopulate = Populate(Game)
  GamePopulate.setList([
    { name: 'JM', date: '2021-09-06', time: '19:00' },
    { name: 'JM', date: '2021-09-10', time: '19:00' },
  ])

  const PlayerPopulate = Populate(Player)
  PlayerPopulate.setList(
    [
      {
        "name": "Rafa",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Emanuel",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Matheus",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Big",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "João marcos",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Borges",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Cebola",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Dayan",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Henrique",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Miguel",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Mateus",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      },
      {
        "name": "Andrick",
        "pos": "ata",
        "stars": 3,
        "team_id": 1,
        "img_src": "https://spng.pngfind.com/pngs/s/42-428449_anonymous-avatar-face-book-hd-png-download.png"
      }
    ]
  )


}
export default RunnerPopulate