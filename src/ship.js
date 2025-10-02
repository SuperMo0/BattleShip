class ship {
    constructor(len) {
        this.size = len;
        this.sank = false;
        this.spots = Array(len);
        this.spots.fill();
        this.spots.forEach((v, ix, a) => { a[ix] = false });
        this.hits = 0;
    }

    hit(place) {
        if (this.spots[place]) throw new Error("can't hit a cell twice!");
        this.spots[place] = true;
        this.hits++;
    }
    isdead() {
        return this.hits == this.size;
    }

}


module.exports = { ship }

