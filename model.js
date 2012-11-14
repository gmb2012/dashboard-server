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

    };

    this.getLatest = function() {
        return this.data[this.data.length - 1];
    };

}

function Application(entriesToKeep) {
    this.data = {};
    this.entriesToKeep = entriesToKeep;

    this.add = function (monitor, value) {
        if(!this[monitor]) {
            this[monitor] = new Data(entriesToKeep);
        }
        this[monitor].set(value);
    };

    this.getLatest = function(monitor) {
        var returnValue = {};

        if(this[monitor]) {
            returnValue = this[monitor].getLatest();
        }

        return returnValue;
    };
}

module.exports = Application;