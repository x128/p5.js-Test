Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
};

function millisecondsToTime(timestamp)
{
    var ms = timestamp % 1000;
    var seconds = Math.floor((timestamp /= 1000) % 60);
    var minutes = Math.floor((timestamp /= 60) % 60);
    var hours = Math.floor((timestamp /= 60) % 24);
    var days = Math.floor(timestamp /= 24);

    return days
        + ':' + (hours).pad(2)
        + ':' + (minutes).pad(2)
        + ':' + (seconds).pad(2)
        + ':' + (ms).pad(3);
}

function getTimestampMs() {
    return new Date().getTime();
}

function getCurrentPageId() {
    return $('body').children('.ui-page-active')[0].id;
}