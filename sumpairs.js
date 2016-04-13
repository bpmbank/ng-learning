var sum_pairs=function(ints, s) {
    var seen = [];
    for (var x = 0; x < ints.length; x++) {
        var resIdx = seen[ints[x]];
        if (resIdx != null) {
            return [ints[resIdx], ints[x]];
        }
    seen[s - ints[x]] = x;
    }
}
