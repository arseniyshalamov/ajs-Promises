export default class GameSaving {
    constructor(data) {
        this.id = data.id;
        this.created = data.created;
        this.userInfo = {
            id: data.userInfo.id,
            name: data.userInfo.name,
            leveel: data.userInfo.level,
            points: data.userInfo.points,
        }
    }
}