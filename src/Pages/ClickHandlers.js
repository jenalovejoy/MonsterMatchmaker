// Handling user selection for minimum challenge
export function setMinChallenge(context, i){
    context.setState(prevState => ({
        challengeRatings: {
        ...prevState.challengeRatings,
        [0]: i
        },
    }));
    console.log(context.state.challengeRatings);
    Object.keys(context.state.alignmentCheckboxes)
        .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
        .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        });
}

// Handling user selection for maximum challenge
export function setMaxChallenge(context, i){
    context.setState(prevState => ({
        challengeRatings: {
        ...prevState.challengeRatings,
        [1]: i
        },
    }));
    console.log(context.state.challengeRatings);
    Object.keys(context.state.alignmentCheckboxes)
        .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
        .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        });
}

// Handling user selection for minimum monster size
export function setMinSize(context, i){
    context.setState(prevState => ({
        sizes: {
            ...prevState.sizes,
            [0]: i
        },
        }));
    console.log(context.state.sizes);
    Object.keys(context.state.alignmentCheckboxes)
      .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

// Handling user selection for maximum monster size
export function setMaxSize(context, i){
    context.setState(prevState => ({
      sizes: {
        ...prevState.sizes,
        [1]: i
      },
    }));
    console.log(context.state.sizes);
    Object.keys(context.state.alignmentCheckboxes)
      .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }


// Handling user selection for monster movement types
export function handleMovementClick(context, i) {
    context.setState(prevState => ({
      movementCheckboxes: {
        ...prevState.movementCheckboxes,
        [i]: !prevState.movementCheckboxes[i]
      },
    }));
    console.log(context.state.movementCheckboxes);
    Object.keys(context.state.alignmentCheckboxes)
      .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  // Handling user selection for monster alignment
  export function handleAlignmentClick(context, i) {
    context.setState(prevState => ({
      alignmentCheckboxes: {
        ...prevState.alignmentCheckboxes,
        [i]: !prevState.alignmentCheckboxes[i]
      },
    }));
    console.log(context.state.alignmentCheckboxes);
    Object.keys(context.state.alignmentCheckboxes)
      .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  // Handling user selection for monster type
  export function handleMonsterTypeClick(context, i) {
    context.setState(prevState => ({
      typeCheckboxes: {
        ...prevState.typeCheckboxes,
        [i]: !prevState.typeCheckboxes[i]
      },
    }));
    console.log(context.state.typeCheckboxes);
    Object.keys(context.state.alignmentCheckboxes)
      .filter(checkbox => context.state.alignmentCheckboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }