class GetUsersService {
    static getRelevantPins() {
        return fetch('/api/pins')
        .then(res => res.json())
        .then(pins => pins)
        .catch(e => console.log(e))
    }
}

export default GetUsersService;