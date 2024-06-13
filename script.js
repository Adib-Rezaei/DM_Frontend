document.addEventListener("DOMContentLoaded", () => {
    const fetchDataAndUpdate = () => {
        fetch('https://dm-contest.darkube.app/contest/leaderboard') // Replace with the actual API endpoint
            .then(response => response.json())
            .then(data => {
                populateLeaderboard(data);
            })
            .catch(error => console.error('Error fetching leaderboard data:', error));
    };

    const populateLeaderboard = (teams) => {
        const leaderboardBody = document.getElementById('leaderboard-body');
        leaderboardBody.innerHTML = ''; // Clear existing data

        teams.forEach(team => {
            const row = document.createElement('tr');

            const rankCell = document.createElement('td');
            rankCell.textContent = team.rank;
            row.appendChild(rankCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = team.name;
            row.appendChild(nameCell);

            // const solvedCell = document.createElement('td');
            // solvedCell.textContent = team.main_solved;
            // row.appendChild(solvedCell);
            //
            // const citySolved = document.createElement('td');
            // citySolved.textContent = team.city_solved;
            // row.appendChild(citySolved);
            //
            // const riddleSolved = document.createElement('td');
            // riddleSolved.textContent = team.riddle_solved;
            // row.appendChild(riddleSolved);

            const score = document.createElement('td');
            score.textContent = team.credit;
            row.appendChild(score);

            leaderboardBody.appendChild(row);
        });
    };

    fetchDataAndUpdate(); // Initial fetch
    setInterval(fetchDataAndUpdate, 10000); // Fetch data every 10 seconds
});
