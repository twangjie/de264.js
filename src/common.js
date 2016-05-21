/**
 * Created by gd on 16/5/12.
 */
define([
    'de264/defs'
], function(_defs) {
    function isISlice(type) {
        return (type % 5 === _defs.I_SLICE);
    }
    
    function isPSlice(type) {
        return (type % 5 === _defs.P_SLICE);
    }
    
    function getNeighbourA4x4(blockIndex) {
        return _defs.NA_MAP[blockIndex];
    }
    
    function getNeighbourB4x4(blockIndex) {
        return _defs.NB_MAP[blockIndex];
    }

    /*
     Check if neighbour macroblock is available. Neighbour macroblock
     is considered available if it is within the picture and belongs
     to the same slice as the current macroblock.
     */
    function isNeighbourAvailable(mb, neighbour) {
        if (!neighbour || mb.slice != neighbour.slice) {
            return false;
        }
        return true;
    }
    
    return {
        isISlice: isISlice,
        isPSlice: isPSlice,
        getNeighbourA4x4: getNeighbourA4x4,
        getNeighbourB4x4: getNeighbourB4x4,
        isNeighbourAvailable: isNeighbourAvailable
    };
});