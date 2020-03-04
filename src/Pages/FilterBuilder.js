const MONSTER_SIZES = [
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Huge",
    "Gargantuan"
];

export function getFilters(context){
    let filter = {};

    // Checkbox filters
    const alignmentFilters = findSelectedCheckboxes(context.state.alignmentCheckboxes);
    const movementFilters = findSelectedCheckboxes(context.state.movementCheckboxes);
    const typeFilters = findSelectedCheckboxes(context.state.typeCheckboxes); 
    
    // Dropdown filters
    const challengeRatings = context.state.sizes;
    const playerLevels = context.state.sizes;
    const encounterDifficulty = context.state.encounterDifficulty;

    if (alignmentFilters.length > 0){
        filter["alignment"] = alignmentFilters;
    }

    if (movementFilters.length > 0){
        filter["movement"] = movementFilters;
    }

    if (typeFilters.length > 0){
        filter["type"] = typeFilters;
    }

    filter["sizes"] = populateSizeFilter(context.state.sizes);

    if (challengeRatings){
        filter["challenge"] = challengeRatings;
    }

    if (playerLevels){
        filter["players"] = challengeRatings;
    }

    if (encounterDifficulty){
        filter["difficulty"] = encounterDifficulty;
    }

    return filter;
}


function findSelectedCheckboxes(checkboxes){
    let selected = [];

    for (let item in checkboxes){
        if (checkboxes[item] === true){
            selected.push(item);
        }
    }

    return selected;
}

function populateSizeFilter(sizes){

    let selectedSizes = [];
    let inRange = false;

    for (let size in MONSTER_SIZES){
        if (size === sizes.min){
            inRange = true;
        }
        if (inRange){
            selectedSizes.push(size);
        }
        if (size === sizes.max){
            return selectedSizes;
        }
    }
    return selectedSizes;
}