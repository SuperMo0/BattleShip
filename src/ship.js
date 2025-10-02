class ship {
    constructor(len) {
        this.size = len;
        this.sank = false;
        this.spots = Array(len);
        this.spots.forEach((v, ix, a) => { a[ix] = false });
        this.hits = 0;
    }

    hit(place) {
        if (spots[place]) throw new Error("can't hit a cell twice!");
        spots[place] = true;
        hits++;
    }
    isdead() {
        return this.hits == this.size;
    }

}


module.exports = { ship }

