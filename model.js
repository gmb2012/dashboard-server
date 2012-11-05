function Entry(value) {
    this.value = value;
    this.timestamp = new Date().getTime();
}

function Data(entriesToKeep) {
    this.data = [];
    this.entriesToKeep = entriesToKeep;

    this.set = function (value) {
        this.data.push(new Entry(value));

        if (this.data.length > this.entriesToKeep) {
            this.data = this.data.slice(this.entriesToKeep * -1);
        }

    }

    this.getLatest = function() {
        return this.data[this.data.length - 1];
    }

}

function Application(entriesToKeep) {
    this.data = {};
    this.entriesToKeep = entriesToKeep;

    this.add = function (type, value) {
        if(!this[type]) {
            this[type] = new Data(entriesToKeep);
        }
        this[type].set(value);
    }

    this.getLatest = function(type) {
        var returnValue = {};

        if(this[type]) {
            returnValue = this[type].getLatest();
        }

        return returnValue;
    }
}

module.exports = Application;