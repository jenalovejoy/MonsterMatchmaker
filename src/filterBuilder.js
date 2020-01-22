$(document).ready(async () => {
    const monsterTypes = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
    const alignmentA = ["Lawful", "Neutral", "Chaotic"];
    const alignmentB = ["Good", "Neutral", "Evil"];
    const alignment = buildMultidimentionalOptions(alignmentA, alignmentB);
    buildLabelTable("#typeSelector", monsterTypes, "Type", 4);
    buildLabelTable("#alignmentSelector", alignment, "Alignment", 3);
});
// Constructs a table of checkbox form elements, given an array of table elements, a title, and width
function buildLabelTable(container, elements, title, width) {
    const numItems = elements.length;
    const numRows = numItems / width;
    let tableTemplate = `<h6 title=${title}>${title}</h6>
        <table class="optionsTable" id="${title}Table">
        </table>`;
    $(container).append(tableTemplate); // append primary table
    for (let i = 0; i < numRows; i++) {
        let rowTemplate = `<tr id="${title}TableRow${i}"><div class="form-check form-check-inline">
            </tr>`;
        $(`#${title}Table`).append(rowTemplate); // append individual row
        // For each row of the table, append the appropriate number of columns
        for (let j = i * width; j < (i + 1) * width; j++) {
            if (j < elements.length) { // go until there are no more elements to add
                let item = elements[j];
                let labelItemTemplate = `<td id=${title}TableItem>
                    <label for="${item}Check"><input type="checkbox" value="" id="${item}Check">
                        ${item}
                    </label></td>`;
                $(`#${title}TableRow${i}`).append(labelItemTemplate);
            }
        }
    }
}
// Combines two dimensions of options into their cross-product
function buildMultidimentionalOptions(rows, columns) {
    let options = [];
    for (let r of rows) {
        for (let c of columns) {
            options.push(`${r} ${c}`);
        }
    }
    return options;
}
