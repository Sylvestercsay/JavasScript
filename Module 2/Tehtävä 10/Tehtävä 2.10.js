// Get number of candidates
const numCandidates = Number(prompt("Enter the number of candidates:"));

// Create candidates array with name and votes
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
  const name = prompt("Name for candidate " + (i + 1) + ":");
  candidates.push({
    name: name,
    votes: 0,
  });
}

// Get number of voters
const numVoters = Number(prompt("Enter the number of voters:"));

// Ask each voter who they vote for
for (let i = 0; i < numVoters; i++) {
  const vote = prompt("Voter " + (i + 1) + ", enter candidate name to vote for (leave empty for blank vote):");

  if (vote === "" || vote === null) {
    console.log("Voter " + (i + 1) + " cast an empty vote.");
  } else {
    let found = false;

    for (let j = 0; j < candidates.length; j++) {
      if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
        candidates[j].votes = candidates[j].votes + 1;
        found = true;
      }
    }

    if (found === false) {
      console.log("Candidate " + vote + " not found. Vote not counted.");
    }
  }
}

// Sort candidates by votes from highest to lowest
candidates.sort((a, b) => {
  return b.votes - a.votes;
});

// Print winner
console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");

// Print all results
console.log("Results:");
for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}
